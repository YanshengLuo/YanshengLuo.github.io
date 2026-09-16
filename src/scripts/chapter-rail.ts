// Chapter rail: document scroll progress, active section, section accent, and
// dark-section contrast inversion. The rail is plain anchor links, so it still
// navigates without JavaScript; this only adds progress and the active state.
//
// The active chapter is the last section whose top has passed a reading line
// 42% down the viewport, recomputed on every animation frame that follows a
// scroll or resize. That keeps it exact during fast scrolls and anchor jumps,
// where IntersectionObserver callbacks can be skipped.

export {};

const rail = document.querySelector<HTMLElement>("[data-chapter-rail]");
const progress = document.querySelector<HTMLElement>("[data-rail-progress]");
const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-rail-link]"));
const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-chapter]"));

if (rail && links.length && sections.length) {
  let ticking = false;
  let activeId = "";

  const setActive = (id: string) => {
    if (id === activeId) return;
    activeId = id;
    for (const link of links) {
      if (link.dataset.railLink === id) {
        link.setAttribute("aria-current", "true");
        if (link.dataset.accent) rail.style.setProperty("--rail-accent", link.dataset.accent);
      } else {
        link.removeAttribute("aria-current");
      }
    }
    const section = sections.find((s) => s.dataset.chapter === id);
    rail.dataset.tone = section?.dataset.tone === "dark" ? "dark" : "light";
  };

  const update = () => {
    ticking = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    progress?.style.setProperty("--rail-progress", `${(ratio * 100).toFixed(2)}%`);

    const line = window.innerHeight * 0.42;
    let current = sections[0];
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= line) current = section;
    }
    // At the very bottom the last chapter may never reach the line.
    if (max > 0 && window.scrollY >= max - 2) current = sections[sections.length - 1];
    setActive(current.dataset.chapter ?? "home");
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
