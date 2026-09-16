// Post-build verification of the public output in ./dist.
//
//   npm run verify              privacy scan, internal links/anchors, page structure
//   npm run verify -- --external   also request every external URL
//
// Exits non-zero if anything fails.
import { readdir, readFile, stat } from "node:fs/promises";
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const checkExternal = process.argv.includes("--external");
const problems = [];
const notes = [];

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

if (!existsSync(dist)) {
  console.error("dist/ not found — run `npm run build` first.");
  process.exit(1);
}

const files = await walk(dist);
const rel = (f) => path.relative(dist, f).split(path.sep).join("/");
const CV = "documents/Yansheng_Luo_CV.pdf";

// ---------------------------------------------------------------- privacy
// File types that must never be published.
const forbiddenNames = [/sources/i, /\.pptx?$/i, /\.docx?$/i, /\.zip$/i];
// Content that must not appear in any public page, script, or data file.
// Project-specific restricted terms (unpublished details, private contact data)
// live in an untracked local file, tools/restricted-terms.local.json (a JSON
// array of strings), so this public script does not repeat them.
const forbiddenText = ["utm_", "fbclid", "gclid", "sources/", "sources\\"];
const localTerms = path.join(root, "tools", "restricted-terms.local.json");
if (existsSync(localTerms)) forbiddenText.push(...JSON.parse(await readFile(localTerms, "utf8")));
else notes.push("tools/restricted-terms.local.json not found; only generic restricted-text checks ran.");

for (const file of files) {
  const name = rel(file);
  if (forbiddenNames.some((re) => re.test(name))) problems.push(`forbidden file in dist: ${name}`);
  const { size } = await stat(file);
  if (/\.(jpe?g|png|webp|avif|gif)$/i.test(name) && size > 600 * 1024) {
    problems.push(`large image (${(size / 1024).toFixed(0)} KB): ${name}`);
  }
  if (/\.jpe?g$/i.test(name)) problems.push(`JPEG emitted (originals must not be served): ${name}`);
  if (name === CV) continue;
  if (/\.(html|js|css|xml|txt|json|svg|webmanifest)$/i.test(name)) {
    const text = await readFile(file, "utf8");
    for (const needle of forbiddenText) {
      if (text.includes(needle)) problems.push(`restricted text "${needle}" in ${name}`);
    }
  }
}

// CV must be a byte-identical copy of the source PDF.
const cvPath = path.join(dist, CV);
if (!existsSync(cvPath)) problems.push(`missing ${CV}`);
else {
  const sha = async (p) => createHash("sha256").update(await readFile(p)).digest("hex");
  const source = path.join(root, "sources", "Yansheng_Luo_CV_public.pdf");
  if (existsSync(source)) {
    if ((await sha(cvPath)) !== (await sha(source))) problems.push("CV PDF differs from sources/Yansheng_Luo_CV_public.pdf");
    else notes.push("CV PDF is byte-identical to the public-safe source CV.");
  }
}

// ---------------------------------------------------------------- pages
const pages = files.filter((f) => f.endsWith(".html"));
const idsByPage = new Map();
const htmlByPage = new Map();

const pageUrl = (file) => {
  const r = rel(file);
  if (r === "index.html") return "/";
  if (r.endsWith("/index.html")) return `/${r.slice(0, -"index.html".length)}`;
  return `/${r}`;
};

