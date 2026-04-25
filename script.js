// script.js
// Prototype 02 — Guided Beginner Wine Tutorial

// -----------------------------
// App state
// -----------------------------

const steps = [
  "Welcome",
  "Look",
  "Smell",
  "Taste",
  "Feel",
  "Reflect"
];

let currentStepIndex = 0;

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

// -----------------------------
// DOM references
// -----------------------------

const progressText = document.getElementById("progress-text");
const progressFill = document.getElementById("progress-fill");
const stepTitle = document.getElementById("step-title");
const stepContent = document.getElementById("step-content");
const backButton = document.getElementById("back-button");
const nextButton = document.getElementById("next-button");

// -----------------------------
// Small rendering helpers
// -----------------------------

function createLessonNote(doThis, whyItMatters, goodEnough) {
  return `
    <section class="lesson-card">
      <h3>Lesson Note</h3>
      <p><strong>Do this:</strong> ${doThis}</p>
      <p><strong>Why it matters:</strong> ${whyItMatters}</p>
      <p><strong>Good enough answer:</strong> ${goodEnough}</p>
    </section>
  `;
}

function createSuccessMessage(title, message) {
  return `
    <section class="success-message">
      <p><strong>${title}</strong></p>
      <p>${message}</p>
    </section>
  `;
}

function createDetails(summary, content) {
  return `
    <details class="help-details">
      <summary>${summary}</summary>
      <div class="help-content">
        ${content}
      </div>
    </details>
  `;
}

function createSelect(id, options, selectedValue) {
  const optionMarkup = options
    .map(option => {
      const selected = selectedValue === option ? "selected" : "";
      return `<option value="${option}" ${selected}>${option}</option>`;
    })
    .join("");

  return `
    <select id="${id}">
      <option value="">Select one</option>
      ${optionMarkup}
    </select>
  `;
}

// -----------------------------
// Progress and navigation
// -----------------------------

function updateProgress() {
  progressText.textContent = `Step ${currentStepIndex + 1} of ${steps.length}`;
  const progressPercent = ((currentStepIndex + 1) / steps.length) * 100;
  progressFill.style.width = `${progressPercent}%`;
}

function updateNavigation() {
  backButton.disabled = currentStepIndex === 0;

  if (steps[currentStepIndex] === "Welcome") {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "inline-block";
    nextButton.textContent = currentStepIndex === steps.length - 1 ? "Finish" : "Next";
  }
}

// -----------------------------
// Guided note generation
// -----------------------------

function valueIsUsable(value) {
  return value && value !== "Skip";
}

function generateGuidedDirectNote() {
  const parts = [];

  if (tastingData.look.color) {
    parts.push(`This is a ${tastingData.look.color.toLowerCase()} wine`);
  }

  if (tastingData.smell.aroma) {
    parts.push(`with ${tastingData.smell.aroma.toLowerCase()} aromas`);
  }

  if (valueIsUsable(tastingData.taste.dryness)) {
    parts.push(`that tastes ${tastingData.taste.dryness.toLowerCase()}`);
  }

  if (valueIsUsable(tastingData.taste.acidity)) {
    parts.push(`with ${tastingData.taste.acidity.toLowerCase()} acidity`);
  }

  if (valueIsUsable(tastingData.feel.body)) {
    parts.push(`a ${tastingData.feel.body.toLowerCase()} body`);
  }

  if (valueIsUsable(tastingData.feel.tannin) && tastingData.feel.tannin !== "N/A") {
    parts.push(`${tastingData.feel.tannin.toLowerCase()} tannin`);
  }

  if (valueIsUsable(tastingData.feel.finish)) {
    parts.push(`and a ${tastingData.feel.finish.toLowerCase()} finish`);
  }

  const comments = [
    tastingData.look.note,
    tastingData.smell.note,
    tastingData.taste.note,
    tastingData.feel.note
  ].filter(note => note && note.trim() !== "");

  let noteText = parts.length > 0
    ? `${parts.join(", ")}.`
    : "No guided direct note is available yet.";

  if (comments.length > 0) {
    noteText += ` Your notes: ${comments.join(" ")}`;
  }

  tastingData.reflect.guidedDirectNote = noteText;
  return noteText;
}

