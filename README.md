# UX Heuristics Compass

## Historical repository

This repository preserves the earlier public guide and downloads. Current methods
and onboarding live in [UX Design Studio](https://github.com/JonathanKHobson/working-tools-plugins/tree/main/plugins/ux-design-toolkit).
Existing Pages URLs, release assets, checksums and examples remain available.

The documentation below describes the preserved edition. Archival does not remove
separately configured runtimes, change their data, or make the successor a bundled
replacement for every historical backend.

Public downloads, installation guidance and example usability reports for UX Heuristics Compass. Start at the [product page](https://jonathankhobson.github.io/ux-heuristic-compass/) to choose a download, or read the [Oppia example report](https://jonathankhobson.github.io/ux-heuristic-compass/examples/oppia-ux-audit-report.html).

This repository maintains the public website and packaged release references. The application runtime is maintained in a separate source project. A source ZIP in [Releases](https://github.com/JonathanKHobson/ux-heuristic-compass/releases) is a versioned snapshot, not proof that this checkout can rebuild it. The published beta's version and asset hashes are recorded in [landing-manifest.json](landing-manifest.json).

## Make a website change

Read [docs/project-map.md](docs/project-map.md) for file ownership, checks and the shared assets hosted by `compass-suite`. Edit the website here; use the [repository issue tracker](https://github.com/JonathanKHobson/ux-heuristic-compass/issues) to request the current runtime source and builder before changing packages. Preserve existing example URLs and release download links.

The release URLs in `landing-manifest.json` identify versioned downloads; `downloads/` retains packaged website copies. A release update must account for both locations, compare the intended artifact bytes and SHA-256 values, and update references deliberately. Do not assume a website commit rebuilds or replaces a GitHub Release. The exact synchronization workflow belongs to the separate builder and must be confirmed before a new package release.

There is no package-manager build or automated application test suite in this website checkout. For a JavaScript or manifest change, run:

```sh
node --check site.js
python3 -m json.tool landing-manifest.json > /dev/null
git diff --check
```

For changes to rendered pages, also follow the viewport and interaction checks in the project map. A localhost preview alone cannot verify `/compass-suite/` assets from the neighboring Pages site. Publishing from `main` is a separate action; a local change is not live.

Agent maintenance guidance is in [AGENTS.md](AGENTS.md). Historical release and install evidence lives in [release-notes.md](release-notes.md) and [docs/landing-review.md](docs/landing-review.md); those records do not establish compatibility with every current host version.
