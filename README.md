# yanshengluo.github.io

Source for the research portfolio of Yansheng Luo, a static site built with Astro, TypeScript, and
plain CSS and deployed to GitHub Pages.

Live site: <https://yanshengluo.github.io/>

## Local development

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve dist/ at http://localhost:4321
npm run check      # type and template diagnostics
npm run verify     # post-build checks: links, anchors, headings, image alt text and dimensions
```

## Structure

```text
src/
  assets/            processed images used by the site
  components/        page sections and interactive research diagrams
  content/research/  one Markdown narrative per research project
  data/              profile, work, social links, figures, research routes
  layouts/           BaseLayout (SEO, header, footer) and ProjectLayout
  pages/             /, /research/*, /work/, /about/, /cv/, 404
  scripts/           progressive enhancements (navigation, diagrams, lightbox, previews)
  styles/            design tokens, global styles, interaction layer
public/              CV PDF, figure images, favicon, social preview image, robots.txt
tools/verify-dist.mjs  post-build verification
```

Content is edited in `src/content/research/*.md` (project pages), `src/data/work.ts`
(publications, presentations, recognition, teaching), `src/data/profile.ts` (homepage and About
copy), and `src/data/social.ts` (links).

## Deployment

`.github/workflows/deploy.yml` builds the site with `withastro/action` and publishes it with
`actions/deploy-pages` on every push to `main`. In the repository settings, **Pages → Source** must be
set to **GitHub Actions**.

## License

All text, images, and the CV are © Yansheng Luo. All rights reserved.