for (const file of pages) {
  const html = await readFile(file, "utf8");
  const url = pageUrl(file);
  htmlByPage.set(url, html);
  idsByPage.set(url, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));

  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  if (h1s !== 1) problems.push(`${url}: expected one <h1>, found ${h1s}`);
  if (!/<html lang="en"/.test(html)) problems.push(`${url}: missing <html lang>`);
  if (!/<title>[^<]+<\/title>/.test(html)) problems.push(`${url}: missing <title>`);
  if (!/<link rel="canonical"/.test(html)) problems.push(`${url}: missing canonical link`);
  if (!/<main[\s>]/.test(html)) problems.push(`${url}: missing <main>`);
  for (const img of html.match(/<img\b[^>]*>/g) || []) {
    if (!/\salt=/.test(img)) problems.push(`${url}: <img> without alt: ${img.slice(0, 90)}…`);
    if (/data-lightbox-image/.test(img)) continue;
    if (!/\swidth=/.test(img) || !/\sheight=/.test(img)) problems.push(`${url}: <img> without dimensions: ${img.slice(0, 90)}…`);
  }
  // Heading levels should not skip (h2 -> h4).
  let last = 0;
  for (const m of html.matchAll(/<h([1-6])[\s>]/g)) {
    const level = Number(m[1]);
    if (last && level > last + 1) problems.push(`${url}: heading jumps from h${last} to h${level}`);
    last = level;
  }
}

// ---------------------------------------------------------------- links
const external = new Map();

for (const [url, html] of htmlByPage) {
  const refs = [...html.matchAll(/\s(?:href|src)="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, "&"));
  const srcsets = [...html.matchAll(/\ssrcset="([^"]+)"/g)].flatMap((m) =>
    m[1].split(",").map((part) => part.trim().split(/\s+/)[0]),
  );
  for (const ref of [...refs, ...srcsets]) {
    if (!ref || ref.startsWith("data:")) continue;
    if (/^mailto:/.test(ref)) continue;
    if (/^https?:\/\//.test(ref)) {
      if (ref.startsWith("https://yanshengluo.github.io")) continue; // canonical/OG
      if (!external.has(ref)) external.set(ref, new Set());
      external.get(ref).add(url);
      continue;
    }
    const target = new URL(ref, `https://local${url}`);
    const [pathname, hash] = [decodeURIComponent(target.pathname), target.hash.slice(1)];
    let file = path.join(dist, pathname);
    if (pathname.endsWith("/")) file = path.join(file, "index.html");
    if (!existsSync(file)) {
      problems.push(`${url}: broken internal link ${ref}`);
      continue;
    }
    if (hash) {
      const ids = idsByPage.get(pathname.endsWith("/") ? pathname : `${pathname}`);
      if (ids && !ids.has(decodeURIComponent(hash))) problems.push(`${url}: missing anchor #${hash} on ${pathname}`);
    }
  }
}

for (const ref of external.keys()) {
  if (/[?&](utm_|fbclid|gclid)/.test(ref)) problems.push(`tracking parameter in ${ref}`);
}

if (checkExternal) {
  for (const [ref, from] of external) {
    try {
      const res = await fetch(ref, {
        method: "GET",
        redirect: "follow",
        headers: { "user-agent": "Mozilla/5.0 (link check)" },
        signal: AbortSignal.timeout(20000),
      });
      const line = `${res.status} ${ref}  (from ${[...from].join(", ")})`;
      // LinkedIn answers automated requests with 999; that is not a broken link.
      if (res.ok || res.status === 999) notes.push(`external ok: ${line}`);
      else problems.push(`external link returned ${line}`);
    } catch (error) {
      problems.push(`external link failed: ${ref} (${error.message})`);
    }
  }
} else {
  notes.push(`external links found (not requested; use --external): ${[...external.keys()].join(", ")}`);
}

// ---------------------------------------------------------------- report
console.log(`Checked ${files.length} files, ${pages.length} pages in dist/.`);
console.log("\nFiles:");
for (const file of files) console.log(`  ${rel(file)}  ${((await stat(file)).size / 1024).toFixed(1)} KB`);
if (notes.length) console.log(`\nNotes:\n  ${notes.join("\n  ")}`);
if (problems.length) {
  console.log(`\nProblems (${problems.length}):\n  ${problems.join("\n  ")}`);
  process.exit(1);
}
console.log("\nAll checks passed.");