// -----------------------------
// Step markup
// -----------------------------

function getStepMarkup(stepName) {
  switch (stepName) {
    case "Welcome":
      return `
        <section class="welcome-copy">
          <h2>Wine Tasting, Without the Snobbery</h2>
          <p class="big-intro">Grab a glass. We’ll keep this simple.</p>

          <p>
            Most wine language sounds fancy because people often use poetic descriptions.
            You do not need that to start.
          </p>

          <p>
            Beginner tasting starts with direct observations: is it red, white, or rosé?
            Does it smell fruity, floral, earthy, herbal, or spicy? That is already real wine tasting.
          </p>

          <p>
            Understanding the wine you drink makes it more fun. It helps you notice what you enjoy,
            buy wine with more confidence, understand wine conversations, and maybe even sound cool
            when you want to.
          </p>

          <p>
            Pick the closest answer, use Skip when you are unsure, and keep going.
            You are building a skill, not taking a test.
          </p>
        </section>

        <section class="learning-ladder">
          <h3>The Learning Ladder</h3>

          <div class="ladder-step">
            <h4>Level 1: Notice</h4>
            <p>
              For your first glass, just identify the color, choose a broad smell family,
              notice one taste or feel detail, and decide whether you liked it. That counts.
            </p>
          </div>

          <div class="ladder-step">
            <h4>Level 2: Describe</h4>
            <p>
              Next, build clearer notes using sweetness, acidity, body, tannin, finish,
              and simple aroma words.
            </p>
          </div>

          <div class="ladder-step">
            <h4>Level 3: Connect</h4>
            <p>
              Later, use your notes to compare wines, buy with more confidence,
              understand wine conversations, and maybe sound cool when you want to.
            </p>
          </div>
        </section>

        <button id="begin-button" class="primary-button" type="button">
          Start Now — Let’s Drink
        </button>

        <section class="help-stack">
          ${createDetails("Philosophy", `
            <p>
              Wine can feel intimidating because the culture around it often sounds exclusive.
              But tasting wine is not about proving you know the right words.
              It is about learning to notice what you experience.
            </p>
            <p>
              This guide uses direct description first: simple observations about look,
              smell, taste, and feel. Fancy language can come later if you want it.
            </p>
            <p>
              The goal is confidence, enjoyment, and better appreciation — one glass at a time.
            </p>
          `)}

          ${createDetails("Wine Tasting Overview", `
            <p>This guide walks through five simple moves:</p>
            <ol>
              <li><strong>Look</strong> — notice the color.</li>
              <li><strong>Smell</strong> — choose the broad aroma family.</li>
              <li><strong>Taste</strong> — notice sweetness and acidity.</li>
              <li><strong>Feel</strong> — notice body, tannin, and finish.</li>
              <li><strong>Reflect</strong> — decide what you thought and what you learned.</li>
            </ol>
            <p>
              The early steps are intentionally easy. Later steps include Skip because taste
              and feel take practice. You are still learning even when you skip.
            </p>
          `)}
        </section>
      `;

    case "Look":
      return `
        ${createLessonNote(
          "Hold the glass over a light background and look at the color.",
          "Color is the easiest first clue. It helps you start describing the wine before you smell or taste it.",
          "Red, white, or rosé is enough for Level 1."
        )}

        <section class="input-card">
          <h3>Your Tasting Note</h3>

          <label for="look-color">What color is the wine?</label>
          ${createSelect("look-color", ["Red", "White", "Rosé"], tastingData.look.color)}

          ${tastingData.look.color ? createSuccessMessage(
            "Nice — you just described wine.",
            "Seriously. That counts. You made a direct observation, and direct observations are the foundation of real tasting."
          ) : ""}

          <label for="look-note">What do you notice about the color or appearance?</label>
          <textarea id="look-note" rows="4" placeholder="Optional">${tastingData.look.note}</textarea>
        </section>
      `;

    case "Smell":
      return `
        ${createLessonNote(
          "Swirl the glass, then take two or three slow sniffs.",
          "Smell is a huge part of tasting. Much of what we think of as flavor actually comes from aroma, so smelling the wine helps you notice more before you sip.",
          "You do not need the perfect aroma word. Fruit, floral, herbal, earthy, spicy, or other is enough for Level 1."
        )}

        <section class="input-card">
          <h3>Your Tasting Note</h3>

          <label for="smell-aroma">What broad smell family stands out most?</label>
          ${createSelect("smell-aroma", ["Fruit", "Floral", "Herbal", "Earthy", "Spicy", "Other"], tastingData.smell.aroma)}

          ${tastingData.smell.aroma ? createSuccessMessage(
            "Nice — now you are building aroma vocabulary.",
            "You do not need to name the exact fruit, flower, or spice yet. Picking the broad family is the skill."
          ) : ""}

          <label for="smell-note">What does it remind you of?</label>
          <textarea id="smell-note" rows="4" placeholder="Optional">${tastingData.smell.note}</textarea>
        </section>

        <section class="help-stack">
          ${createDetails("Why swirl?", `
            <p>
              Swirling is not just for looking fancy. It spreads the wine across the glass,
              which helps more aroma rise up so you can smell it.
            </p>
            <p>
              You do not need a dramatic restaurant swirl. A gentle swirl is enough.
            </p>
            <p>
              Or be dramatic and be fancy. Have fun, you are drinking wine.
            </p>
          `)}

          ${createDetails("Help me choose an aroma family", `
            <p>Start broad. You are not trying to identify the exact smell yet.</p>
            <ul>
              <li><strong>Fruit:</strong> berries, citrus, apple, peach, plum, tropical fruit</li>
              <li><strong>Floral:</strong> flowers, perfume, rose, violet, honeysuckle</li>
              <li><strong>Herbal:</strong> grass, mint, tea, green pepper, fresh herbs</li>
              <li><strong>Earthy:</strong> soil, mushroom, leaves, wet stone, forest floor</li>
              <li><strong>Spicy:</strong> pepper, cinnamon, clove, vanilla, baking spice</li>
              <li><strong>Other:</strong> anything that does not fit, or anything you are unsure about</li>
            </ul>
          `)}
        </section>
      `;

    case "Taste":
      return `
        ${createLessonNote(
          "Take a sip and let it sit for a few seconds before judging.",
          "Taste starts with two simple questions: does it taste dry or sweet, and how tangy does it feel? These are direct observations, not fancy guesses.",
          "If you are unsure, pick the closest answer or use Skip. You are still learning."
        )}

        <section class="input-card">
          <h3>Your Tasting Note</h3>

          <label for="taste-dryness">Does it taste dry or sweet?</label>
          ${createSelect("taste-dryness", ["Dry", "Off-dry", "Sweet", "Skip"], tastingData.taste.dryness)}

          <label for="taste-acidity">How tangy does it feel?</label>
          ${createSelect("taste-acidity", ["Low", "Medium", "High", "Skip"], tastingData.taste.acidity)}

          ${(tastingData.taste.dryness && tastingData.taste.acidity) ? createSuccessMessage(
            "Nice — now you are describing taste.",
            "Dryness and acidity are two of the most useful wine clues. Even a rough guess helps you understand what you like."
          ) : ""}

          <label for="taste-note">What simple taste impression stands out?</label>
          <textarea id="taste-note" rows="4" placeholder="Optional">${tastingData.taste.note}</textarea>
        </section>

        <section class="help-stack">
          ${createDetails("Help me choose dryness", `
            <p>
              Dry means the wine does <strong>not</strong> taste sweet.
              Most table wines are dry, even when they smell fruity.
            </p>
            <p>
              A helpful shortcut: most red wines are dry. If you are tasting a red wine
              and it does not taste sugary, Dry is usually a safe starting choice.
            </p>
            <p>
              For white and rosé wines, sweetness varies more. Many are still dry,
              but some may taste a little sweet or noticeably sweet. If it tastes slightly
              sweet but not sugary, choose Off-dry. If it clearly tastes sugary, choose Sweet.
            </p>
            <p>
              Fruity smell and sweet taste are not the same thing. A wine can smell like
              berries, citrus, apple, or peach and still taste dry.
            </p>
            <p>If you are not sure, use Skip and keep going.</p>
          `)}

          ${createDetails("Help me choose acidity", `
            <p>
              Acidity is the tangy, mouthwatering feeling that makes wine feel bright or refreshing.
            </p>
            <ul>
              <li><strong>Low acidity:</strong> soft, smooth, and round. It does not make your mouth water much. Think of a mellow ripe pear or baked apple.</li>
              <li><strong>Medium acidity:</strong> fresh and balanced. You notice some tang, but it does not dominate. Think of a crisp apple.</li>
              <li><strong>High acidity:</strong> bright, sharp, and very mouthwatering. It makes your mouth water quickly. Think lemon juice, sour candy, or a tart green apple.</li>
            </ul>
            <p>
              You are not trying to measure acid like a scientist. Just ask:
              does this feel soft, fresh, or sharply tangy?
            </p>
          `)}
        </section>
      `;

    case "Feel":
      return `
        ${createLessonNote(
          "Take another sip. Let it coat your mouth, then swallow and notice what lingers.",
          "Feel is about texture and structure. Some wines feel light, some feel heavy, some feel drying, and some leave a longer impression after you swallow.",
          "Pick the closest answer or use Skip. Even noticing one part of the feel is a real tasting skill."
        )}

        <section class="input-card">
          <h3>Your Tasting Note</h3>

          <label for="feel-body">How heavy does the wine feel?</label>
          ${createSelect("feel-body", ["Light", "Medium", "Full", "Skip"], tastingData.feel.body)}

          <label for="feel-tannin">How drying does it feel?</label>
          ${createSelect("feel-tannin", ["Low", "Medium", "High", "N/A", "Skip"], tastingData.feel.tannin)}

          <label for="feel-finish">How long does the impression last?</label>
          ${createSelect("feel-finish", ["Short", "Medium", "Long", "Skip"], tastingData.feel.finish)}

          ${(tastingData.feel.body && tastingData.feel.tannin && tastingData.feel.finish) ? createSuccessMessage(
            "Nice — now you are noticing structure.",
            "Body, tannin, and finish take practice. If you noticed even one of them, you are climbing the ladder."
          ) : ""}

          <label for="feel-note">How did the wine feel in your mouth?</label>
          <textarea id="feel-note" rows="4" placeholder="Optional">${tastingData.feel.note}</textarea>
        </section>

        <section class="learning-tip">
          <h3>Learning Tip</h3>
          <p>
            Try guessing first, then open the hints. That little loop — guess, check, adjust —
            is how this starts to stick.
          </p>
          <p>
            Also, do not try to master body, tannin, and finish all at once.
            Pick one to focus on for a few tastings. Get comfortable with it, then add the next one.
          </p>
          <p>Yes, this means drinking more wine for practice. Tragic.</p>
        </section>

        <section class="help-stack">
          ${createDetails("Help me choose body", `
            <p>Body is the weight or texture of the wine in your mouth.</p>
            <ul>
              <li><strong>Light body:</strong> thin, crisp, easy, or watery. Think skim milk.</li>
              <li><strong>Medium body:</strong> noticeable weight, but not heavy. Think whole milk or chocolate milk.</li>
              <li><strong>Full body:</strong> rich, heavy, round, or mouth-coating. Think cream or a milkshake.</li>
            </ul>
            <p>You are not judging quality. You are just noticing weight.</p>
          `)}

          ${createDetails("Help me choose tannin", `
            <p>
              Tannin is the drying or gripping feeling in your mouth. It is easiest to notice in red wines.
            </p>
            <p>Many white and rosé wines will feel like N/A or low tannin. That is normal.</p>
            <ul>
              <li><strong>Low tannin:</strong> smooth, soft, little to no drying.</li>
              <li><strong>Medium tannin:</strong> noticeable grip or dryness, but not harsh.</li>
              <li><strong>High tannin:</strong> strong drying feeling on your gums, tongue, or cheeks.</li>
            </ul>
            <p>Think of over-steeped black tea. That drying, grippy feeling is similar to tannin.</p>
            <p>Use <strong>N/A</strong> if tannin does not really apply. Use <strong>Skip</strong> if you are unsure.</p>
          `)}

          ${createDetails("Help me choose finish", `
            <p>Finish is how long the wine’s flavor or feeling lasts after you swallow.</p>
            <ul>
              <li><strong>Short finish:</strong> fades quickly.</li>
              <li><strong>Medium finish:</strong> lingers for a few seconds.</li>
              <li><strong>Long finish:</strong> stays with you noticeably after swallowing.</li>
            </ul>
            <p>
              You do not need to time it perfectly. Just ask:
              did it disappear quickly, linger a bit, or hang around?
            </p>
          `)}
        </section>
      `;

    case "Reflect":
      const guidedDirectNote = generateGuidedDirectNote();

      return `
        ${createLessonNote(
          "Pause and decide what you actually thought.",
          "Technical notes help you learn, but wine is still about enjoyment. Your reaction matters too.",
          "Rate it, decide if you would buy it again, and write one plain sentence if you want."
        )}

        <section class="input-card">
          <h3>Quick Reaction</h3>

          <label for="reflect-stars">How much did you like it?</label>
          ${createSelect("reflect-stars", ["1 star", "2 stars", "3 stars", "4 stars", "5 stars"], tastingData.reflect.stars)}

          <label for="reflect-buy-again">Would you buy this wine again?</label>
          ${createSelect("reflect-buy-again", ["Yes", "No", "Maybe"], tastingData.reflect.buyAgain)}

          ${(tastingData.reflect.stars && tastingData.reflect.buyAgain) ? createSuccessMessage(
            "Nice — you completed a tasting.",
            "You looked. You smelled. You enjoyed your wine while observing it. Maybe you even tasted and felt a few new things along the way. Then you reflected and captured your thoughts. And most importantly: you drank wine. Great job learning."
          ) : ""}
        </section>

        <section class="input-card">
          <h3>Your Take</h3>
          <label for="reflect-user-take">In plain words, what stood out?</label>
          <textarea id="reflect-user-take" rows="4" placeholder="Example: Bright and fruity. I liked it more than expected.">${tastingData.reflect.userTake}</textarea>
        </section>

        <section class="generated-note-card">
          <h3>Guided Direct Note</h3>
          <p>Here is a simple direct note based on your choices.</p>
          <div class="generated-note-text">${guidedDirectNote}</div>
        </section>

        <section class="input-card">
          <h3>Try Your Own Tasting Note</h3>
          <p>This is optional. The goal is practice, not perfection.</p>
          <label for="reflect-user-tasting-note">Want to practice? Rewrite the note in your own words.</label>
          <textarea id="reflect-user-tasting-note" rows="5" placeholder="Optional">${tastingData.reflect.userTastingNote}</textarea>
        </section>

        <section class="learning-tip">
          <h3>Learning Tip</h3>
          <p>
            Try comparing this wine to the next one you drink.
            Comparison is where the learning gets faster.
          </p>
          <p>
            You do not need to remember everything. Just notice one thing that was different.
          </p>
        </section>
      `;

    default:
      return `<p>Unknown step.</p>`;
  }
}

