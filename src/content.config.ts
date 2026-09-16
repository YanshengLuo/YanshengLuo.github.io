import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

/**
 * Research project narratives. Each project page has its own section structure
 * suited to its science; only typography, header, and footer are shared.
 *
 * `privacy` is an internal handling label and is never rendered for visitors.
 */
const research = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/research" }),
  schema: z.object({
    /** Page H1. */
    title: z.string(),
    /** Shorter title used on the homepage row, where one differs from the page title. */
    homeTitle: z.string().optional(),
    /** Short label for navigation and cross-references. */
    shortTitle: z.string(),
    /** Institution · programme · period, shown above the project title. */
    label: z.string(),
    /** Compact date · institution line used on the homepage row. */
    homeMeta: z.string(),
    /** Homepage description (2–3 sentences). */
    summary: z.string(),
    /** Opening paragraph on the project page. */
    intro: z.string(),
    /** Scientific hierarchy: primary work, experimental foundation, supporting work. */
    tier: z.enum(["primary", "foundation", "supporting"]),
    /** Approved photograph used as the homepage thumbnail, where one exists. */
    thumbnail: z.enum(["drg-culture"]).optional(),
    order: z.number().int().positive(),
    privacy: z.enum(["PUBLIC", "SUMMARY_ONLY", "MIXED"]),
    seoTitle: z.string(),
    description: z.string(),
  }),
});

export const collections = { research };
