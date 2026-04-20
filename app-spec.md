# App Spec — Prototype 01 Wine Tutorial App

## 1\. Purpose

This document is the feature and behavior specification for Prototype 01.

It serves as the source of truth for:

* app flow,
* screen behavior,
* user inputs,
* required vs skip rules,
* final output structure,
* data model,
* screen structure.

This file should guide coding decisions and later revisions during the prototype sprint.

\---

## 2\. Product Intent

The app is meant to make wine tasting feel approachable, structured, and non-intimidating for beginners.

It should feel:

* friendly,
* light,
* supportive,
* useful without feeling like homework.

The app is not meant to teach advanced wine expertise in version 1. It is meant to help beginners build confidence through a guided tasting flow.

\---

## 3\. App Flow

The app flow is locked as:

1. Welcome
2. Look
3. Smell
4. Taste
5. Feel
6. Final Note

This is implemented as a single-page web app with step-by-step progression.

\---

## 4\. Interaction Rules

### General Rules

* The app is a single-page web app.
* The user moves through the app one step at a time.
* The user should be able to move forward and backward through the steps.
* The user should be able to reset the flow from the final step.

### Selection Rules

* Every structured field requires an active selection before the user can continue.
* Blank values are not allowed for structured fields.
* Skip is allowed only where explicitly defined below.
* Optional comment fields may be left blank.

### Skip Rules

* Look: no skip option
* Smell: no skip option
* Taste: skip allowed for each structured field
* Feel: skip allowed for each structured field
* Final generated technical note should omit any field values marked as Skip

\---

## 5\. Step Definitions

### Step 1 — Welcome

**Purpose**
Introduce the app in a simple, friendly way and invite the user to begin.

**Inputs**

* no tasting inputs
* begin button

**UI Elements**

* app title
* short supportive introduction
* begin button

\---

### Step 2 — Look

**Purpose**
Prompt the user to observe the visual appearance of the wine.

**Required Structured Input**

* color: Red / White / Rosé

**Optional Input**

* comment text field

**Continue Rule**

* user cannot continue until color is selected

\---

### Step 3 — Smell

**Purpose**
Prompt the user to identify the main aroma family that stands out most.

**Required Structured Input**

* aroma family: Fruit / Floral / Herbal / Earthy / Spicy / Other

**Optional Input**

* comment text field

**Continue Rule**

* user cannot continue until aroma family is selected

\---

### Step 4 — Taste

**Purpose**
Prompt the user to describe core taste characteristics in a beginner-friendly way.

**Required Structured Inputs**

* dryness: Dry / Off-dry / Sweet / Skip
* body: Light / Medium / Full / Skip

**Optional Input**

* comment text field

**Continue Rule**

* user cannot continue until both dryness and body have a selected value

\---

### Step 5 — Feel

**Purpose**
Prompt the user to describe how the wine feels in the mouth.

**Required Structured Inputs**

* acidity: Low / Medium / High / Skip
* tannin: Low / Medium / High / N/A / Skip
* finish: Short / Medium / Long / Skip

**Optional Input**

* comment text field

**Continue Rule**

* user cannot continue until acidity, tannin, and finish each have a selected value

\---

### Step 6 — Final Note

**Purpose**
Help the user reflect on the wine in three ways:

1. quick personal judgment,
2. freeform personal review,
3. structured tasting language.

#### Part 1 — Quick Review

**Required Structured Inputs**

* stars: 1 / 2 / 3 / 4 / 5
* buy again: Yes / No / Maybe

**Continue Rule**

* user cannot complete the step until both fields are selected

#### Part 2 — User Review

**Optional Input**

* freeform review text field

#### Part 3 — Technical Note

**System Output**

* auto-generated tasting note based on prior structured selections and optional comments

**User Input**

* editable open field where the user can try writing or refining their own technical note

**Actions**

* copy button
* reset button

\---

## 6\. Final Output Logic

### Generated Technical Note Rules

* Include Look and Smell selections in the generated note.
* Include Taste and Feel selections only if the selected value is not Skip.
* Do not print the word Skip anywhere in the generated note.
* Omit skipped descriptors cleanly.
* Use beginner-friendly language.
* Use optional user comments only if helpful and readable.

### Final Screen Output Types

The final screen contains three output layers:

1. **Quick Review**

   * stars
   * buy again
2. **User Review**

   * freeform personal review text
3. **Technical Note**

   * generated tasting note
   * editable user technical note field

\---

## 7\. Data Model

The app should use a simple JavaScript object to store state.

```javascript
const tastingData = {
  look: {
    color: "",
    note: ""
  },
  smell: {
    aroma: "",
    note: ""
  },
  taste: {
    dryness: "",
    body: "",
    note: ""
  },
  feel: {
    acidity: "",
    tannin: "",
    finish: "",
    note: ""
  },
  review: {
    stars: "",
    buyAgain: "",
    userReview: "",
    generatedTechnicalNote: "",
    userTechnicalNote: ""
  }
};
```

### Data Model Notes

* Empty strings are acceptable as initial values before user interaction.
* Structured fields must be assigned a valid option before advancing.
* Skip should be stored explicitly as a selected value where allowed.
* The generated technical note may be created dynamically and optionally stored in the review section.

\---

## 8\. Screen Structure

The prototype should use a single-page layout.

### Recommended Layout

* app title
* short subtitle or supportive instruction
* progress indicator
* current step title
* structured input controls
* optional comment field where applicable
* navigation controls

### Navigation Controls

* back button
* next button
* final-step copy button
* final-step reset button

### Final Step Layout

The final screen should include:

1. quick review section,
2. user review field,
3. generated technical note,
4. editable technical note field,
5. copy action,
6. reset action.

\---

## 9\. Technical Boundaries

Version 1 should remain intentionally simple.

### Included

* HTML
* CSS
* Vanilla JavaScript
* Single-page flow
* Local in-memory state
* GitHub storage and sharing

### Excluded

* backend
* database
* authentication
* user accounts
* analytics
* recommendations engine
* advanced frameworks
* production architecture

\---

## 10\. Design Guidance

The visual and language style should be:

* simple,
* clean,
* beginner-friendly,
* non-snobby,
* supportive.

The app should not feel:

* academic,
* overly formal,
* expert-only,
* cluttered.

\---

## 11\. Revision Rules

This document is the source of truth for the app behavior during the sprint.

If behavior changes are made during the sprint, this file should be updated so the spec stays aligned with the build.

