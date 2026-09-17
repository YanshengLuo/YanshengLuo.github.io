// Site-wide interaction layer: selective section reveals, low-amplitude
// pointer highlights on research cards, and the Work page's active jump link.
// Everything is progressive: without JavaScript all content is visible and
// static, and reduced-motion users get no reveal or pointer effects.

export {};

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
const main = document.getElementById("main");

// ---------------------------------------------------------------- reveal

const REVEAL_SELECTOR = [
  "#throughline .throughline__head",
  "#current .folio-head",
  "#current .feature",
  "#acomys .acomys-layout",
  "#protein .protein-layout",
  "#outputs .folio-head",
  "#outputs .outputs-layout",
  "#about .home-about__grid",
  ".project__visual",
  ".project__body > h2",
  ".project__body > figure",
  ".project__body > .scope",
  ".work__section .work__rail",
  ".about__block",
  ".outside",
].join(",");

function initReveal(root: HTMLElement) {
  const elements = [...root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)];
  // Project headings keep a short accent rule; it is drawn with the reveal.
  const headings = elements.filter((el) => el.matches(".project__body > h2"));
  headings.forEach((h) => h.classList.add("heading-rule"));

  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    headings.forEach((h) => h.classList.add("is-visible"));
    return;
  }

  // Anything already on screen is left alone, so the first paint never flickers.
  const below = elements.filter((el) => el.getBoundingClientRect().top > window.innerHeight * 0.92);
  elements.filter((el) => !below.includes(el)).forEach((el) => el.classList.add("is-visible"));

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        observer.unobserve(el);
        el.classList.add("is-visible");
        // Hand the element back to its own hover transitions once revealed.
        const delay = parseFloat(el.style.getPropertyValue("--reveal-delay")) || 0;
        window.setTimeout(() => {
          el.classList.remove("reveal");
          el.style.removeProperty("--reveal-delay");
        }, delay + 650);
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );

  below.forEach((el, i) => {
    el.classList.add("reveal");
    el.style.setProperty("--reveal-delay", `${(i % 3) * 45}ms`);
    observer.observe(el);
  });
}

// ---------------------------------------------------------------- pointer cards

function spotColor(card: HTMLElement): string {
  if (card.classList.contains("feature--imrs")) return "29, 98, 136";
  if (card.classList.contains("feature")) return "126, 57, 73";
  if (card.closest("#recognition")) return "51, 78, 98";
  if (card.closest("#teaching")) return "61, 105, 89";
  return "22, 78, 115";
}

function initPointerCards(root: HTMLElement) {
  if (!finePointer.matches || reduceMotion.matches) return;
  root.querySelectorAll<HTMLElement>(".feature, .output, .work__section .wi").forEach((card) => {
    card.classList.add("pointer-card");
    card.style.setProperty("--spot-rgb", spotColor(card));
    card.addEventListener(
      "pointermove",
      (event) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
        card.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
      },
      { passive: true },
    );
  });
}

// ---------------------------------------------------------------- page jump links (Work, About)

function initWorkJump(root: HTMLElement) {
  const links = [...root.querySelectorAll<HTMLAnchorElement>('.page-jump a[href^="#"]')];
  const sections = links
    .map((link) => document.getElementById(link.getAttribute("href")!.slice(1)))
    .filter((section): section is HTMLElement => section !== null);
  if (!sections.length) return;

  const setActive = (id: string) => {
    links.forEach((link) => link.setAttribute("aria-current", String(link.getAttribute("href") === `#${id}`)));
  };

  let ticking = false;
  const update = () => {
    ticking = false;
    const line = window.innerHeight * 0.3;
    let active = "";
    for (const section of sections) if (section.getBoundingClientRect().top <= line) active = section.id;
    setActive(active);
  };
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  update();
}

if (main) {
  initReveal(main);
  initPointerCards(main);
  initWorkJump(main);
}
