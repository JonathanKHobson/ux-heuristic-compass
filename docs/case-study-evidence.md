# UX Heuristics Compass: case-study evidence

Prepared September 11, 2026 from existing development records and already-public artifacts. Kyle confirmed ownership of UX Heuristics Compass in this review. Role: creator of the tool; product direction, audit workflow and report design, with AI-assisted implementation. This record does not claim solo authorship of third-party heuristics or AI-generated evaluations.

## Evidence and claim boundaries

| Case-study claim | Source and status | What it establishes |
|---|---|---|
| The original user job was a bounded, pre-ship interface review | Mission, Audience, and Purpose Charter, May 1 development record | Intended audience and problem, not user-study validation |
| A full beta audit omitted H12 and H14 | Oppia beta-feedback record, May 2; progress-log entry “Beta Feedback Triage Hardening” | An observed development failure and a recorded scope-lock correction |
| Human review can resume from saved audit state | May 4 checkpoint implementation record; published source `server.py`, `audit.py`, `state.py` | Implemented `resume_run_id` and rating-override handling; historical test evidence, not a fresh host-install test |
| Compact responses address conversation overload | May 4 status-only workflow record; published source and beta.10 release notes | Implemented compact/status-only outputs and local payload paths; no quantified speed claim |
| Evidence and report readiness are explicit | May 3–4 report and Evidence Gallery implementation records; published `report.py` and `tool_contracts.py` | Report validation, visual-review capability checks, and evidence metadata exist in the release |
| Desktop and mobile revealed different review needs | May 4 Compass Suite feedback record; archived public desktop, mobile and comparison reports | Bounded review of five supplied pages, 23 captured states per platform; no current whole-site score or causal improvement claim |

Development records report passing regression tests and a later rendered report smoke check. Those historical results were not rerun as a product test in this landing-page refinement. The current pass checks website behavior, rendered layouts, public assets and release-file integrity.

## Public artifacts

- [Beta.10 release notes](../release-notes.md)
- [Published source and release files](https://github.com/JonathanKHobson/ux-heuristic-compass/releases/tag/v0.1.0-beta.10)
- [Archived desktop report](../examples/compass-suite-audit/codex-uxhc-desktop-audit.html)
- [Archived mobile report](../examples/compass-suite-audit/mobile-audit.html)
- [Archived comparison](../examples/compass-suite-audit/desktop-mobile-comparison.html)

The original comparison uses “fixed” and “new” labels across desktop and mobile inputs. These counts are not verified shipped fixes or measured before/after outcomes. Original reports and images are preserved unchanged. Researcher personas are AI evaluation roles, not recruited participants. The tool extends Nielsen Norman Group’s ten heuristics with four additional profiles; it does not originate the base heuristics.

## September 2026 review

Six release downloads match the landing manifest’s SHA-256 values. Existing local report/image/install references were reachable. This is evidence of published artifact integrity, not a claim that every current host can install the beta. No private research records, raw conversations, account data or source screenshots were newly published in this pass.