// -----------------------------
// Save and validation
// -----------------------------

function saveCurrentStepData() {
  const currentStepName = steps[currentStepIndex];

  if (currentStepName === "Look") {
    const colorSelect = document.getElementById("look-color");
    const noteField = document.getElementById("look-note");

    tastingData.look.color = colorSelect ? colorSelect.value : "";
    tastingData.look.note = noteField ? noteField.value.trim() : "";
  }

  if (currentStepName === "Smell") {
    const aromaSelect = document.getElementById("smell-aroma");
    const noteField = document.getElementById("smell-note");

    tastingData.smell.aroma = aromaSelect ? aromaSelect.value : "";
    tastingData.smell.note = noteField ? noteField.value.trim() : "";
  }

  if (currentStepName === "Taste") {
    const drynessSelect = document.getElementById("taste-dryness");
    const aciditySelect = document.getElementById("taste-acidity");
    const noteField = document.getElementById("taste-note");

    tastingData.taste.dryness = drynessSelect ? drynessSelect.value : "";
    tastingData.taste.acidity = aciditySelect ? aciditySelect.value : "";
    tastingData.taste.note = noteField ? noteField.value.trim() : "";
  }

  if (currentStepName === "Feel") {
    const bodySelect = document.getElementById("feel-body");
    const tanninSelect = document.getElementById("feel-tannin");
    const finishSelect = document.getElementById("feel-finish");
    const noteField = document.getElementById("feel-note");

    tastingData.feel.body = bodySelect ? bodySelect.value : "";
    tastingData.feel.tannin = tanninSelect ? tanninSelect.value : "";
    tastingData.feel.finish = finishSelect ? finishSelect.value : "";
    tastingData.feel.note = noteField ? noteField.value.trim() : "";
  }

  if (currentStepName === "Reflect") {
    const starsSelect = document.getElementById("reflect-stars");
    const buyAgainSelect = document.getElementById("reflect-buy-again");
    const userTakeField = document.getElementById("reflect-user-take");
    const userTastingNoteField = document.getElementById("reflect-user-tasting-note");

    tastingData.reflect.stars = starsSelect ? starsSelect.value : "";
    tastingData.reflect.buyAgain = buyAgainSelect ? buyAgainSelect.value : "";
    tastingData.reflect.userTake = userTakeField ? userTakeField.value.trim() : "";
    tastingData.reflect.userTastingNote = userTastingNoteField ? userTastingNoteField.value.trim() : "";
    tastingData.reflect.guidedDirectNote = generateGuidedDirectNote();
  }
}

