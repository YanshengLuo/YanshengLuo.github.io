const transferStages: Record<string, { label: string; text: string }> = {
  anchor: { label: "Anchor contrasts", text: "Treatment-versus-control contrasts from anchor datasets define the evidence used to build the score." },
  selection: { label: "Heterogeneity-aware selection", text: "Meta-analysis weighting, heterogeneity filtering, and power-aware selection determine which genes enter the score." },
  freeze: { label: "Freeze the definition", text: "The selected gene set and weights are fixed before independent validation." },
  transfer: { label: "Transfer without retraining", text: "New datasets are scored with the same definition so transferability can be evaluated rather than hidden by refitting." },
};
document.querySelectorAll<HTMLElement>("[data-imrs-transfer]").forEach((root) => {
  const buttons = [...root.querySelectorAll<HTMLButtonElement>("[data-transfer-stage]")];
  const title = root.querySelector<HTMLElement>("[data-transfer-title]")!;
  const description = root.querySelector<HTMLElement>("[data-transfer-description]")!;
  let selected = "freeze";
  let preview: string | null = null;
  function render() {
    const display = preview ?? selected;
    root.dataset.active = display;
    title.textContent = transferStages[display].label;
    description.textContent = transferStages[display].text;
    buttons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.transferStage === selected)));
  }
  buttons.forEach((button) => {
    const id = button.dataset.transferStage!;
    button.addEventListener("pointerenter", (event) => { if (event.pointerType === "mouse") { preview = id; render(); } });
    button.addEventListener("pointerleave", () => { preview = null; render(); });
    button.addEventListener("focus", () => { preview = id; render(); });
    button.addEventListener("blur", () => { preview = null; render(); });
    button.addEventListener("click", () => { selected = id; preview = null; render(); });
  });
  root.dataset.enabled = "";
  render();
});

