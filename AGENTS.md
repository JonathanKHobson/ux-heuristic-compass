# Maintenance boundaries

Read `README.md` and `docs/project-map.md` before editing. This checkout owns the public site, reports and release references. It does not contain the maintained application runtime or a package rebuild workflow.

- Change site copy and behavior in the files identified by the project map. Keep claim/provenance constraints in `docs/case-study-evidence.md`.
- Treat `downloads/` and the release hashes in `landing-manifest.json` as published artifacts. Obtain the authoritative builder and verify a new version before replacing them. Do not repair a package by editing an archive or invent a build command.
- Preserve report paths, install deep links, release URLs and the `/compass-suite/` asset dependency. A repository rename would affect Pages routes.
- Keep private source locations, research, host configuration and credentials out of public documentation and examples.
- For documentation changes, verify relative links and run `git diff --check`. For JS/manifest changes, use the commands in the README. For rendered changes, perform the project map's interaction and viewport checks.
- Report the changed files and checks, including checks not run. Inspect the complete diff before committing. Pushes, releases, hosting changes and lifecycle decisions require their own authorization.
