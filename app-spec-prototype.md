# App Spec — Prototype 02 Guided Beginner Wine Tutorial

## 1. Purpose

This document is the feature, behavior, and content specification for Prototype 02.

It is the source of truth for:
- updated product framing,
- app flow,
- step-specific lesson notes,
- separation of lesson notes vs tasting notes,
- updated field structure,
- redesigned final reflection step,
- learning-experience design principles,
- data model direction,
- screen/layout expectations.

This file should guide implementation decisions and later revisions during Prototype 02.

---

## 2. Product Intent

Prototype 02 should feel like a guided beginner wine tutorial rather than a homework-like tasting form.

The app should:
- teach simple tasting skills in context,
- reduce intimidation,
- guide the user step by step,
- celebrate small wins,
- separate instructional content from user-generated tasting notes,
- keep the experience lightweight, playful, and supportive.

The product is tutorial-first and notes-second.

---

## 3. Core Product Framing

### Product Identity
A guided beginner wine tutorial web app that teaches simple tasting skills while capturing personal tasting notes.

### User
Beginner or casual wine drinkers who want help understanding how to taste wine without feeling judged, overwhelmed, or forced into expert language too quickly.

### Problem Being Solved
Prototype 01 captured tasting notes successfully, but it did not feel enough like a tutorial. It felt too bland, too form-like, and too much like homework.

Prototype 02 should solve that by:
- adding short lesson notes at each step,
- improving instructional flow,
- making the experience feel more like coaching than data entry,
- cleaning up the final reflection step.

### Experience Principle
The app should feel friendly, encouraging, and lightweight. It should teach only what is needed in the moment and reduce pressure or performance anxiety.

---

## 4. Learning Experience Model

Prototype 02 should teach through a low-pressure guided ritual.

Each step should:
- give a simple structure,
- reduce stress,
- celebrate small success,
- provide basic guidance,
- explain why the step matters,
- offer optional deeper information,
- remind the user they do not have to be fancy,
- encourage playfulness and silliness where it helps learning.

The app should make wine tasting feel learnable, social, and fun — not like a test.

---

## 5. Lesson Design Pattern

Each main learning step should use a three-part micro-lesson:

1. **Do this** — concrete action
2. **Why it matters** — short concept
3. **Good enough answer** — reassurance / example

This keeps the app tutorial-like without becoming a long reading assignment.

---

## 6. App Flow

The flow is locked as:

1. Welcome
2. Look
3. Smell
4. Taste
5. Feel
6. Reflect

### Rationale
“Reflect” is a better final-step label than “Final Note” because it feels more human and less like paperwork.

The step flow should preserve the spirit of broader wine tasting mechanics while keeping the UI simple and usable:
- observe,
- smell,
- taste,
- feel,
- reflect.

---

## 7. Content Architecture

Prototype 02 should clearly separate two different content types.

### 7.1 Lesson Notes
Lesson notes are authored instructional content.

They should:
- teach the user what the step is about,
- explain what to notice,
- reassure the user,
- keep the tone light and beginner-friendly.

Lesson notes should be updateable without changing the core app behavior logic whenever possible.

### 7.2 Tasting Notes
Tasting notes are user-generated responses.

They include:
- structured selections,
- optional comments,
- quick reactions,
- personal reflections,
- optional practice note writing.

### 7.3 Product Rule
Each main step should have:
1. a **Lesson Note** section,
2. a **Your Tasting Note** section.

This is the core separation that Prototype 01 lacked.

---

## 8. Interaction Rules

### General Rules
- The app remains a single-page web app.
- The user moves one step at a time.
- Back and Next should still be supported.
- Every step should visually separate instruction from user input.
- The tone should remain encouraging, non-snobby, and lightly playful.

### Selection Rules
- Every structured field requires an active selection before moving forward.
- Blank values are not valid for structured fields.
- Optional text fields may remain blank.

### Skip Rules
- Look: no skip
- Smell: no skip
- Taste: skip allowed per structured field
- Feel: skip allowed per structured field
- Guided direct note should omit skipped values cleanly
- The word “Skip” should never appear in the generated summary shown to the user

---

# 9. Locked Step Designs

## 9.1 Welcome

### Purpose
Lower intimidation, explain the direct-description model, give users a fast path to start tasting, and define a beginner success path.

### Main Copy

