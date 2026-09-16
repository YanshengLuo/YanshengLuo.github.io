const funnelStages: Record<string, { label: string; text: string }> = {
  generated: { label: "Design candidates", text: "The public 2025 osteocalcin binder workflow produced more candidates than the team could test experimentally." },
  prioritized: { label: "Prioritized", text: "A HADDOCK3 docking workflow and other computational evidence narrowed more than 500 candidates to 10 for wet-lab validation." },
  selected: { label: "Wet-lab selected", text: "The team selected three top-ranked sequences for cloning, expression and purification, and biolayer interferometry." },
};
document.querySelectorAll<HTMLElement>("[data-protein-funnel]").forEach((root) => {
  const buttons = [...root.querySelectorAll<HTMLButtonElement>("[data-funnel-stage]")];
  const title = root.querySelector<HTMLElement>("[data-funnel-title]")!;
  const description = root.querySelector<HTMLElement>("[data-funnel-description]")!;
  let selected = "generated";
  let preview: string | null = null;
  function render() {
    const display = preview ?? selected;
    root.dataset.active = display;
    title.textContent = funnelStages[display].label;
    description.textContent = funnelStages[display].text;
    buttons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.funnelStage === selected)));
  }
  buttons.forEach((button) => {
    const id = button.dataset.funnelStage!;
    button.addEventListener("pointerenter", (event) => { if (event.pointerType === "mouse") { preview = id; render(); } });
    button.addEventListener("pointerleave", () => { preview = null; render(); });
    button.addEventListener("focus", () => { preview = id; render(); });
    button.addEventListener("blur", () => { preview = null; render(); });
    button.addEventListener("click", () => { selected = id; preview = null; render(); });
  });
  root.dataset.enabled = "";
  render();
});

