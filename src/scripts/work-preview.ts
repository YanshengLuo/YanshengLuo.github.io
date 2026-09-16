// Work page: compact floating preview for outputs linked to a research project.
// Desktop with a fine pointer only (>= 1200px); elsewhere each row's
// "Project page" link carries the same destination, so nothing depends on hover.
// The card is fixed-position and sits below (or above) the hovered row, so it
// never shifts the layout or covers the text of the item being read.

export {};

const preview = document.querySelector<HTMLElement>("[data-work-preview]");
const desktop = window.matchMedia("(min-width: 75rem) and (hover: hover) and (pointer: fine)");

if (preview) {
  const image = preview.querySelector<HTMLImageElement>("[data-work-preview-image]")!;
  const label = preview.querySelector<HTMLElement>("[data-work-preview-label]")!;
  const title = preview.querySelector<HTMLElement>("[data-work-preview-title]")!;
  const meta = preview.querySelector<HTMLElement>("[data-work-preview-meta]")!;
  const rows = [...document.querySelectorAll<HTMLElement>(".wi[data-preview-label]")];
  image.addEventListener("load", () => place());
  const GAP = 10;
  const PAD = 16;
  let current: HTMLElement | null = null;
  let anchorX = 0;

  const place = () => {
    if (!current) return;
    const row = current.getBoundingClientRect();
    const { width, height } = preview.getBoundingClientRect();
    const x = Math.min(Math.max(PAD, anchorX), window.innerWidth - width - PAD);
    let y = row.bottom + GAP;
    if (y + height > window.innerHeight - PAD) y = row.top - height - GAP;
    y = Math.max(PAD, y);
    preview.style.setProperty("--preview-x", `${Math.round(x)}px`);
    preview.style.setProperty("--preview-y", `${Math.round(y)}px`);
  };

  const show = (row: HTMLElement, x: number) => {
    if (!desktop.matches) return;
    const data = row.dataset;
    if (current !== row) {
      current = row;
      label.textContent = data.previewLabel ?? "";
      title.textContent = row.querySelector(".wi__title")?.textContent?.trim() ?? "";
      meta.textContent = data.previewMeta ?? "";
      preview.style.setProperty("--preview-accent", data.previewAccent ?? "#164e73");
      if (data.previewImage) {
        image.src = data.previewImage;
        image.alt = data.previewAlt ?? "";
        image.hidden = false;
      } else {
        image.hidden = true;
        image.removeAttribute("src");
      }
    }
    anchorX = x;
    place();
    preview.classList.add("is-visible");
  };

  const hide = (row: HTMLElement) => {
    if (current !== row) return;
    preview.classList.remove("is-visible");
    current = null;
  };

  for (const row of rows) {
    row.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "mouse") show(row, event.clientX + 18);
    });
    row.addEventListener(
      "pointermove",
      (event) => {
        if (current !== row) return;
        anchorX = event.clientX + 18;
        place();
      },
      { passive: true },
    );
    row.addEventListener("pointerleave", () => hide(row));
    // Keyboard: focusing the row's project link shows the same preview.
    row.addEventListener("focusin", () => {
      const body = row.querySelector(".wi__body")?.getBoundingClientRect();
      show(row, body ? body.left : row.getBoundingClientRect().left);
    });
    row.addEventListener("focusout", () => hide(row));
  }

  window.addEventListener("scroll", () => place(), { passive: true });
  desktop.addEventListener("change", () => {
    if (current) hide(current);
  });
}
