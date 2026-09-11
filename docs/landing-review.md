# Landing-page review — September 11, 2026

Scope: UX Heuristics Compass public landing page and case study. Runtime packages, original example reports, shared network files, and other projects are unchanged.

## Visual direction and anchor review

Existing Working Tools editorial typography and paper/vermilion colors are retained. The decorative finding specimen is replaced by an existing report capture. The story uses restrained numbered decisions and a task workflow; no generated illustrations or new decorative icons.

| Anchor | Render / location | Before or observed issue | Change and verification |
|---|---|---|---|
| A1 | 1440×1000, opening header | Long title and generic specimen occupied nearly the full viewport; authorship was buried | Shorter title, creator byline, primary story link and actual report. Checked desktop, 1024, 390 and 320px |
| A2 | Opening report / right column then mobile stack | Demonstration wording could read as evidence of observed user behavior | Original dated report capture, explicit archived/AI status, direct full-report link; caption readable in sentence case |
| A3 | Project story / workflow and three decisions | No compact account of the tool’s own development | Bounded problem → documented failure → implemented correction sequence; reviewed at desktop and mobile |
| A4 | Case-study comparison / report image and caption | Original comparison’s “fixed” labels could imply shipped improvements | Preserved artifact with adjacent explanation that platform differences are not verified fixes; legible text and working full report link |
| A5 | Mobile navigation and Examples | Section and nested install links needed reliable hidden-panel handling | Main/example keyboard tabs, mobile menus, #install-cowork deep link, direct story-to-example link all pass |
| A6 | Author, status and outcome copy | Broad experience claim and generic output framing | Creator role, beta state, reference-heuristic provenance, and unmeasured outcomes made explicit |

Design Taste Gate: ready. Layout and detail passes retain the existing identity, reduce the oversized hero, remove the decorative specimen, and keep evidence captions beside actual artifacts. At narrow sizes report images serve as linked previews; detailed report text is available in the linked originals.

## Behavior and file checks

- Browser tests pass for story link, example-panel reveal and focus, main/example arrow-key tabs, nested install hash, mobile menu open/Escape close, and JavaScript-disabled direct report access.
- Rendered 1440, 1024, 390 and 320px views; no horizontal page overflow in intro/examples. Case-study and evidence regions visually inspected on desktop/mobile.
- 200% root text scale checked for page overflow; this is not a full assistive-technology audit.
- No page JavaScript errors; unique element IDs; changed source passes syntax and whitespace checks.
- Six beta.10 release downloads fetched and SHA-256 matched against the landing manifest and checksums file.
- All 48 existing relative public file references returned HTTP 200; four sibling network assets resolved. 17 of 18 external URLs returned HTTP 200; LinkedIn returned its anti-bot HTTP 999 response.
- New document and stylesheet references checked locally before release; verify served hashes after deployment.

## Communication review

Communication Story Crafter: ready. Audience: hiring reviewers, builders and people evaluating the tool. Entry promise: structured usability feedback that can be inspected. Story evidence: May development records, beta source and original public report examples. Claims distinguish implemented features, historical test records, current file/website checks, and unmeasured participant outcomes. No adoption, time-saving, usability-improvement or current-host installation success is invented.

The preserved reports retain their original wording. Their grades and findings describe archived AI evaluations. The new case study does not certify those scores, reinterpret them as participant results, or claim third-party heuristic authorship.
