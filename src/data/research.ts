// Route table for the research collection. Collection ids are file names;
// the public routes are fixed.
export const RESEARCH_ROUTES = {
  pdac: "/research/pdac-clonal-evolution/",
  imrs: "/research/imrs/",
  "protein-design": "/research/protein-design/",
  regeneration: "/research/regeneration/",
} as const;

export type ResearchId = keyof typeof RESEARCH_ROUTES;

/** Short labels keyed by route, used for "Project:" links on the Work page. */
export const RESEARCH_LABELS: Record<string, string> = {
  [RESEARCH_ROUTES.pdac]: "PDAC clonal evolution",
  [RESEARCH_ROUTES.imrs]: "IMRS",
  [RESEARCH_ROUTES["protein-design"]]: "Protein design",
  [RESEARCH_ROUTES.regeneration]: "Regeneration",
};

export function researchRoute(id: string): string {
  const route = RESEARCH_ROUTES[id as ResearchId];
  if (!route) throw new Error(`Unknown research project id: ${id}`);
  return route;
}
