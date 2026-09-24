export {};

document
  .querySelectorAll<HTMLElement>("[data-fieldnotes]")
  .forEach((gallery) => {
    const controls = gallery.querySelector<HTMLElement>("[data-note-controls]");
    const panels = [...gallery.querySelectorAll<HTMLElement>("[data-note]")];
    const buttons = [
      ...gallery.querySelectorAll<HTMLButtonElement>("[data-note-select]"),
    ];

    const select = (key: string) => {
      panels.forEach((panel) => {
        panel.hidden = panel.dataset.note !== key;
      });
      buttons.forEach((button) => {
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.noteSelect === key),
        );
      });
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () =>
        select(button.dataset.noteSelect ?? "diving"),
      );
    });

    if (controls) controls.hidden = false;
    select("diving");
  });
