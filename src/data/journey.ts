export type StageId = "acomys" | "question" | "imrs" | "pdac" | "direction";
export const stages = [
  {
    id: "acomys",
    short: "Acomys",
    eyebrow: "2023–present · Maden Lab",
    title: "Starting from tissue",
    description:
      "My research began with a direct experimental comparison: similar peripheral nerve injuries can produce very different repair outcomes in Acomys and Mus. Histology, primary culture, immunostaining, and quantitative imaging taught me to treat morphology as evidence that still has to be measured and interpreted carefully.",
    href: "/research/regeneration/",
    link: "Regeneration project",
  },
  {
    id: "question",
    short: "Question",
    eyebrow: "Recurring question",
    title: "Which difference is real enough to interpret?",
    description:
      "Across projects, the recurring problem became less about choosing a particular technique and more about deciding which observed differences are reproducible, which depend on analytical choices, and what evidence is needed before making a stronger biological claim.",
  },
  {
    id: "imrs",
    short: "IMRS",
    eyebrow: "Song Lab · IMRS · 2026–present",
    title: "Keep the definition fixed",
    description:
      "My Song Lab work began with single-cell SNV analysis in 2025, then moved into response measurement. Instead of redefining a response separately for each dataset, I developed IMRS in 2026: a scoring framework whose definition remains fixed, so transfer, sensitivity, and failure modes can be tested directly.",
    href: "/research/imrs/",
    link: "IMRS project",
  },
  {
    id: "pdac",
    short: "PDAC",
    eyebrow: "MD Anderson · 2026",
    title: "Follow response through treatment history",
    description:
      "At MD Anderson, barcode lineage tracing let me ask how therapeutic perturbations are associated with clonal selection in pancreatic cancer. I built a reproducible analysis workflow to distinguish recurring patterns from sample-specific events and prioritize hypotheses for follow-up.",
    href: "/research/pdac-clonal-evolution/",
    link: "PDAC project",
  },
  {
    id: "direction",
    short: "Direction",
    eyebrow: "Current direction",
    title: "Translational oncology & precision medicine",
    description:
      "I am now most interested in longitudinal treatment response and resistance — how clonal, molecular, immune, and tissue states change under therapy, and which measurements can become interpretable markers of those changes.",
  },
] as const;
export const chronology = [
  {
    id: "maden",
    name: "Maden Lab / Acomys",
    time: "2023–present",
    start: 2023,
    end: 2027,
    role: "Experimental regeneration and tissue repair using injury models, histology, culture, staining, and imaging.",
    href: "/research/regeneration/",
  },
  {
    id: "igem",
    name: "UF iGEM / protein design",
    time: "2025–present",
    start: 2025,
    end: 2027,
    role: "Computational binder design and candidate prioritization; dry lab member from Mar 2025, subleader for AI-driven computational protein design since Nov 2025.",
    href: "/research/protein-design/",
  },
  {
    id: "song",
    name: "Song Lab",
    time: "2025–present",
    start: 2025,
    end: 2027,
    role: "SNV analysis (May–Jul 2025) followed by development of IMRS (Jan 2026–present), a fixed-definition transcriptomic response-scoring framework.",
    href: "/research/imrs/",
  },
  {
    id: "anderson",
    name: "MD Anderson / PDAC",
    time: "Summer 2026",
    start: 2026,
    end: 2026,
    role: "Barcode lineage tracing and reproducible multi-evidence analysis of clonal evolution under KRAS suppression.",
    href: "/research/pdac-clonal-evolution/",
  },
  {
    id: "direction",
    name: "Current direction",
    time: "Current",
    start: 2026,
    end: 2027,
    role: "Longitudinal treatment response, resistance, and interpretable biological state.",
  },
] as const;
