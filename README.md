# A Little Wine — Prototype 02

A beginner-friendly wine tasting guide built with HTML, CSS, and vanilla JavaScript. No frameworks, dependencies, build step, backend, or account are required.

## Open the app locally

Open the root `index.html` in your browser. On this computer the authoritative checkout is:

`C:\Users\Merlin\Desktop\AI Hub\Op Revan\wine-tutorial-app-repo\prototype-001-wine-tutorial-app`

When checking a local change, confirm the browser address points to that checkout's `index.html`. Reload after editing. A GitHub code page or an older hosted website does not automatically reflect uncommitted local files.

## Current experience

- Six steps: Welcome → Look → Smell → Taste → Feel → Reflect.
- Short lesson guidance, large radio choices, optional explanations and writing.
- Each structured question requires a selection; Taste and Feel allow an explicit Skip per question.
- Back and Next preserve responses during the session.
- Reflect includes a read-only direct note, rating, buy-again choice, optional personal take, and optional practice note.
- Finish celebrates the tasting inline. Editing a reaction reopens the Finish action.
- Skipped structured values and N/A tannin are omitted from the direct note. User writing is displayed as text.
- Responses live in memory and are cleared when the page reloads or closes.

Keyboard: Tab and Shift+Tab move between controls; arrow keys move within radio groups; Space selects a radio or toggles a disclosure; Enter activates a focused button. Focus is visible, and validation moves focus to an unanswered question.

## Project files and instructions

- `AGENTS.md` — repository workflow, constraints, and branch rules; read before editing.
- `app-spec-prototype.md` — current behavior and content specification. Section 17 takes precedence over earlier layout examples.
- `prototype-plan.md` — Prototype 02 sprint charter.
- `docs/standards/` — design principles, UX checklist, and wine-reference rules.
- `wine-journal-source.md` and `wine-reference-source.md` — teaching and vocabulary source material.
- `index.html` — app shell; loads `styles.css` and `script.js`.
- `styles.css` — the single app stylesheet, including responsive layouts and focus states.
- `script.js` — lessons, rendering, session state, validation, and direct-note generation.
- `build-notes.md` — decisions, verification results, and remaining checks.

## Git workflow

Use `v1-learning-lab` for prototype work. `main` is the stable, published branch. Review the exact diff and add only intended files before committing; do not add raw source workbooks incidentally.

The existing remote is [roakesiv/prototype-001-wine-tutorial-app](https://github.com/roakesiv/prototype-001-wine-tutorial-app). Pushing `v1-learning-lab` shares the experimental source code. To release a tested version, merge it into `main`. GitHub Pages publishes the root of `main` over HTTPS at [the live tasting guide](https://roakesiv.github.io/prototype-001-wine-tutorial-app/). Wait for the Pages build and verify the live app after merging.