# Wine Tasting, Without the Snobbery

Grab a glass. We’ll keep this simple.

Most wine language sounds fancy because people often use poetic descriptions. You do not need that to start.

Beginner tasting starts with direct observations: is it red, white, or rosé? Does it smell fruity, floral, earthy, herbal, or spicy? That is already real wine tasting.

Understanding the wine you drink makes it more fun. It helps you notice what you enjoy, buy wine with more confidence, understand wine conversations, and maybe even sound cool when you want to.

Pick the closest answer, use Skip when you are unsure, and keep going. You are building a skill, not taking a test.

### Learning Ladder

**Level 1: Notice**  
For your first glass, just identify the color, choose a broad smell family, notice one taste or feel detail, and decide whether you liked it. That counts.

**Level 2: Describe**  
Next, build clearer notes using sweetness, acidity, body, tannin, finish, and simple aroma words.

**Level 3: Connect**  
Later, use your notes to compare wines, buy with more confidence, understand wine conversations, and maybe sound cool when you want to.

### Primary Action
**Start Now — Let’s Drink**

### Expandable Info

#### Philosophy
Wine can feel intimidating because the culture around it often sounds exclusive. But tasting wine is not about proving you know the right words. It is about learning to notice what you experience.

This guide uses direct description first: simple observations about look, smell, taste, and feel. Fancy language can come later if you want it.

The goal is confidence, enjoyment, and better appreciation — one glass at a time.

#### Wine Tasting Overview
This guide walks through five simple moves:

1. **Look** — notice the color.
2. **Smell** — choose the broad aroma family.
3. **Taste** — notice sweetness and acidity.
4. **Feel** — notice body, tannin, and finish.
5. **Reflect** — decide what you thought and what you learned.

The early steps are intentionally easy. Later steps include Skip because taste and feel take practice. You are still learning even when you skip.

---

## 9.2 Look

### Lesson Note

**Do this:** Hold the glass over a light background and look at the color.

**Why it matters:** Color is the easiest first clue. It helps you start describing the wine before you smell or taste it.

**Good enough answer:** Red, white, or rosé is enough for Level 1.

### Your Tasting Note

What color is the wine?

- Red
- White
- Rosé

### Success Message

Nice — you just described wine.

Seriously. That counts. You made a direct observation, and direct observations are the foundation of real tasting.

### Optional Note

What do you notice about the color or appearance?

---

## 9.3 Smell

### Lesson Note

**Do this:** Swirl the glass, then take two or three slow sniffs.

**Why it matters:** Smell is a huge part of tasting. Much of what we think of as flavor actually comes from aroma, so smelling the wine helps you notice more before you sip.

**Good enough answer:** You do not need the perfect aroma word. Fruit, floral, herbal, earthy, spicy, or other is enough for Level 1.

### Your Tasting Note

What broad smell family stands out most?

- Fruit
- Floral
- Herbal
- Earthy
- Spicy
- Other

### Success Message

Nice — now you are building aroma vocabulary.

You do not need to name the exact fruit, flower, or spice yet. Picking the broad family is the skill.

### Optional Note

What does it remind you of?

### Expandable Help

#### Why swirl?

Swirling is not just for looking fancy. It spreads the wine across the glass, which helps more aroma rise up so you can smell it.

You do not need a dramatic restaurant swirl. A gentle swirl is enough.

Or be dramatic and be fancy. Have fun, you are drinking wine.

#### Help me choose an aroma family

Start broad. You are not trying to identify the exact smell yet.

- **Fruit:** berries, citrus, apple, peach, plum, tropical fruit
- **Floral:** flowers, perfume, rose, violet, honeysuckle
- **Herbal:** grass, mint, tea, green pepper, fresh herbs
- **Earthy:** soil, mushroom, leaves, wet stone, forest floor
- **Spicy:** pepper, cinnamon, clove, vanilla, baking spice
- **Other:** anything that does not fit, or anything you are unsure about

---

## 9.4 Taste

### Lesson Note

**Do this:** Take a sip and let it sit for a few seconds before judging.

**Why it matters:** Taste starts with two simple questions: does it taste dry or sweet, and how tangy does it feel? These are direct observations, not fancy guesses.

**Good enough answer:** If you are unsure, pick the closest answer or use Skip. You are still learning.

### Your Tasting Note

#### Sweetness

