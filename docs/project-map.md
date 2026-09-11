# UX Heuristics Compass public site

This repository owns the product landing page, public reports and release links. The application runtime has a separate source project; this page does not rebuild its packages.

- `index.html`: project story, product guidance and tabbed examples.
- `site.js`: section/example navigation, deep links and copy/download feedback.
- `styles.css`, `assets/network.css`: existing site and shared network styles.
- `assets/project.css`: product-specific landing and case-study composition.
- `docs/case-study-evidence.md`: public claim/provenance boundaries.
- `examples/`: preserved public reports and their existing captures.
- `landing-manifest.json`, `downloads/`: beta.10 asset manifest and packaged files; preserve checksums.

The network header/footer and related assets load from the sibling `/compass-suite/` site. Changes here must not modify that repository. GitHub Pages serves this repo’s `main` root. Verify links, tabs, nested install hashes and 1440/1024/390/320px renders before publishing. Current QA: `docs/landing-review.md`.
