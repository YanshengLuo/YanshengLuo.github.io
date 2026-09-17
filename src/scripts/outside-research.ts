// About page "Outside research" slideshow: Previous/Next arrows, arrow keys
// while focus is inside the slideshow, and horizontal touch swipes. Inactive
// slides are inert so keyboard and screen-reader users only reach the one shown.

export {};

const root = document.querySelector<HTMLElement>("[data-outside]");
const slides = root ? [...root.querySelectorAll<HTMLElement>("[data-outside-slide]")] : [];

if (root && slides.length > 1) {
  const controls = root.querySelector<HTMLElement>("[data-outside-controls]");
  const count = root.querySelector<HTMLElement>("[data-outside-count]");
  const track = root.querySelector<HTMLElement>("[data-outside-track]");
  const names = slides.map((slide) => slide.getAttribute("aria-label")?.split(": ")[1] ?? "");
  const pad = (n: number) => String(n).padStart(2, "0");
  let index = 0;

  const show = (next: number, direction: number) => {
    index = (next + slides.length) % slides.length;
    root.style.setProperty("--outside-dir", String(direction));
    slides.forEach((slide, i) => {
      const active = i === index;
      slide.toggleAttribute("data-active", active);
      slide.inert = !active;
    });
    if (count) count.textContent = `${pad(index + 1)} / ${pad(slides.length)} · ${names[index]}`;
  };

  root.querySelector("[data-outside-prev]")?.addEventListener("click", () => show(index - 1, -1));
  root.querySelector("[data-outside-next]")?.addEventListener("click", () => show(index + 1, 1));

  root.addEventListener("keydown", (event) => {
    const target = event.target as HTMLElement;
    if (target.closest("input, textarea")) return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      show(index - 1, -1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      show(index + 1, 1);
    }
  });

  // Touch swipe: a mostly horizontal drag of at least 48px changes slide.
  let startX = 0;
  let startY = 0;
  track?.addEventListener(
    "pointerdown",
    (event) => {
      if (event.pointerType === "mouse") return;
      startX = event.clientX;
      startY = event.clientY;
    },
    { passive: true },
  );
  track?.addEventListener(
    "pointerup",
    (event) => {
      if (event.pointerType === "mouse") return;
      const dx = event.clientX - startX;
      const dy = event.clientY - startY;
      if (Math.abs(dx) >= 48 && Math.abs(dx) > Math.abs(dy) * 1.5) show(index + (dx < 0 ? 1 : -1), dx < 0 ? 1 : -1);
    },
    { passive: true },
  );

  if (controls) controls.hidden = false;
  root.dataset.enabled = "";
  show(0, 1);
}
