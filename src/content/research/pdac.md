---
title: Barcode lineage tracing of pancreatic cancer evolution
shortTitle: PDAC clonal evolution
label: MD Anderson Cancer Center · Yao Lab · Summer 2026
homeMeta: 2026 · MD Anderson Cancer Center
snapshotMeta: MD Anderson · Summer 2026
projectMeta: MD Anderson · Summer 2026
question: How can lineage tracing be used to study clonal selection and resistance-associated evolution under KRAS-directed therapeutic perturbation in pancreatic ductal adenocarcinoma?
role: Developed and iteratively refined a reproducible computational workflow for lineage-tracing analysis, implemented the analyses in R, and contributed to supporting characterization of the experimental model.
methods:
  - Barcode lineage tracing
  - Reproducible R analysis
  - Clonal composition analysis
  - Differential abundance
  - Dimensionality reduction and clustering
  - Longitudinal pattern analysis
  - Reproducibility and robustness assessment
  - Complementary proteomic quality control
status: Presented as a poster and lightning talk at MD Anderson Cancer Center in August 2026 · study unpublished
outputs:
  - type: Poster and lightning talk
    title: Clonal evolution under KRAS-directed therapeutic perturbation in pancreatic ductal adenocarcinoma
    venue: MD Anderson Cancer Center, Houston, TX
    date: August 2026
    state: Presented · Luo, Y., Zeng, Y., Attanasio, S., et al.
  - type: Ongoing unpublished work
    title: Clonal evolution under therapeutic perturbation
    venue: MD Anderson Cancer Center
    state: Ongoing unpublished work. Project-specific findings are intentionally not displayed publicly.
summary: During Summer 2026 at MD Anderson Cancer Center in Dr. Wantong Yao's laboratory, I developed a reproducible R workflow for barcode lineage-tracing analysis in pancreatic ductal adenocarcinoma. My work included clonal composition, differential abundance, longitudinal pattern analysis, biological-replicate reproducibility, robustness assessment, complementary proteomic analysis, and support for experimental-model characterization.
intro: During my 2026 summer research at MD Anderson Cancer Center in Dr. Wantong Yao’s laboratory, I used barcode lineage tracing and computational analysis to study clonal evolution under therapeutic perturbation in pancreatic ductal adenocarcinoma.
publicNote:
  title: Public-facing project note
  text: This page is a deliberately desensitized overview of an ongoing, unpublished research project. To protect non-public study information, underlying datasets, clone-level findings, treatment-group results, candidate identities, quantitative outcomes, and internal experimental details are not disclosed. The purpose of this page is to summarize the scientific question, the analytical work I performed, and the scope of the project at a high level.
tier: primary
order: 1
privacy: SUMMARY_ONLY
seoTitle: Barcode Lineage Tracing in Pancreatic Cancer | Yansheng Luo
description: A public-facing overview of barcode lineage-tracing research and reproducible computational analysis of clonal evolution under KRAS-directed therapeutic perturbation in pancreatic ductal adenocarcinoma.
---

## The question

Therapy changes the selective environment experienced by a heterogeneous tumor population. This project used lineage-tracing data to investigate how clonal populations change under KRAS-directed therapeutic perturbation and how those changes can be analyzed reproducibly.

The public description is intentionally limited to the general scientific problem and analytical approach. Specific treatment comparisons and study outcomes are not presented.

## Analytical challenge

Barcode lineage tracing produces a high-dimensional record of lineage persistence and change across experimental conditions. The analytical challenge was to distinguish reproducible patterns from sample-specific observations, sampling variability, and sensitivity to analytical choices.

This required evaluating patterns across biological replicates and building an analysis framework that preserved uncertainty rather than treating every observed change as equally informative.

## My contribution

I developed and iteratively refined a reproducible computational workflow for barcode lineage-tracing analysis in R.

My work included analysis of clonal composition, differential abundance, dimensionality reduction, clustering, longitudinal patterns, and reproducibility across biological replicates.

I also developed a multi-criterion approach for prioritizing lineage-level observations for further investigation while avoiding over-interpretation of isolated or weakly supported patterns.

In parallel, I performed quality control and reproducible analysis of complementary proteomic data to provide broader molecular context for the study.

I also contributed to supporting characterization and validation of the experimental model.

## How candidates were prioritized

I developed an analytical framework that evaluated multiple independent forms of evidence before a lineage-level observation was prioritized for biological follow-up.

The framework considered consistency across biological replicates, strength and reproducibility of the observed pattern, longitudinal behavior, and robustness to reasonable analytical choices. Importantly, observations with insufficient or conflicting evidence were retained as uncertain rather than being forced into a predefined category.

This framework was designed for hypothesis prioritization. It does not imply that computationally prioritized lineages represent established molecular mechanisms of resistance.

<div id="what-the-analyses-supported" class="legacy-anchor" aria-hidden="true"></div>

## Interpretation scope

Because this work remains unpublished, study-specific findings, treatment comparisons, candidate rankings, quantitative outcomes, and clone-level results are not presented on this website.

The computational analyses were used to identify and prioritize lineage-level patterns that could motivate subsequent biological investigation. Barcode lineage tracing can reveal how lineages persist, expand, or decline under experimental perturbation, but lineage behavior alone does not establish the molecular mechanism responsible for those changes.

## Limitations

Barcode lineage tracing records changes in lineage representation but does not by itself explain the biological mechanisms underlying those changes.

Observed lineage patterns remain dependent on the experimental model, biological sampling, and analytical assumptions. Functional experiments, molecular characterization, or additional sequencing would be required to establish causal resistance mechanisms.

Complementary proteomic analysis provides broader molecular context but does not independently establish a lineage-specific mechanism.

## Status

Presented as a poster and lightning talk at MD Anderson Cancer Center in August 2026. The study remains unpublished.

This webpage has been intentionally desensitized for public presentation. No underlying datasets, clone-level findings, treatment-group outcomes, candidate identities or rankings, quantitative study results, or internal experimental details are displayed.

<figure class="figure--photo"><a data-lightbox-trigger href="/images/mdanderson-trainees-2000.webp" data-full="/images/mdanderson-trainees-2000.webp" data-width="2000" data-height="1500" data-alt="Group photograph of summer research trainees in the ITERT program at MD Anderson Cancer Center, 2026." data-caption="With fellow ITERT summer research trainees at MD Anderson Cancer Center, 2026."><img src="/images/mdanderson-trainees-1200.webp" width="1200" height="900" alt="Group photograph of summer research trainees in the ITERT program at MD Anderson Cancer Center, 2026." loading="lazy" decoding="async"></a><figcaption>With fellow ITERT summer research trainees at MD Anderson Cancer Center, 2026.</figcaption></figure>
