// Approved photographic assets (processed derivatives only) with their
// accessible descriptions. Originals stay in /sources and are never served.
// Figures embedded in project prose use the public copies in /images.
import type { ImageMetadata } from "astro";
import drgCulture from "../assets/research/regeneration/drg-culture.webp";

export interface Figure {
  src: ImageMetadata;
  alt: string;
}

export const figures = {
  "drg-culture": {
    src: drgCulture,
    alt: "Vimentin immunofluorescence of a dorsal root ganglion explant in culture, with labeled non-neuronal structural cells radiating outward from the central ganglion.",
  },
} satisfies Record<string, Figure>;

export type FigureKey = keyof typeof figures;
