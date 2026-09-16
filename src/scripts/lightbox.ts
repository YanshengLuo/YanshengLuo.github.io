// Native <dialog> lightbox for approved project images.
// Triggers are ordinary links to the full-size image, so the image still
// opens without JavaScript; with JavaScript the link opens the dialog instead.
// Figures are stepped in document order with Previous/Next or the arrow keys.

export {};

const dialog = document.querySelector<HTMLDialogElement>("[data-lightbox]");

if (dialog && typeof dialog.showModal === "function") {
  const image = dialog.querySelector<HTMLImageElement>("[data-lightbox-image]");
  const caption = dialog.querySelector<HTMLElement>("[data-lightbox-caption]");
  const count = dialog.querySelector<HTMLElement>("[data-lightbox-count]");
  const nav = dialog.querySelector<HTMLElement>("[data-lightbox-nav]");
  const closeButton = dialog.querySelector<HTMLButtonElement>("[data-lightbox-close]");
  const triggers = [...document.querySelectorAll<HTMLAnchorElement>("[data-lightbox-trigger]")];
  let opener: HTMLElement | null = null;
  let index = 0;

  if (nav) nav.hidden = triggers.length < 2;

  const show = (i: number) => {
    if (!image || !caption || !triggers.length) return;
    index = (i + triggers.length) % triggers.length;
    const trigger = triggers[index];
    const { full, alt, caption: text, width, height } = trigger.dataset;
    image.src = full ?? trigger.href;
    image.alt = alt ?? "";
    if (width) image.width = Number(width);
    if (height) image.height = Number(height);
    caption.textContent = text ?? "";
    if (count) count.textContent = triggers.length > 1 ? `${index + 1} / ${triggers.length}` : "";
  };

  triggers.forEach((trigger, i) => {
    trigger.addEventListener("click", (event) => {
      if (!image || !caption) return;
      event.preventDefault();
      opener = trigger;
      show(i);
      dialog.showModal();
      closeButton?.focus();
    });
  });

  closeButton?.addEventListener("click", () => dialog.close());
  dialog.querySelector("[data-lightbox-prev]")?.addEventListener("click", () => show(index - 1));
  dialog.querySelector("[data-lightbox-next]")?.addEventListener("click", () => show(index + 1));

  dialog.addEventListener("keydown", (event) => {
    if (!dialog.open) return;
    // Esc is handled natively by <dialog>; this also covers environments where
    // the native close request is not delivered.
    if (event.key === "Escape") {
      event.preventDefault();
      dialog.close();
    } else if (triggers.length > 1 && event.key === "ArrowLeft") {
      event.preventDefault();
      show(index - 1);
    } else if (triggers.length > 1 && event.key === "ArrowRight") {
      event.preventDefault();
      show(index + 1);
    }
  });

  // A click on the dialog element itself (not its content) is a click on the backdrop.
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener("close", () => {
    opener?.focus();
    opener = null;
  });
}
