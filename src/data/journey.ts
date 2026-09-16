export type StageId = "acomys" | "question" | "imrs" | "pdac" | "direction";
export const stages = [
  {
    id: "acomys",
    short: "Acomys",
    eyebrow: "2023–present · Maden Lab",
    title: "Starting from tissue",
    description: "My research began with a direct experimental comparison: similar peripheral nerve injuries can produce very different repair outcomes in Acomys and Mus. Histology, primary culture, immunostaining, and quantitative imaging taught me to treat morphology as evidence that still has to be measured and interpreted carefully.",
    href: "/research/regeneration/",
    link: "Regeneration project",
  },
  {
    id: "question",
    short: "Question",
    eyebrow: "Recurring question",
    title: "Which difference is real enough to interpret?",
    description: "Across projects, the recurring problem became less about choosing a particular technique and more about deciding which observed differences are reproducible, which depend on analytical choices, and what evidence is needed before making a stronger biological claim.",
  },
  {
    id: "imrs",
    short: "IMRS",
    eyebrow: "Song Lab · IMRS",
    title: "Keep the definition fixed",
    description: "IMRS moved that question into transcriptomics. Instead of redefining a response separately for each dataset, I developed a frozen scoring framework whose definition remains fixed so transfer, sensitivity, and failure modes can be tested directly.",
    href: "/research/imrs/",
    link: "IMRS project",
  },
  {
    id: "pdac",
    short: "PDAC",
    eyebrow: "MD Anderson · 2026",
    title: "Follow response through treatment history",
    description: "In PDAC lineage tracing, the same concern became evolutionary: treatment history can reshape clonal composition, but a candidate pattern is useful only if it survives reasonable analytical perturbations and remains interpretable in the biological model that generated it.",
    href: "/research/pdac-clonal-evolution/",
    link: "PDAC project",
  },
  {
    id: "direction",
    short: "Direction",
    eyebrow: "Current direction",
    title: "Translational oncology & precision medicine",
    description: "I am now most interested in longitudinal treatment response and resistance — how clonal, molecular, immune, and tissue states change under therapy, and which measurements can become interpretable markers of those changes.",
  },
] as const;
export const chronology = [
  { id: "maden", name: "Maden Lab / Acomys", time: "2023–present", start: 2023, end: 2027, role: "Experimental regeneration and tissue repair using injury models, histology, culture, staining, and imaging.", href: "/research/regeneration/" },
  { id: "igem", name: "UF iGEM / protein design", time: "2025–present", start: 2025, end: 2027, role: "Computational binder design and candidate prioritization with public 2025 team work.", href: "/research/protein-design/" },
  { id: "song", name: "Song Lab / IMRS", time: "2025–present · IMRS developed in 2026", start: 2025, end: 2027, role: "Computational genomics and fixed-definition transcriptomic response scoring.", href: "/research/imrs/" },
  { id: "anderson", name: "MD Anderson / PDAC", time: "Summer 2026", start: 2026, end: 2026, role: "Barcode lineage tracing and multi-evidence prioritization under KRAS-suppression strategies.", href: "/research/pdac-clonal-evolution/" },
  { id: "direction", name: "Current direction", time: "Current", start: 2026, end: 2027, role: "Longitudinal treatment response, resistance, and interpretable biological state." },
] as const;

