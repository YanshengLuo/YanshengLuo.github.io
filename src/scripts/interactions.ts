// ---------------------------------------------------------------- page jump links (Work, About)

function initWorkJump(root: HTMLElement) {
  const links = [
    ...root.querySelectorAll<HTMLAnchorElement>(
      '.page-jump a[href^="#"], .work-nav a[href^="#"]',
    ),
  ];
  const sections = links
    .map((link) => document.getElementById(link.getAttribute("href")!.slice(1)))
    .filter((section): section is HTMLElement => section !== null);
  if (!sections.length) return;

  const setActive = (id: string) => {
    links.forEach((link) => {
      if (link.getAttribute("href") === `#${id}`)
        link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };

  let ticking = false;
  const update = () => {
    ticking = false;
    const line = window.innerHeight * 0.3;
    let active = sections.find((section) => !section.hidden)?.id ?? "";
    for (const section of sections)
      if (!section.hidden && section.getBoundingClientRect().top <= line)
        active = section.id;
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

export {};
const main = document.getElementById("main");
if (main) {
  initWorkJump(main);
}
