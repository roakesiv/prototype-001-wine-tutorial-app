# Build Notes — Prototype 01 Wine Tutorial App

## Purpose

This file is for fast working notes during the prototype sprint.

Use it to capture:
- prompts used with ChatGPT,
- decisions,
- blockers,
- bugs,
- lessons learned,
- next steps.

Do not worry about polish. This is a scratchpad.

---

## Current MVP Reminder
- Beginner-friendly wine tasting web app
- Guided flow: Look, Smell, Taste, Feel, Final Note
- Optional comment at each step
- Final tasting note generated from user inputs
- Friendly and simple tone
- No extra features unless the core flow works

---

## Sprint Log

### Day 1
**Goal:** Plan and setup

**What I did:**
- Created the local prototype folder and starter files
- Created a ChatGPT Project and kept this thread inside it
- Confirmed GitHub account access
- Defined the MVP, experience principle, and acceptance criteria

**What I learned:**
- The prototype plan acts as the project charter and stable source of truth
- Build notes act as the field journal for execution, blockers, and learning

**Blockers / confusion:**
- None major so far; main effort was learning the difference between plan artifacts and working notes

**Next step:**
- Move into Day 2 and define the app structure, screens, and data inputs

---

### Day 2
**Goal:** Learn the app structure

**What I did:**
- 
- 
- 

**What I learned:**
- 
- 

**Blockers / confusion:**
- 
- 

**Next step:**
- 

---

### Day 3
**Goal:** Build first working version

**What I did:**
- 
- 
- 

**What I learned:**
- 
- 

**Blockers / confusion:**
- 
- 

**Next step:**
- 

---

### Day 4
**Goal:** Add comments and tasting note logic

**What I did:**
- 
- 
- 

**What I learned:**
- 
- 

**Blockers / confusion:**
- 
- 

**Next step:**
- 

---

### Day 5
**Goal:** Save and organize

**What I did:**
- 
- 
- 

**What I learned:**
- 
- 

**Blockers / confusion:**
- 
- 

**Next step:**
- 

---

### Day 6
**Goal:** Polish and review

**What I did:**
- 
- 
- 

**What I learned:**
- 
- 

**Blockers / confusion:**
- 
- 

**Next step:**
- 

---

### Day 7
**Goal:** Reflect and assess

**What I did:**
- 
- 
- 

**What I learned:**
- 
- 

**Blockers / confusion:**
- 
- 

**Next step:**
- 

---

## Useful Prompts

### Prompt: explain concept simply
Paste useful prompts here.

### Prompt: generate code
Paste useful prompts here.

### Prompt: debug issue
Paste useful prompts here.

---

## Bugs / Issues Tracker

- [ ] 
- [ ] 
- [ ] 

---

## Ideas for Future Versions

- 
- 
- 

---

## End-of-Sprint Summary

**What shipped:**
- 

**What I now understand better:**
- 

**What still feels confusing:**
- 

**Best next prototype step:**
- 


## October 23, 2026 — Prototype 02 visual revision

### Location and workflow

- Authoritative checkout: `C:\Users\Merlin\Desktop\AI Hub\Op Revan\wine-tutorial-app-repo\prototype-001-wine-tutorial-app`.
- Experimental work stays on `v1-learning-lab`. The existing remote is `roakesiv/prototype-001-wine-tutorial-app`; no new repository is needed.
- Initial drafts and browser test utilities were staged outside this repo because the chat workspace had restricted write access. Final application changes are in the root checkout above. The external staging folder is not an app source or deployment directory.
- Read AGENTS, the current spec and plan, design principles, UX checklist, wine-reference rules, and relevant teaching source material. Updated README links to the actual filenames.

### Changes and decisions

- Consolidated Prototype 02 styling into the loaded `styles.css`. Removed the unreferenced `styles-prototype.css`.
- Kept the six-step flow and all required selections. Replaced dropdowns with native radio choices without preselecting answers.
- Shortened Welcome, retained the learning ladder and philosophy as optional disclosures, and separated concise lessons from tasting inputs.
- Made deeper help and notes optional; selection changes keep focus and leave disclosures open.
- Added destination labels to Next, inline validation, small success messages, a read-only direct note, and an inline completion state.
- Preserved Skip per Taste/Feel field, omitted Skip and N/A tannin from generated descriptions, and escaped user text when rendering it.
- Fixed editing a reaction after completion so Finish becomes available again. Removed obsolete success-card markup that was being built and immediately discarded.
- Updated spec section 17 for the current layout and completion behavior. No framework, package manager, or external dependency was added.

### Verification

- Tested the app served directly from this exact checkout in headless Microsoft Edge at 1280px desktop, 390px mobile, and 320px narrow mobile widths.
- Completed Welcome through Reflect, validated every required group, exercised mixed Skip/N/A choices, and checked no horizontal overflow.
- Completed a keyboard-only tasting by opening this checkout's index.html directly as a file URL. Exercised native Tab, Enter, Space, and arrow-key input; checked radio focus remains in place after changes and help stays open.
- Confirmed Back/Next retains selections and writing, notes render as plain text, skipped fields are omitted, and direct-note combinations form complete sentences.
- Reviewed desktop and mobile screenshots; confirmed the main stylesheet loads and browser JavaScript/error logs are clear.
- Audited accessible fieldset/legend names, radio checked/required states, textarea labels, current-step indication, live status, and error announcements. This is a browser accessibility-tree check, not a screen-reader session.
- JavaScript syntax and Git whitespace checks pass.

### Remaining checks and publishing boundary

- Chrome, Firefox, Safari, physical-device touch testing, and a screen-reader walkthrough remain unverified; those browsers are not installed in this Windows environment.
- Responses remain session-only. Reloading clears notes, as stated in the UI and spec.
- The existing untracked `Source Files/Wine Tracker.xlsx` is unrelated and is excluded from this change.
- Publish source changes to the existing experimental GitHub branch. A merge into `main` or website hosting change is separate work.
