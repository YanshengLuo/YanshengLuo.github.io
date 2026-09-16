// PDAC evidence model: an analysis-logic diagram, not a results figure.
// Hover or focus previews one form of evidence; click locks it (aria-pressed);
// clicking the locked node again or the central candidate restores the default.
const evidenceDescriptions: Record<string, string> = {
  center: "No single statistic was sufficient. The analysis combined several independent forms of evidence before a pattern was prioritized.",
  recurrence: "Tests whether the candidate pattern appears repeatedly rather than as a one-off observation.",
  abundance: "Distinguishes repeatedly observed patterns from isolated low-count events.",
  effect: "Captures the magnitude of treatment-associated change rather than relying on presence alone.",
  specificity: "Tests whether a pattern is associated with one treatment route rather than appearing broadly.",
  trajectory: "Uses treatment history and sequence to interpret how a lineage behaves across conditions.",
  robustness: "Checks whether prioritization survives reasonable analytical choices and sensitivity tests.",
  proteomic: "Connects lineage-level analysis with treatment-sensitive and resistant human PDAC proteomic states.",
};
// Contextual mini-tags: restate what each criterion asks, never a result.
const evidenceTags: Record<string, string[]> = {
  recurrence: ["repeatability", "not one-off"],
  abundance: ["observation strength", "count context"],
  effect: ["magnitude", "not presence alone"],
  specificity: ["route association", "context"],
  trajectory: ["history", "sequence"],
  robustness: ["sensitivity", "assumption stability"],
  proteomic: ["cross-modal context", "sensitive ↔ resistant"],
};
document.querySelectorAll<HTMLElement>("[data-evidence-model]").forEach((root) => {
  const buttons = [...root.querySelectorAll<HTMLButtonElement>("[data-evidence-node]")];
  const description = root.querySelector<HTMLElement>("[data-evidence-description]")!;
  const tags = root.querySelector<HTMLElement>("[data-evidence-tags]");
  const reset = root.querySelector<HTMLButtonElement>("[data-evidence-reset]");
  let selected = "center";
  let preview: string | null = null;
  let shown = "";
  function render() {
    const display = preview ?? selected;
    root.dataset.active = display;
    root.dataset.focus = String(display !== "center");
    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.evidenceNode === selected));
      if (button.dataset.evidenceNode === display) button.dataset.active = "";
      else delete button.dataset.active;
    });
    if (display === shown) return;
    shown = display;
    description.textContent = evidenceDescriptions[display];
    if (tags) {
      tags.replaceChildren(
        ...(evidenceTags[display] ?? []).map((text, i) => {
          const tag = document.createElement("span");
          tag.textContent = text;
          tag.style.animationDelay = `${i * 35}ms`;
          return tag;
        }),
      );
    }
  }
  buttons.forEach((button) => {
    const id = button.dataset.evidenceNode!;
    button.addEventListener("pointerenter", (event) => { if (event.pointerType === "mouse") { preview = id; render(); } });
    button.addEventListener("pointerleave", () => { preview = null; render(); });
    button.addEventListener("focus", () => { preview = id; render(); });
    button.addEventListener("blur", () => { preview = null; render(); });
    button.addEventListener("click", () => { selected = selected === id ? "center" : id; preview = null; render(); });
  });
  reset?.addEventListener("click", () => { selected = "center"; preview = null; render(); });
  root.dataset.enabled = "";
  render();
});
