---
title: Computational protein design and candidate ranking
shortTitle: Protein design
homeTitle: Computational protein design
label: University of Florida · iGEM · 2025–present
homeMeta: 2025–present · University of Florida iGEM
projectMeta: UF iGEM · 2025–present
question: How can several imperfect computational signals be combined to prioritize which designed binders are worth testing at the bench?
role: Configured and expanded the design pipeline, built the filtering, ranking, and rank-stability analyses, and have served as a dry-lab subleader since November 2025, coordinating this work with the wet-lab and human-practices groups.
methods:
  - BindCraft
  - RFdiffusion
  - ProteinMPNN
  - HADDOCK3
  - AMBER molecular dynamics
  - Python
  - HiPerGator / Slurm
scale:
  - "700+ — RMSD datasets grouped by the K-means clustering workflow (2025)"
  - "500+ → 10 → 3 — candidates narrowed, shortlisted, and selected for wet-lab testing (2025)"
status: 2025 campaign public · 2026 design campaign ongoing and unpublished
outputs:
  - type: Public project poster
    title: Generative Design of Osteocalcin Binder Protein for Point-of-Care Based Sensor
    venue: UF iGEM Team · undergraduate team member
    date: "2025"
    state: Publicly archived
    href: https://fsi.ucf.edu/wp-content/uploads/sites/4/2025/11/cid99F7DA80-F7F5-4BC8-ABE6-85ECE4F8AB8B.pdf
  - type: Oral presentation
    title: "Leveraging AI in Synthetic Biology: AI-Derived Enzyme Engineering on Osteocalcin"
    venue: AI at UF Forum, Gainesville, FL · Luo, Y., & Nicolas, B.
    date: Sep 2025
    state: Presented
  - type: Public documentation
    title: 2025 UF iGEM dry lab overview
    venue: Team methods for the 2025 season
    date: "2025"
    state: Public
    href: https://2025.igem.wiki/uflorida/drylaboverview
  - type: Ongoing unpublished study
    title: 2026 computational design campaign
    venue: University of Florida iGEM
    state: Ongoing — pre-competition; detailed results are not shown here
summary: In UF iGEM, I have worked on binder design and candidate ranking using BindCraft, RFdiffusion, ProteinMPNN, HADDOCK3, and AMBER. My focus has been how to combine imperfect computational evidence, test ranking stability, and translate the output into the practical decision of which candidates should be tested experimentally.
intro: I work in the UF iGEM dry lab on designing protein binders and on deciding which designed candidates are worth testing at the bench.
tier: supporting
order: 4
privacy: MIXED
seoTitle: Computational Protein Design and Candidate Ranking | Yansheng Luo
description: Protein binder design and candidate ranking in UF iGEM using BindCraft, RFdiffusion, ProteinMPNN, HADDOCK3, and molecular dynamics, with an emphasis on ranking stability.
---

## The practical problem

Generative protein-design workflows can produce more candidates than a wet lab can test. My work has
focused on how to prioritize those candidates using multiple imperfect computational signals and how
to check whether a ranking is stable to reasonable analytical choices.

## 2025 osteocalcin campaign (public)

The public 2025 team project designed binders against osteocalcin, a marker of bone turnover, for a
point-of-care biosensor concept. I configured and optimized BindCraft runs on HiPerGator, wrote a
Python K-means clustering workflow over more than 700 RMSD datasets to group structurally similar
designs, and built a HADDOCK3 docking workflow that narrowed more than 500 candidates to 10 for
wet-lab validation. The team selected three top-ranked sequences for cloning, expression and
purification, and biolayer interferometry, and reported measurable osteocalcin-binding activity in
the public project poster.

Computational rank sets testing priority. It is not a measurement of binding affinity and not a
guarantee of experimental success; docking scores and molecular-dynamics metrics are model outputs,
and binding is established separately at the bench.

## Ranking and robustness

Ranking combines structural confidence, interface quality, steric clashes, solvent exposure, sequence
properties, and agreement between independent structure predictions. Because those components can be
weighted in several defensible ways, I tested how much the ordering changed under alternative
weighting schemes and repeated computational runs using correlation and rank-stability analysis, and
compared the ranking against stability and interaction metrics from AMBER molecular dynamics.

## Ongoing 2026 work

Since 2025 the pipeline has been extended from BindCraft alone to RFdiffusion backbone generation and
ProteinMPNN sequence design on HiPerGator, applied to osteocalcin- and PD-L1-binding designs. My work
there has been pipeline expansion, candidate ranking, robustness and sensitivity analysis, and
debugging: I traced chain-assignment errors and missing interface metrics in the
generation-to-sequence-design workflow that had been distorting downstream filtering.

An ongoing 2026 design campaign is not yet complete; candidate identities, detailed weighting
configurations, energetic results, and experimental outcomes are therefore not presented here. The
2026 iGEM competition has not taken place.

## Team role

I joined the dry lab as a member in March 2025 and have served as a dry-lab subleader for AI-driven
computational protein design since November 2025, helping lead the protein-design and
candidate-prioritization work while coordinating analyses with the wet-lab and human-practices
groups and mentoring newer dry-lab members.
