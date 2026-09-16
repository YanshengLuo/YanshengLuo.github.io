---
title: Computational protein design and candidate ranking
shortTitle: Protein design
homeTitle: Computational protein design
label: University of Florida · iGEM · 2025–present
homeMeta: 2025–present · University of Florida iGEM
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

## 2025 osteocalcin case

The public 2025 team project designed binders against osteocalcin, a marker of bone turnover, for a
point-of-care biosensor concept. I configured and optimized BindCraft runs on HiPerGator, wrote a
Python K-means clustering workflow over more than 700 RMSD datasets to group structurally similar
designs, and built a HADDOCK3 docking workflow that narrowed more than 500 candidates to 10 for
wet-lab validation. The team selected three top-ranked sequences for cloning, expression and
purification, and biolayer interferometry, and reported measurable osteocalcin-binding activity in
the public project poster.

## Ranking and robustness

Ranking combines structural confidence, interface quality, steric clashes, solvent exposure, sequence
properties, and agreement between independent structure predictions. Because those components can be
weighted in several defensible ways, I tested how much the ordering changed under alternative
weighting schemes and repeated computational runs using correlation and rank-stability analysis, and
compared the ranking against stability and interaction metrics from AMBER molecular dynamics. I also
traced chain-assignment errors and missing interface metrics in the generation-to-sequence-design
workflow that had been distorting downstream filtering.

## Team role

I joined the dry lab in 2025 and now lead its computational work, coordinating analyses with the
wet-lab and human-practices groups and mentoring newer dry-lab members. An ongoing 2026 design
campaign is unpublished; its targets, candidates, weighting configurations, and energetic results are
not described here.

## Public outputs

- Luo, Y., & Nicolas, B. *Leveraging AI in Synthetic Biology: AI-Derived Enzyme Engineering on
  Osteocalcin.* Oral presentation, AI at UF Forum, September 2025.
- UF iGEM Team. *Generative Design of Osteocalcin Binder Protein for Point-of-Care Based Sensor.*
  Publicly archived 2025 research poster; undergraduate team member.
- Team methods for the 2025 season are documented on the
  [2025 UF iGEM dry lab page](https://2025.igem.wiki/uflorida/drylaboverview).
