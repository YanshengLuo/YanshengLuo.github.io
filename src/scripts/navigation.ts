// Header scroll state and the mobile menu disclosure.
// Without JavaScript the header shows the links as a plain row (see Header.astro).

export {};

const header = document.querySelector<HTMLElement>("[data-site-header]");
const toggle = document.querySelector<HTMLButtonElement>("[data-nav-toggle]");
const panel = document.getElementById("site-nav");

if (header) {
  let ticking = false;
  const update = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
    ticking = false;
  };
  update();
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
}

if (header && toggle && panel) {
  const label = toggle.querySelector<HTMLElement>("[data-nav-label]");
  const isOpen = () => toggle.getAttribute("aria-expanded") === "true";

  const setOpen = (open: boolean, restoreFocus = false) => {
    toggle.setAttribute("aria-expanded", String(open));
    if (label) label.textContent = open ? "Close" : "Menu";
    panel.classList.toggle("is-open", open);
    header.classList.toggle("menu-open", open);
    if (!open && restoreFocus) toggle.focus();
  };

  toggle.addEventListener("click", () => setOpen(!isOpen()));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) setOpen(false, true);
  });

  // Close after choosing a destination (covers same-page anchors like /#throughline).
  panel.addEventListener("click", (event) => {
    if ((event.target as Element).closest("a")) setOpen(false);
  });

  document.addEventListener("click", (event) => {
    if (isOpen() && !header.contains(event.target as Node)) setOpen(false);
  });

  // Reset when resizing into the desktop layout.
  window.matchMedia("(min-width: 48rem)").addEventListener("change", () => setOpen(false));
}
