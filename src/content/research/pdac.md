---
title: Barcode lineage tracing of pancreatic cancer evolution
shortTitle: PDAC clonal evolution
label: MD Anderson Cancer Center · Yao Lab · Summer 2026
homeMeta: 2026 · MD Anderson Cancer Center
projectMeta: MD Anderson · Summer 2026
question: How do different modes and treatment histories of KRAS suppression shape clonal selection and routes to resistance in pancreatic ductal adenocarcinoma?
role: Developed and iteratively refined a reproducible computational workflow for lineage-tracing analysis, built the R analyses, and contributed to supporting model characterization.
methods:
  - Barcode lineage tracing
  - Reproducible R analysis
  - Clonal abundance and composition
  - Differential abundance
  - Dimensionality reduction and clustering
  - Trajectory comparison
  - Robustness analysis
  - Proteomic quality control
status: Presented as a poster and lightning talk, August 2026 · study unpublished
outputs:
  - type: Poster and lightning talk
    title: "Different Routes to Resistance: Multifaceted KRAS Inhibition Directs Distinct Clonal Evolution in Pancreatic Ductal Adenocarcinoma"
    venue: MD Anderson Cancer Center, Houston, TX
    date: Aug 2026
    state: Presented · Luo, Y., Zeng, Y., Attanasio, S., et al.
  - type: Ongoing unpublished study
    title: Clonal evolution under therapeutic perturbation
    venue: MD Anderson Cancer Center
    state: Unpublished study; clone-level findings are not shown here
summary: At MD Anderson Cancer Center, I worked in Dr. Wantong Yao's laboratory on pancreatic ductal adenocarcinoma and therapeutic resistance. I analyzed barcode lineage-tracing data to study how different modes and treatment histories of KRAS suppression were associated with clonal selection. I developed a multi-evidence analysis framework and supported proteomic quality control and interpretation across treatment-response states.
intro: During my 2026 summer research at MD Anderson Cancer Center in Dr. Wantong Yao's laboratory, I used barcode lineage tracing to investigate how distinct therapeutic perturbations shape clonal evolution and the emergence of resistance in pancreatic ductal adenocarcinoma.
tier: primary
order: 1
privacy: SUMMARY_ONLY
seoTitle: Barcode Lineage Tracing in Pancreatic Cancer | Yansheng Luo
description: Reproducible barcode lineage-tracing analysis of clonal selection and therapeutic resistance in pancreatic ductal adenocarcinoma, with a multi-evidence framework for prioritizing patterns for follow-up.
---

## The question

Therapy changes the selective environment of a heterogeneous tumor population. This project asked how different modes and treatment histories of KRAS suppression are associated with clonal selection and evolutionary routes to resistance in pancreatic ductal adenocarcinoma (PDAC).

## Analytical challenge

Barcode lineage tracing produces a high-dimensional record of which lineages persist as a tumor population changes. The challenge was not simply to identify abundance shifts, but to distinguish credible, recurring patterns from dominant single-sample events, sampling effects, and analytical sensitivity.

## My contribution

- Developed and iteratively refined a reproducible computational workflow for barcode lineage-tracing analysis.
- Analyzed clonal abundance and composition using differential abundance, dimensionality reduction, clustering, and trajectory-style comparisons.
- Evaluated recurrence across biological replicates and distinguished treatment-associated patterns from sample-specific observations.
- Examined lower-abundance lineages so that dominant clones alone did not determine interpretation.
- Built a multi-criterion prioritization framework and assessed whether candidate rankings were robust to reasonable analytical choices.
- Supported quality control and reproducible analysis of human PDAC mass-spectrometry profiles, comparing generalized treatment-response states and relating that context to the lineage analysis.
- Contributed to supporting characterization and validation of the experimental model.

## How candidates were prioritized

The reproducible analysis framework I developed integrates complementary evidence before prioritizing a lineage pattern for biological follow-up. It considers abundance, recurrence, treatment association, longitudinal behavior, and robustness across biological replicates rather than relying on one statistic.

The workflow retained ambiguous or low-evidence trajectories for cautious interpretation instead of forcing every lineage into a category. A dramatic shift in one sample was not treated as stronger evidence than a more moderate pattern that recurred across replicates. The framework describes an analysis approach; it is not a claim that lineage rankings identify molecular mechanisms.

## What the analyses supported

The analyses supported substantial clonal selection and treatment-history-associated differences in clonal patterns. No single universal dominant lineage adequately explained the resistance-associated patterns. Reproducibility across biological replicates helped separate recurring patterns from striking but sample-specific events, producing a focused set of hypotheses for follow-up.

These are lineage-level observations and interpretations. They suggest that distinct selective environments may favor different evolutionary trajectories, but do not establish causal resistance mechanisms. Prioritized lineages remain hypotheses for subsequent experimental investigation.

## Limitations

Barcode lineage tracing records which lineages persist, not why. Associations in a model system do not establish a biological mechanism, and candidate rankings depend on the evidence considered. Follow-up sequencing or functional assays would be needed to test whether prioritized lineages reflect distinct resistance strategies. The mass-spectrometry analysis provides complementary proteomic context; it does not by itself validate a lineage-level mechanism.

## Status

Presented as a poster and lightning talk at MD Anderson Cancer Center in August 2026. The study is unpublished; clone-level results and internal experimental details are not presented here.

<figure class="figure--photo"><a data-lightbox-trigger href="/images/mdanderson-trainees-2000.webp" data-full="/images/mdanderson-trainees-2000.webp" data-width="2000" data-height="1500" data-alt="Group photograph of summer research trainees in the ITERT program at MD Anderson Cancer Center, 2026." data-caption="With fellow ITERT summer research trainees at MD Anderson Cancer Center, 2026."><img src="/images/mdanderson-trainees-1200.webp" width="1200" height="900" alt="Group photograph of summer research trainees in the ITERT program at MD Anderson Cancer Center, 2026." loading="lazy" decoding="async"></a><figcaption>With fellow ITERT summer research trainees at MD Anderson Cancer Center, 2026.</figcaption></figure>
