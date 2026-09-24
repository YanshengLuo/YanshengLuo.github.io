export {};
const form = document.querySelector<HTMLFormElement>("[data-work-tools]");
if (form) {
  const query = form.querySelector<HTMLInputElement>("[data-work-query]")!;
  const project = form.querySelector<HTMLSelectElement>("[data-work-project]")!;
  const count = form.querySelector<HTMLElement>("[data-work-count]")!;
  const entries = [
    ...document.querySelectorAll<HTMLElement>("[data-work-entry]"),
  ];
  const index = entries.map((element) => ({
    element,
    text: (element.textContent ?? "").normalize("NFKD").toLowerCase(),
  }));
  const sections = [...document.querySelectorAll<HTMLElement>(".work-section")];
  const empty = document.querySelector<HTMLElement>("[data-work-empty]")!;
  function filter() {
    const terms = query.value
      .normalize("NFKD")
      .trim()
      .toLowerCase()
      .split(/\s+/)
      .filter(Boolean);
    let visible = 0;
    index.forEach(({ element, text }) => {
      element.hidden =
        !terms.every((term) => text.includes(term)) ||
        (!!project.value && element.dataset.project !== project.value);
      if (!element.hidden) visible++;
    });
    sections.forEach((section) => {
      const found = section.querySelectorAll(
        "[data-work-entry]:not([hidden])",
      ).length;
      section.hidden = found === 0;
      section.querySelector<HTMLElement>("[data-section-count]")!.textContent =
        `${found} ${found === 1 ? "entry" : "entries"}`;
      const link = document.querySelector<HTMLAnchorElement>(
        `.work-nav a[href="#${section.id}"]`,
      );
      if (link) link.hidden = found === 0;
    });
    count.textContent = `Showing ${visible} of ${entries.length} entries`;
    empty.hidden = visible !== 0;
    window.dispatchEvent(new Event("scroll"));
  }
  form.addEventListener("submit", (event) => event.preventDefault());
  query.addEventListener("input", filter);
  project.addEventListener("change", filter);
  form.addEventListener("reset", () => {
    query.value = "";
    project.value = "";
    filter();
    query.focus();
  });
  form.hidden = false;
  filter();
}
