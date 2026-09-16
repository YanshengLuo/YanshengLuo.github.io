// Identity, homepage copy, and About content.
// Every fact traces to the CV or
// an approved project document.

export const site = {
  name: "Yansheng Luo",
  url: "https://yanshengluo.github.io/",
  title: "Yansheng Luo | Undergraduate Researcher, University of Florida",
  description:
    "Research portfolio of Yansheng Luo, a University of Florida undergraduate researcher working across translational oncology, clonal evolution, transcriptomics, regeneration biology, and computational protein design.",
  cvPath: "/documents/Yansheng_Luo_CV.pdf",
  cvUpdated: "September 2026",
  year: 2026,
} as const;

export const hero = {
  eyebrow: "Undergraduate researcher · University of Florida",
  question: "Why do similar biological systems respond differently to the same perturbation?",
  supporting:
    "I study how those divergent states can be measured well enough to support biological and therapeutic decisions. My current work focuses on cancer treatment response, clonal evolution, and interpretable transcriptomic response scoring, grounded in experimental biology.",
  identity: "Biology & Chemistry · Bioinformatics & Statistics · Expected May 2027",
};

export const currentResearchIntro =
  "The two projects below operate at different biological scales, but use the same standard: combine independent evidence and test whether conclusions survive reasonable analytical choices.";

/** Homepage About preview. */
export const homeAboutPreview = {
  intro:
    "Outside the project pages, I also teach and mentor, work on science outreach, and spend time diving. These experiences keep me interested in how complex biological ideas are observed, communicated, and tested.",
  communication: "Research outreach and bilingual marine-science writing.",
};

export const aboutNarrative = [
  "I began research in the Maden Lab with an experimental question: why can similar injuries produce very different repair outcomes in *Acomys* and *Mus*? Working through tissue experiments, primary culture, staining, and quantitative imaging made me increasingly interested in a broader problem — how to decide which observed differences are biologically meaningful and which depend on how they were measured.",
  "That question led me toward quantitative genomics and model development. In the Song Lab, I developed IMRS around the idea that a response score should keep a fixed definition across datasets and be challenged by sensitivity and transfer tests rather than repeatedly refit. At MD Anderson, the same concern appeared in a translational cancer setting: treatment history creates selective pressure, and clonal patterns are only useful if they remain reproducible across analytical choices.",
  "My current direction is translational oncology and precision medicine, with particular interest in longitudinal treatment response, clonal evolution, resistance, and interpretable biomarkers. I want computation to remain tied to a biological question and to the experiment or clinical context that can test the conclusion.",
];

export const education = {
  institution: "University of Florida",
  degrees: ["B.S. Pre-professional Biology", "B.S. Chemistry, Biochemistry Emphasis"],
  minors: "Minor: Statistics",
  expected: "Expected May 2027",
  gpa: "GPA 3.99 / 4.00",
};

export const teaching =
  "I have taught as an undergraduate teaching assistant for Intro Bioinformatics and for Microbiology Lab at the University of Florida, and earlier for Comparative World Agriculture. I mentor newer members of the UF iGEM dry lab, and I have tutored high school and undergraduate students in biology, chemistry, and quantitative subjects since 2020.";

export const beyondResearch =
  "Outside the lab, I am a NAUI-certified Master Scuba Diver. I previously built and maintained a small bilingual marine-science and diving blog, FantasticSea, which reflects a longstanding interest in underwater biology and science communication.";