Does it taste dry or sweet?

- Dry
- Off-dry
- Sweet
- Skip

#### Acidity

How tangy does it feel?

- Low
- Medium
- High
- Skip

### Success Message

Nice — now you are describing taste.

Dryness and acidity are two of the most useful wine clues. Even a rough guess helps you understand what you like.

### Optional Note

What simple taste impression stands out?

### Expandable Help

#### Help me choose dryness

Dry means the wine does **not** taste sweet. Most table wines are dry, even when they smell fruity.

A helpful shortcut: most red wines are dry. If you are tasting a red wine and it does not taste sugary, Dry is usually a safe starting choice.

For white and rosé wines, sweetness varies more. Many are still dry, but some may taste a little sweet or noticeably sweet. If it tastes slightly sweet but not sugary, choose Off-dry. If it clearly tastes sugary, choose Sweet.

Fruity smell and sweet taste are not the same thing. A wine can smell like berries, citrus, apple, or peach and still taste dry.

If you are not sure, use Skip and keep going.

#### Help me choose acidity

Acidity is the tangy, mouthwatering feeling that makes wine feel bright or refreshing.

A useful shortcut:

- **Low acidity:** soft, smooth, and round. It does not make your mouth water much. Think of a mellow ripe pear or baked apple.
- **Medium acidity:** fresh and balanced. You notice some tang, but it does not dominate. Think of a crisp apple.
- **High acidity:** bright, sharp, and very mouthwatering. It makes your mouth water quickly. Think lemon juice, sour candy, or a tart green apple.

You are not trying to measure acid like a scientist. Just ask: does this feel soft, fresh, or sharply tangy?

---

## 9.5 Feel

### Lesson Note

**Do this:** Take another sip. Let it coat your mouth, then swallow and notice what lingers.

**Why it matters:** Feel is about texture and structure. Some wines feel light, some feel heavy, some feel drying, and some leave a longer impression after you swallow.

**Good enough answer:** Pick the closest answer or use Skip. Even noticing one part of the feel is a real tasting skill.

### Your Tasting Note

#### Body

How heavy does the wine feel?

- Light
- Medium
- Full
- Skip

#### Tannin

How drying does it feel?

- Low
- Medium
- High
- N/A
- Skip

#### Finish

How long does the impression last?

- Short
- Medium
- Long
- Skip

### Success Message

Nice — now you are noticing structure.

Body, tannin, and finish take practice. If you noticed even one of them, you are climbing the ladder.

### Optional Note

How did the wine feel in your mouth?

### Learning Tip

Try guessing first, then open the hints. That little loop — guess, check, adjust — is how this starts to stick.

Also, do not try to master body, tannin, and finish all at once. Pick one to focus on for a few tastings. Get comfortable with it, then add the next one.

Yes, this means drinking more wine for practice. Tragic.

### Expandable Help

#### Help me choose body

Body is the weight or texture of the wine in your mouth.

A useful shortcut:

- **Light body:** thin, crisp, easy, or watery. Think skim milk.
- **Medium body:** noticeable weight, but not heavy. Think whole milk or chocolate milk.
- **Full body:** rich, heavy, round, or mouth-coating. Think cream or a milkshake.

You are not judging quality. You are just noticing weight.

#### Help me choose tannin

Tannin is the drying or gripping feeling in your mouth. It is easiest to notice in red wines.

Many white and rosé wines will feel like N/A or low tannin. That is normal.

A useful shortcut:

- **Low tannin:** smooth, soft, little to no drying.
- **Medium tannin:** noticeable grip or dryness, but not harsh.
- **High tannin:** strong drying feeling on your gums, tongue, or cheeks.

Think of over-steeped black tea. That drying, grippy feeling is similar to tannin.

Use **N/A** if tannin does not really apply. Use **Skip** if you are unsure.

#### Help me choose finish

Finish is how long the wine’s flavor or feeling lasts after you swallow.

A useful shortcut:

- **Short finish:** fades quickly.
- **Medium finish:** lingers for a few seconds.
- **Long finish:** stays with you noticeably after swallowing.

You do not need to time it perfectly. Just ask: did it disappear quickly, linger a bit, or hang around?

---

## 9.6 Reflect

### Lesson Note

**Do this:** Pause and decide what you actually thought.

