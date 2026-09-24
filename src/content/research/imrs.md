---
title: Portable innate immune response scoring
shortTitle: IMRS
label: University of Florida · Song Lab · 2026–present
homeMeta: 2026–present · University of Florida · Song Lab
projectMeta: Song Lab · 2026–present
question: Can one fixed transcriptomic response definition be carried to independent delivery datasets instead of being refit for each study?
role: Proposed and developed the framework, the frozen-weight meta-analytic construction, and the validation, sensitivity, and cross-species transfer tests.
methods:
  - Bulk RNA-seq
  - Meta-analysis
  - Independent validation
  - R / Python
  - Permutation testing
  - Ortholog mapping
status: Manuscript prepared for submission · work ongoing
outputs:
  - type: Manuscript
    title: A Frozen Transcriptomic Framework for a Shared Acute Delivery-Associated Innate Response Axis in Public Bulk RNA-seq Data
    venue: Luo, Y., & Song, Q.
    state: Prepared for submission — effect sizes and result figures are not shown here
  - type: Ongoing unpublished study
    title: Frozen-weight response scoring across independent viral-vector and nanoparticle datasets
    venue: University of Florida, Song Lab
    state: Ongoing
summary: In the Song Lab, I proposed and developed a frozen-weight bulk RNA-seq framework that keeps the score definition fixed across datasets rather than retraining it for each study. The work emphasizes cross-dataset heterogeneity, validation, sensitivity analysis, transferability, and explicit limits on what the score can support.
intro: IMRS is a frozen linear transcriptomic scoring framework for an acute delivery-associated innate immune response. Its defining feature is that the gene weights remain fixed when the score is transferred to a new dataset.
tier: primary
order: 2
privacy: SUMMARY_ONLY
seoTitle: Portable Innate Immune Response Scoring | Yansheng Luo
description: A frozen-weight transcriptomic scoring framework for an acute delivery-associated innate immune response, designed to keep one score definition across independent bulk RNA-seq datasets.
---

## Why dataset-specific signatures are hard to transfer

Public RNA-seq studies differ in tissue, platform, treatment, baseline expression, and experimental
design. My goal was to preserve one scoring definition across datasets rather than refit a model
separately for each study, so that transferability itself could be evaluated.

## A fixed definition instead

IMRS takes the opposite approach. The gene set and weights are determined once, then frozen. Applying
the same numbers to a new dataset makes transferability itself an observable property of the score
rather than an assumption behind it.

<p class="scope"><strong>A fixed definition.</strong> IMRS fixes its gene set and weights after construction and applies that unchanged definition to independent data.</p>

## Meta-analytic construction

The score is built from within-study treatment-versus-control contrasts in a set of anchor datasets.
Differential expression from those contrasts is combined by inverse-variance meta-analysis weighting,
heterogeneity filtering removes genes that behave inconsistently between anchors, and power-aware
gene selection determines which genes enter the score. The resulting gene set and weights are then
fixed.

## Independent evaluation

Validation datasets — independent viral-vector and nanoparticle studies — are scored with that fixed
definition and compared against baseline immune-response signatures. Cochran's Q and I² quantify
between-anchor heterogeneity, and permutation testing compares observed scores against a null.

## Robustness tests

Leave-one-anchor-out validation checks how much the score depends on any single contributing dataset.
Sensitivity analysis and gene-level contribution auditing show how the score responds to gene removal
and threshold changes, which identifies dependence on individual features.

## Cross-species evaluation

One-to-one ortholog mapping tests whether mouse-derived weights carry to human datasets. This is a
translational evaluation of the framework, not a claim about human immune responses.

## Failure modes and limitations

Because the definition does not move, transfer failures stay visible. They also stay ambiguous: a low
or inconsistent score can reflect biological difference, platform effects, ortholog coverage, or study
design, and therefore requires interpretation rather than automatic biological attribution.

## What the score does — and does not claim

<p class="scope"><strong>Scope.</strong> IMRS is a methodological framework evaluated across independent bulk RNA-seq datasets. That is methodological validation, not clinical validation. It does not identify a causal pathway or contributing cell type, it is not a diagnostic or a validated clinical biomarker, and it does not predict patient outcomes.</p>