function validateCurrentStep() {
  const currentStepName = steps[currentStepIndex];

  if (currentStepName === "Look") {
    return tastingData.look.color !== "";
  }

  if (currentStepName === "Smell") {
    return tastingData.smell.aroma !== "";
  }

  if (currentStepName === "Taste") {
    return tastingData.taste.dryness !== "" && tastingData.taste.acidity !== "";
  }

  if (currentStepName === "Feel") {
    return (
      tastingData.feel.body !== "" &&
      tastingData.feel.tannin !== "" &&
      tastingData.feel.finish !== ""
    );
  }

  if (currentStepName === "Reflect") {
    return tastingData.reflect.stars !== "" && tastingData.reflect.buyAgain !== "";
  }

  return true;
}

// -----------------------------
// Render and event attachment
// -----------------------------

function attachStepEvents() {
  if (steps[currentStepIndex] === "Welcome") {
    const beginButton = document.getElementById("begin-button");
    if (beginButton) {
      beginButton.addEventListener("click", () => {
        currentStepIndex = 1;
        renderStep();
      });
    }
  }

  const selects = stepContent.querySelectorAll("select");
  selects.forEach(select => {
    select.addEventListener("change", () => {
      saveCurrentStepData();
      renderStep();
    });
  });

  const textareas = stepContent.querySelectorAll("textarea");
  textareas.forEach(textarea => {
    textarea.addEventListener("input", () => {
      saveCurrentStepData();
    });
  });
}

function renderStep() {
  const currentStepName = steps[currentStepIndex];

  stepTitle.textContent = currentStepName;
  stepContent.innerHTML = getStepMarkup(currentStepName);

  updateProgress();
  updateNavigation();
  attachStepEvents();
}

// -----------------------------
// Navigation events
// -----------------------------

backButton.addEventListener("click", () => {
  saveCurrentStepData();

  if (currentStepIndex > 0) {
    currentStepIndex -= 1;
    renderStep();
  }
});

nextButton.addEventListener("click", () => {
  saveCurrentStepData();

  if (!validateCurrentStep()) {
    alert("Please make a selection before continuing.");
    return;
  }

  if (currentStepIndex < steps.length - 1) {
    currentStepIndex += 1;
    renderStep();
  } else {
    alert("Nice work — tasting complete.");
  }
});

// -----------------------------
// Initial render
// -----------------------------

renderStep();

console.log("Prototype 02 Wine Tutorial App loaded.");
console.log("Initial tasting data:", tastingData);
