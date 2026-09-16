type StageId = "acomys" | "question" | "imrs" | "pdac" | "direction";
type DisplayId = StageId | "protein";
const stageIds: StageId[] = ["acomys", "question", "imrs", "pdac", "direction"];
const root = document.querySelector<HTMLElement>("[data-throughline]");

if (root) {
  const journey = root.querySelector<HTMLElement>("[data-throughline-view]")!;
  const chronology = root.querySelector<HTMLElement>("[data-chronology-view]")!;
  const articles = stageIds.map((id) => root.querySelector<HTMLElement>('[data-stage="' + id + '"]')!);
  const mapButtons = [...root.querySelectorAll<HTMLButtonElement>(".throughline__map [data-select-stage]")];
  const mobileButtons = [...root.querySelectorAll<HTMLButtonElement>(".throughline__mobile-button")];
  const media = [...root.querySelectorAll<HTMLElement>("[data-stage-media]")];
  const viewButtons = [...root.querySelectorAll<HTMLButtonElement>("[data-view-button]")];
  const prev = root.querySelector<HTMLButtonElement>("[data-stage-prev]")!;
  const next = root.querySelector<HTMLButtonElement>("[data-stage-next]")!;
  const status = root.querySelector<HTMLElement>("[data-stage-status]")!;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const desktop = window.matchMedia("(min-width: 1200px)");
  let activeStage: StageId = "acomys";
  let previewStage: DisplayId | null = null;
  let branchSelected = false;
  let inputMode: "scroll" | "pointer" | "keyboard" | "click" = "scroll";
  let view: "throughline" | "chronology" = "throughline";
  let selectionLockUntil = 0;

  function render() {
    const display = previewStage ?? (branchSelected ? "protein" : activeStage);
    root!.dataset.activeStage = activeStage;
    root!.dataset.displayStage = display;
    root!.dataset.view = view;
    root!.dataset.inputMode = inputMode;
    articles.forEach((article, index) => {
      if (stageIds[index] === activeStage) article.dataset.active = "";
      else delete article.dataset.active;
    });
    root!.querySelectorAll<HTMLElement>("[data-node]").forEach((node, index) => {
      const button = node.querySelector<HTMLButtonElement>("button")!;
      if (stageIds[index] === activeStage) button.setAttribute("aria-current", "step");
      else button.removeAttribute("aria-current");
      if (index < stageIds.indexOf(activeStage)) node.dataset.complete = "";
      else delete node.dataset.complete;
    });
    mobileButtons.forEach((button) => button.setAttribute("aria-expanded", String(button.dataset.selectStage === activeStage)));
    media.forEach((panel) => { panel.hidden = panel.dataset.stageMedia !== display; });
    root!.querySelector<HTMLButtonElement>('[data-select-stage="protein"]')!.setAttribute("aria-pressed", String(branchSelected));
    status.textContent = String(stageIds.indexOf(activeStage) + 1) + " of " + String(stageIds.length);
    prev.disabled = activeStage === stageIds[0];
    next.disabled = activeStage === stageIds[stageIds.length - 1];
    viewButtons.forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.viewButton === view)));
    journey.hidden = view !== "throughline";
    chronology.hidden = view !== "chronology";
  }

  function selectStage(id: StageId, mode: typeof inputMode, scroll = false) {
    activeStage = id;
    branchSelected = false;
    previewStage = null;
    inputMode = mode;
    render();
    if (scroll && desktop.matches) {
      selectionLockUntil = performance.now() + 1000;
      root!.querySelector<HTMLElement>('[data-stage="' + id + '"]')!.scrollIntoView({
        block: "center",
        behavior: reducedMotion.matches ? "instant" : "smooth",
      });
    }
  }

  function preview(id: DisplayId, mode: typeof inputMode) {
    if (view !== "throughline") return;
    previewStage = id;
    inputMode = mode;
    render();
  }
  function clearPreview() { previewStage = null; render(); }

  mapButtons.forEach((button) => {
    const id = button.dataset.selectStage as DisplayId;
    button.addEventListener("pointerenter", () => preview(id, "pointer"));
    button.addEventListener("pointerleave", clearPreview);
    button.addEventListener("focus", () => preview(id, "keyboard"));
    button.addEventListener("blur", clearPreview);
    button.addEventListener("click", () => {
      if (id === "protein") { branchSelected = true; previewStage = null; inputMode = "click"; render(); }
      else selectStage(id, "click", true);
    });
  });
  mobileButtons.forEach((button) => button.addEventListener("click", () => selectStage(button.dataset.selectStage as StageId, "click")));
  prev.addEventListener("click", () => selectStage(stageIds[Math.max(0, stageIds.indexOf(activeStage) - 1)], "click"));
  next.addEventListener("click", () => selectStage(stageIds[Math.min(stageIds.length - 1, stageIds.indexOf(activeStage) + 1)], "click"));
  viewButtons.forEach((button) => button.addEventListener("click", () => {
    view = button.dataset.viewButton as typeof view;
    branchSelected = false;
    previewStage = null;
    render();
  }));

  const observer = new IntersectionObserver((entries) => {
    if (!desktop.matches || view !== "throughline" || previewStage !== null || performance.now() < selectionLockUntil) return;
    const visible = entries.filter((entry) => entry.isIntersecting);
    if (!visible.length) return;
    const middle = window.innerHeight * .5;
    const nearest = visible.sort((a, b) => Math.abs(a.boundingClientRect.top + a.boundingClientRect.height / 2 - middle) - Math.abs(b.boundingClientRect.top + b.boundingClientRect.height / 2 - middle))[0];
    const id = (nearest.target as HTMLElement).dataset.stage as StageId;
    if (id !== activeStage) selectStage(id, "scroll");
  }, { rootMargin: "-32% 0px -32% 0px", threshold: 0 });
  articles.forEach((article) => observer.observe(article));
  desktop.addEventListener("change", () => { previewStage = null; render(); });
  root.dataset.enabled = "";
  chronology.hidden = true;
  render();
}

