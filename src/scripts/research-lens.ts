export {};
const lens = document.querySelector<HTMLElement>("[data-research-lens]");
if (lens) {
  const choices = [
    ...lens.querySelectorAll<HTMLButtonElement>("[data-lens-choice]"),
  ];
  const panels = [...lens.querySelectorAll<HTMLElement>("[data-lens-panel]")];
  const compare = lens.querySelector<HTMLButtonElement>("[data-lens-compare]")!;
  let selected = choices[0].dataset.lensChoice;
  let comparing = false;
  function render() {
    const label = choices
      .find((button) => button.dataset.lensChoice === selected)
      ?.textContent?.trim()
      .replace(/^0\d\s*/, "");
    lens!.querySelector<HTMLElement>("[data-lens-status]")!.textContent =
      comparing
        ? "Comparing all four research approaches."
        : `${label} approach shown below.`;
    choices.forEach((button) =>
      button.setAttribute(
        "aria-pressed",
        String(!comparing && button.dataset.lensChoice === selected),
      ),
    );
    panels.forEach((panel) => {
      panel.hidden = !comparing && panel.dataset.lensPanel !== selected;
    });
    compare.setAttribute("aria-pressed", String(comparing));
    compare.innerHTML = comparing
      ? 'Focus on one <span aria-hidden="true">↑</span>'
      : 'Compare all four <span aria-hidden="true">↓</span>';
  }
  choices.forEach((button, index) => {
    button.addEventListener("click", () => {
      selected = button.dataset.lensChoice;
      comparing = false;
      render();
    });
    button.addEventListener("keydown", (event) => {
      const next =
        event.key === "ArrowRight"
          ? (index + 1) % choices.length
          : event.key === "ArrowLeft"
            ? (index + choices.length - 1) % choices.length
            : event.key === "Home"
              ? 0
              : event.key === "End"
                ? choices.length - 1
                : -1;
      if (next < 0) return;
      event.preventDefault();
      choices[next].focus();
      choices[next].click();
    });
  });
  compare.addEventListener("click", () => {
    comparing = !comparing;
    render();
  });
  lens.querySelector<HTMLElement>(".lens-controls")!.hidden = false;
  render();
}
