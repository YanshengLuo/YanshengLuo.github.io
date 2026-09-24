// Publications, presentations, recognition, and teaching.
// Wording follows the CV. No DOIs, issue numbers, or URLs are
// added until they exist. Species names marked *like this* render in italics.

export interface WorkEntry {
  /** Year or date shown in the left column. */
  when?: string;
  title: string;
  authors?: string;
  /** Venue, status, or context line. */
  venue?: string;
  /** Only where title and venue do not already communicate enough. */
  detail?: string;
  /** Short status badge (Accepted, Prepared for submission, Poster, Lightning talk, Public project). */
  status?: string;
  /** Real public URL, where one exists. */
  href?: string;
  /** Internal route to the related project page. */
  project?: string;
}

export interface WorkSection {
  id: string;
  heading: string;
  entries: WorkEntry[];
}

/** Homepage "Selected outputs" — four items, most recent first. */
export const selectedOutputs: WorkEntry[] = [
  {
    when: "2026",
    title:
      "Different Routes to Resistance: Multifaceted KRAS Inhibition Directs Distinct Clonal Evolution in Pancreatic Ductal Adenocarcinoma",
    status: "Poster / lightning talk",
    venue: "MD Anderson Cancer Center",
    project: "/research/pdac-clonal-evolution/",
  },
  {
    when: "2026",
    title:
      "Adult *Acomys* DRG Explants Exhibit a Radially Organized Neurite Architecture Distinct from *Mus* Explants",
    status: "Accepted manuscript",
    venue: "University of Florida Journal of Undergraduate Research",
    project: "/research/regeneration/",
  },
  {
    title:
      "A Frozen Transcriptomic Framework for a Shared Acute Delivery-Associated Innate Response Axis in Public Bulk RNA-seq Data",
    status: "Manuscript prepared for submission",
    venue: "Song Lab, University of Florida",
    project: "/research/imrs/",
  },
  {
    when: "2025",
    title:
      "*Acomys* vs. *Mus*: Comparative Regeneration Revealed Through 3D DRG Cultures and Sciatic Nerve Injury Models",
    status: "Poster",
    venue: "UF Department of Biology Undergraduate Honors & Research Symposium",
    project: "/research/regeneration/",
  },
];

export const workSections: WorkSection[] = [
  {
    id: "publications",
    heading: "Publications & manuscripts",
    entries: [
      {
        when: "2026",
        status: "Accepted",
        authors: "Luo, Y., & Maden, M.",
        title:
          "Adult *Acomys* DRG Explants Exhibit a Radially Organized Neurite Architecture Distinct from *Mus* Explants.",
        venue: "*University of Florida Journal of Undergraduate Research.*",
        project: "/research/regeneration/",
      },
      {
        status: "Prepared for submission",
        authors: "Luo, Y., & Song, Q.",
        title:
          "A Frozen Transcriptomic Framework for a Shared Acute Delivery-Associated Innate Response Axis in Public Bulk RNA-seq Data.",
        venue: "Song Lab, University of Florida.",
        project: "/research/imrs/",
      },
    ],
  },
  {
    id: "presentations",
    heading: "Presentations",
    entries: [
      {
        when: "Aug 2026",
        authors: "Luo, Y., Zeng, Y., Attanasio, S., et al.",
        title:
          "Different Routes to Resistance: Multifaceted KRAS Inhibition Directs Distinct Clonal Evolution in Pancreatic Ductal Adenocarcinoma.",
        status: "Poster · Lightning talk",
        venue: "MD Anderson Cancer Center, Houston, TX.",
        project: "/research/pdac-clonal-evolution/",
      },
      {
        when: "Nov 2025",
        authors: "Luo, Y., & Maden, M.",
        title:
          "*Acomys* vs. *Mus*: Comparative Regeneration Revealed Through 3D DRG Cultures and Sciatic Nerve Injury Models.",
        status: "Poster",
        venue:
          "UF Department of Biology Undergraduate Honors & Research Symposium, Gainesville, FL.",
        project: "/research/regeneration/",
      },
      {
        when: "Sep 2025",
        authors: "Luo, Y., & Nicolas, B.",
        title:
          "Leveraging AI in Synthetic Biology: AI-Derived Enzyme Engineering on Osteocalcin.",
        status: "Oral presentation",
        venue: "AI at UF Forum, Gainesville, FL.",
        project: "/research/protein-design/",
      },
      {
        when: "Apr 2025",
        authors: "Luo, Y., & Maden, M.",
        title:
          "Regenerative Potential of the African Spiny Mouse (*Acomys cahirinus*): Insights into Peripheral Nerve Tissue Repair and Fibrosis Resistance.",
        status: "Poster",
        venue:
          "APSA x CURBS Research Symposium and UF Spring Research Symposium, Gainesville, FL.",
        project: "/research/regeneration/",
      },
    ],
  },
  {
    id: "public-outputs",
    heading: "Selected public research outputs",
    entries: [
      {
        when: "2025",
        status: "Public project",
        authors: "UF iGEM Team.",
        title:
          "Generative Design of Osteocalcin Binder Protein for Point-of-Care Based Sensor.",
        venue: "Publicly archived research poster · undergraduate team member.",
        href: "https://fsi.ucf.edu/wp-content/uploads/sites/4/2025/11/cid99F7DA80-F7F5-4BC8-ABE6-85ECE4F8AB8B.pdf",
        project: "/research/protein-design/",
      },
      {
        when: "2025",
        status: "Public project",
        title: "UF iGEM dry lab overview.",
        venue: "Team computational methods for the 2025 season.",
        href: "https://2025.igem.wiki/uflorida/drylaboverview",
        project: "/research/protein-design/",
      },
      {
        status: "Code",
        title: "GitHub — @YanshengLuo.",
        venue: "Public repositories.",
        href: "https://github.com/YanshengLuo",
      },
    ],
  },
  {
    id: "recognition",
    heading: "Recognition",
    entries: [
      {
        when: "2026",
        title: "Outstanding Undergraduate International Student Award",
        venue: "UF College of Liberal Arts and Sciences",
        detail: "One undergraduate recipient per college.",
      },
      {
        when: "2024–2026",
        title: "University Scholar Program",
        venue: "University of Florida · awarded in two consecutive cycles",
      },
      {
        when: "2025",
        title: "The Honor Society of Phi Kappa Phi",
        venue: "Elected member",
      },
      {
        when: "2025",
        title: "iGEM Grand Jamboree — Silver Medal",
        venue: "University of Florida iGEM Team",
      },
      {
        when: "2024",
        title:
          "International Student Achievement Awards, Certificate of Outstanding Merit",
        venue: "University of Florida",
      },
    ],
  },
  {
    id: "teaching",
    heading: "Teaching & mentorship",
    entries: [
      {
        when: "Fall 2025",
        title: "Teaching assistant — Intro Bioinformatics (BSC4434C)",
        venue: "University of Florida",
      },
      {
        when: "Spring 2025",
        title: "Teaching assistant — Microbiology Lab (MCB3020L)",
        venue: "University of Florida",
      },
      {
        when: "Spring 2024",
        title: "Teaching assistant — Comparative World Agriculture (AEB4905)",
        venue: "University of Florida",
      },
      {
        when: "Nov 2025–present",
        title: "Dry-lab mentoring",
        venue:
          "University of Florida iGEM Team · dry lab subleader, AI-driven computational protein design",
      },
      {
        when: "2020–present",
        title: "STEM tutor & mentor",
        venue: "200+ hours with 30+ high school and undergraduate students",
      },
    ],
  },
];
