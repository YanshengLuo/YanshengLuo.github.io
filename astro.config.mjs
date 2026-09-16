// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// GitHub Pages user site: served from the domain root, so no `base`.
export default defineConfig({
  site: "https://yanshengluo.github.io",
  output: "static",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
    }),
  ],
  image: {
    // Only local, processed derivatives are used; no remote images.
    domains: [],
    // Responsive srcset + intrinsic sizing to avoid layout shift.
    layout: "constrained",
    responsiveStyles: true,
  },
});
