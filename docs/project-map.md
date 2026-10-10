# UX Heuristics Compass public site

This repository owns the product landing page, public reports and release links. The application runtime has a separate source project; this page does not rebuild its packages.

- `index.html`: project story, product guidance and tabbed examples.
- `site.js`: section/example navigation, deep links and copy/download feedback.
- `styles.css`, `assets/network.css`: existing site and shared network styles.
- `assets/project.css`: product-specific landing and case-study composition.
- `docs/case-study-evidence.md`: public claim/provenance boundaries.
- `examples/`: preserved public reports and their existing captures.
- `landing-manifest.json`, `downloads/`: versioned asset manifest and packaged files; the manifest owns the version and checksums.

The network header/footer and related assets load from the sibling `/compass-suite/` site. Changes here must not modify that repository. GitHub Pages serves this repo’s `main` root. Verify links, tabs, nested install hashes and 1440/1024/390/320px renders before publishing. Current QA: `docs/landing-review.md`.

Start at `README.md` for the public destination and executable source checks. `AGENTS.md` records editing boundaries. The runtime and release builder are outside this checkout; their current maintainable source must be identified before package changes. Local `assets/network.css` and remotely hosted `/compass-suite/` assets coexist, so copying one file does not remove the hosted dependency.

For a rendered website change, open each main and example tab using both pointer and arrow keys, follow a direct install hash such as `#install-cowork`, open and dismiss the mobile menu, and open a report with JavaScript disabled. Inspect the four viewport sizes above for overflow and readable report links. Check browser console/network failures, including the sibling asset URLs. Preview under the real repository path with the sibling site available, or separately check those live assets; then repeat the changed path on the authorized deployed version. Keep historical QA dated and separate from the new result.
