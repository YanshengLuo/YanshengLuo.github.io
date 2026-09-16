---
title: Portable innate immune response scoring
shortTitle: IMRS
label: University of Florida · Song Lab · 2026–present
homeMeta: 2026–present · University of Florida · Song Lab
summary: In the Song Lab, I proposed and developed a frozen-weight bulk RNA-seq framework that keeps the score definition fixed across datasets rather than retraining it for each study. The work emphasizes cross-dataset heterogeneity, validation, sensitivity analysis, transferability, and explicit limits on what the score can support.
intro: IMRS is a frozen linear transcriptomic scoring framework for an acute delivery-associated innate immune response. Its defining feature is that the gene weights remain fixed when the score is transferred to a new dataset.
tier: primary
order: 2
privacy: SUMMARY_ONLY
seoTitle: Portable Innate Immune Response Scoring | Yansheng Luo
description: A frozen-weight transcriptomic scoring framework for an acute delivery-associated innate immune response, designed to keep one score definition across independent bulk RNA-seq datasets.
---

## Why freeze the score?

Public RNA-seq studies differ in tissue, platform, treatment, baseline expression, and experimental
design. My goal was to preserve one scoring definition across datasets rather than refit a model
separately for each study, so that transferability itself could be evaluated.

## Framework

The score is built from within-study treatment-versus-control contrasts in a set of anchor datasets.
Differential expression from those contrasts is combined by inverse-variance meta-analysis weighting,
heterogeneity filtering removes genes that behave inconsistently between anchors, and power-aware
gene selection determines which genes enter the score. The resulting gene set and weights are then
fixed: validation datasets are scored without any retraining.

## How I tested it

I used Cochran's Q and I² to quantify between-anchor heterogeneity, permutation testing to compare
scores against a null, and leave-one-anchor-out validation to check how much the score depends on any
single contributing dataset. Sensitivity analysis and gene-level contribution auditing show how the
score responds to gene removal and threshold changes, and one-to-one ortholog transfer tests whether
mouse-derived weights carry to human datasets.

Transfer failures remain visible rather than being hidden by retraining, but they can reflect
biological differences, platform effects, ortholog coverage, or study design and therefore require
interpretation rather than automatic biological attribution.

## What the score does — and does not claim

<p class="scope"><strong>Scope.</strong> IMRS is a frozen bulk RNA-seq response framework. It does not identify a causal pathway or contributing cell type, and it is not a clinical safety or reactogenicity model.</p>

## Manuscript

Luo, Y., & Song, Q. *A Frozen Transcriptomic Framework for a Shared Acute Delivery-Associated Innate
Response Axis in Public Bulk RNA-seq Data.* Manuscript prepared for submission. Unpublished effect
sizes and result figures are not shown here.
