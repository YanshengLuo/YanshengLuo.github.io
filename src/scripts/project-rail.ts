// Project-section navigator: highlights the section being read and fills the
// track in proportion to the reader's position among the page's sections.

export {};

const rail = document.querySelector<HTMLElement>("[data-project-rail]");
const contents = document.querySelector<HTMLDetailsElement>(
  "[data-study-contents]",
);
const wide = window.matchMedia("(min-width: 1024px)");
if (contents) {
  const sizeContents = () => {
    contents.open = wide.matches;
  };
  sizeContents();
  wide.addEventListener("change", sizeContents);
  contents.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      if (!wide.matches) contents.open = false;
      const heading = document.getElementById(
        link.dataset.projectRailLink ?? "",
      );
      if (heading) {
        heading.tabIndex = -1;
        heading.focus({ preventScroll: true });
      }
    }),
  );
}
const links = [
  ...document.querySelectorAll<HTMLAnchorElement>("[data-project-rail-link]"),
];
const headings = links
  .map((link) => document.getElementById(link.dataset.projectRailLink ?? ""))
  .filter((heading): heading is HTMLElement => heading !== null);

if (rail && headings.length > 1) {
  let ticking = false;

  const update = () => {
    ticking = false;
    const line = window.innerHeight * 0.36;
    let index = 0;
    headings.forEach((heading, i) => {
      if (heading.getBoundingClientRect().top <= line) index = i;
    });
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (max > 0 && window.scrollY >= max - 2) index = headings.length - 1;

    links.forEach((link, i) => {
      if (i === index) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
    rail.style.setProperty(
      "--project-rail-progress",
      `${(index / (headings.length - 1)) * 100}%`,
    );
  };

  const queue = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  window.addEventListener("scroll", queue, { passive: true });
  window.addEventListener("resize", queue, { passive: true });
  update();
}