**Why it matters:** Technical notes help you learn, but wine is still about enjoyment. Your reaction matters too.

**Good enough answer:** Rate it, decide if you would buy it again, and write one plain sentence if you want.

### Quick Reaction

#### Rating

How much did you like it?

- 1 star
- 2 stars
- 3 stars
- 4 stars
- 5 stars

#### Buy Again?

Would you buy this wine again?

- Yes
- No
- Maybe

### Success Message

Nice — you completed a tasting.

You looked. You smelled. You enjoyed your wine while observing it. Maybe you even tasted and felt a few new things along the way.

Then you reflected and captured your thoughts.

And most importantly: you drank wine. Great job learning.

### Your Take

In plain words, what stood out?

### Guided Direct Note

Here is a simple direct note based on your choices.

This should be shown as a read-only card, not an editable textarea.

### Try Your Own Tasting Note

Want to practice? Rewrite the note in your own words.

This is optional. The goal is practice, not perfection.

### Learning Tip

Try comparing this wine to the next one you drink. Comparison is where the learning gets faster.

You do not need to remember everything. Just notice one thing that was different.

---

## 10. Guided Direct Note Logic

### Purpose
The generated note should teach direct description, not perform polished wine marketing copy.

### Rules
- Include Look and Smell selections when available.
- Include Taste and Feel selections only if not marked Skip.
- Omit skipped fields cleanly.
- Do not display the word “Skip.”
- Keep language concise and direct.
- Use plain structure before flourish.
- Optional tasting notes may be incorporated only if they improve clarity.

### Positioning
The generated note should feel like:
- a helpful scaffold,
- a worked example,
- not the final “official” note.

---

## 11. Data Model Direction

Prototype 02 should move toward this structure:

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
    acidity: "",
    note: ""
  },
  feel: {
    body: "",
    tannin: "",
    finish: "",
    note: ""
  },
  reflect: {
    stars: "",
    buyAgain: "",
    userTake: "",
    guidedDirectNote: "",
    userTastingNote: ""
  }
};
```

### Notes
- This updates the Prototype 01 field arrangement.
- “review” is renamed conceptually to “reflect.”
- The final generated note should align with direct-description teaching.

---

## 12. Suggested Lesson Content Storage

To better separate content from code, Prototype 02 should consider storing lesson text in a dedicated content object.

Example direction:

```javascript
const lessonContent = {
  welcome: "...",
  look: "...",
  smell: "...",
  taste: "...",
  feel: "...",
  reflect: "..."
};
```

This keeps authored lesson notes easier to revise without changing business logic.

This does not require a full architectural overhaul, but it is a useful content-design improvement.

---

## 13. Screen Structure

The app remains a single-page flow.

### Recommended Layout Per Step
- title
- short step subtitle if needed
- Lesson Note card
- Your Tasting Note section
- structured inputs
- optional note field
- success message after required selection
- optional expandable help where needed
- navigation controls

### Reflect Step Layout
The Reflect step should include four visually distinct sections:
1. Quick Reaction
2. Your Take
3. Guided Direct Note
4. Try Your Own Tasting Note

This should feel cleaner and easier to scan than Prototype 01.

---

## 14. Technical Boundaries

Version 2 should remain intentionally constrained.

### Included
- single-page app
- HTML, CSS, JavaScript
- instructional content additions
- updated step structure
- final-step redesign
- modest UX improvements

### Excluded
- backend
- database
- authentication
- account system
- mobile packaging
- major architecture refactor
- production-grade design system

---

## 15. Day 3 Locked Redesign Decisions

The following Prototype 02 redesign decisions are locked:

- rename **Final Note** to **Reflect**
- separate each step into **Lesson Note** + **Your Tasting Note**
- add the **Learning Ladder**
- add the **Learning Experience Model**
- change **Taste** to **Dryness + Acidity**
- change **Feel** to **Body + Tannin + Finish**
- add success messages to reinforce learning
- add expandable help where the user needs more context
- redesign the final step into:
  - Quick Reaction
  - Your Take
  - Guided Direct Note
  - Try Your Own Tasting Note

These decisions should guide the implementation work for Days 4 and 5.

---

## 16. Revision Rule

This file is the source of truth for Prototype 02 app behavior and content structure during the sprint.

If the step logic, lesson-note strategy, or final-step design changes during the sprint, this spec should be updated to match.
