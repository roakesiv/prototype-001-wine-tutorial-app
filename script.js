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
  return `<section class="lesson-card"><h3>Lesson Note</h3><p class="do-this">${doThis}</p><p class="reassurance">${goodEnough}</p>${createDetails("Why this matters", `<p>${whyItMatters}</p>`)}</section>`;
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

const questions = {"look-color":"What color is your wine?","smell-aroma":"What does it smell like?","taste-dryness":"Does it taste dry or sweet?","taste-acidity":"How tangy does it feel?","feel-body":"How heavy does it feel?","feel-tannin":"How drying does it feel?","feel-finish":"How long does it linger?","reflect-stars":"How much did you like it?","reflect-buy-again":"Would you buy it again?"};
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}
function createChoices(id, options, selectedValue) {
  return `<fieldset id="${id}" class="choice-field"><legend>${questions[id]}</legend><div class="choices">${options.map(option => `<label class="choice" data-value="${option}"><input type="radio" name="${id}" value="${option}" ${selectedValue === option ? 'checked' : ''} required><span>${option === 'Skip' ? 'Skip · unsure' : option}</span></label>`).join('')}</div></fieldset>`;
}
function readChoice(field) { return field.querySelector('input:checked')?.value || ''; }

// -----------------------------
// Progress and navigation
// -----------------------------

function updateProgress() {
  progressText.textContent = `Step ${currentStepIndex + 1} of ${steps.length} · ${steps[currentStepIndex]}`;
  document.getElementById('step-trail').innerHTML = steps.map((step, index) => `<li ${index === currentStepIndex ? 'aria-current="step"' : ''} class="${index < currentStepIndex ? 'done' : ''}"><span>${index < currentStepIndex ? '✓' : index + 1}</span>${step}</li>`).join('');
  const progressPercent = ((currentStepIndex + 1) / steps.length) * 100;
  progressFill.style.width = `${progressPercent}%`;
}

function updateNavigation() {
  backButton.hidden = currentStepIndex === 0;

  if (steps[currentStepIndex] === "Welcome") {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "inline-block";
    nextButton.textContent = currentStepIndex === steps.length - 1 ? "Finish tasting ✓" : `Next · ${steps[currentStepIndex + 1]} →`;
  }
}

// -----------------------------
// Guided note generation
// -----------------------------

function valueIsUsable(value) {
  return value && value !== "Skip";
}

function generateGuidedDirectNote() {
  const descriptions = [];
  const { look, smell, taste, feel } = tastingData;
  if (look.color) descriptions.push(`This is a ${look.color.toLowerCase()} wine${smell.aroma ? ` with ${smell.aroma.toLowerCase()} aromas` : ''}.`);
  else if (smell.aroma) descriptions.push(`I notice ${smell.aroma.toLowerCase()} aromas.`);
  const tasteDetails = [];
  if (valueIsUsable(taste.dryness)) tasteDetails.push(`It tastes ${taste.dryness.toLowerCase()}`);
  if (valueIsUsable(taste.acidity)) tasteDetails.push(`${taste.acidity.toLowerCase()} acidity`);
  if (tasteDetails.length) descriptions.push(`${tasteDetails.join(' with ').replace(/^(low|medium|high) acidity$/, 'It has $1 acidity')}.`);
  const feelDetails = [];
  if (valueIsUsable(feel.body)) feelDetails.push(`a ${feel.body.toLowerCase()} body`);
  if (valueIsUsable(feel.tannin) && feel.tannin !== 'N/A') feelDetails.push(`${feel.tannin.toLowerCase()} tannin`);
  if (valueIsUsable(feel.finish)) feelDetails.push(`a ${feel.finish.toLowerCase()} finish`);
  if (feelDetails.length) descriptions.push(`It has ${feelDetails.length > 1 ? feelDetails.slice(0, -1).join(', ') + ' and ' : ''}${feelDetails.at(-1)}.`);
  const userNotes = [look.note, smell.note, taste.note, feel.note].filter(note => note.trim());
  if (userNotes.length) descriptions.push(`Your notes: ${userNotes.join(' ')}`);
  tastingData.reflect.guidedDirectNote = descriptions.join(' ') || 'Your observations will appear here.';
  return tastingData.reflect.guidedDirectNote;
}

// -----------------------------
// Step markup
// -----------------------------

function getStepMarkup(stepName) {
  switch (stepName) {
    case "Welcome":
      return `
        <section class="welcome-copy">
          <div class="glass-art" aria-hidden="true"><svg viewBox="0 0 180 210"><path d="M48 20h84l8 64c4 30-17 51-50 51S36 114 40 84z" fill="#fff8ed" stroke="currentColor" stroke-width="3"/><path d="M43 72q47 17 94 0l3 12c4 30-17 51-50 51S36 114 40 84z" fill="#963e59"/><path d="M90 135v52m-29 4h58" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><path d="m149 23 4 11 11 4-11 4-4 11-4-11-11-4 11-4z" fill="#bb873e"/></svg></div>
          <p class="eyebrow">A little curiosity. A glass of wine.</p>
          <h2>Wine tasting,<br>without the snobbery.</h2>
          <p>Look, sniff, sip. Discover what you enjoy, one simple observation at a time.</p>
          <p class="reassurance">No perfect words needed. Your closest guess counts.</p>
        </section>
        <button id="begin-button" class="primary-button" type="button">Let’s taste →</button>
        ${createDetails("Your learning ladder", '<p><strong>1 · Notice.</strong> A color, an aroma, one detail. That counts.</p><p><strong>2 · Describe.</strong> Build simple words for taste and feel.</p><p><strong>3 · Connect.</strong> Compare glasses and discover what you enjoy.</p>')}
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

          ${createChoices("look-color", ["Red", "White", "Rosé"], tastingData.look.color)}

          <label for="look-note">What do you notice about the color or appearance?</label>
          <textarea id="look-note" rows="4" placeholder="Optional">${escapeHTML(tastingData.look.note)}</textarea>
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

          ${createChoices("smell-aroma", ["Fruit", "Floral", "Herbal", "Earthy", "Spicy", "Other"], tastingData.smell.aroma)}

          <label for="smell-note">What does it remind you of?</label>
          <textarea id="smell-note" rows="4" placeholder="Optional">${escapeHTML(tastingData.smell.note)}</textarea>
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

          ${createChoices("taste-dryness", ["Dry", "Off-dry", "Sweet", "Skip"], tastingData.taste.dryness)}

          ${createChoices("taste-acidity", ["Low", "Medium", "High", "Skip"], tastingData.taste.acidity)}

          <label for="taste-note">What simple taste impression stands out?</label>
          <textarea id="taste-note" rows="4" placeholder="Optional">${escapeHTML(tastingData.taste.note)}</textarea>
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

          ${createChoices("feel-body", ["Light", "Medium", "Full", "Skip"], tastingData.feel.body)}

          ${createChoices("feel-tannin", ["Low", "Medium", "High", "N/A", "Skip"], tastingData.feel.tannin)}

          ${createChoices("feel-finish", ["Short", "Medium", "Long", "Skip"], tastingData.feel.finish)}

          <label for="feel-note">How did the wine feel in your mouth?</label>
          <textarea id="feel-note" rows="4" placeholder="Optional">${escapeHTML(tastingData.feel.note)}</textarea>
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

          ${createChoices("reflect-stars", ["1 star", "2 stars", "3 stars", "4 stars", "5 stars"], tastingData.reflect.stars)}

          ${createChoices("reflect-buy-again", ["Yes", "No", "Maybe"], tastingData.reflect.buyAgain)}

                  </section>

        <section class="input-card">
          <h3>Your Take</h3>
          <label for="reflect-user-take">In plain words, what stood out?</label>
          <textarea id="reflect-user-take" rows="4" placeholder="Example: Bright and fruity. I liked it more than expected.">${escapeHTML(tastingData.reflect.userTake)}</textarea>
        </section>

        <section class="generated-note-card">
          <h3>Guided Direct Note</h3>
          <p>Here is a simple direct note based on your choices.</p>
          <div class="generated-note-text">${escapeHTML(guidedDirectNote)}</div>
        </section>

        <section class="input-card">
          <h3>Try Your Own Tasting Note</h3>
          <p>This is optional. The goal is practice, not perfection.</p>
          <label for="reflect-user-tasting-note">Want to practice? Rewrite the note in your own words.</label>
          <textarea id="reflect-user-tasting-note" rows="5" placeholder="Optional">${escapeHTML(tastingData.reflect.userTastingNote)}</textarea>
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
    const colorField = document.getElementById("look-color");
    const noteField = document.getElementById("look-note");

    tastingData.look.color = colorField ? readChoice(colorField) : "";
    tastingData.look.note = noteField ? noteField.value.trim() : "";
  }

  if (currentStepName === "Smell") {
    const aromaField = document.getElementById("smell-aroma");
    const noteField = document.getElementById("smell-note");

    tastingData.smell.aroma = aromaField ? readChoice(aromaField) : "";
    tastingData.smell.note = noteField ? noteField.value.trim() : "";
  }

  if (currentStepName === "Taste") {
    const drynessField = document.getElementById("taste-dryness");
    const acidityField = document.getElementById("taste-acidity");
    const noteField = document.getElementById("taste-note");

    tastingData.taste.dryness = drynessField ? readChoice(drynessField) : "";
    tastingData.taste.acidity = acidityField ? readChoice(acidityField) : "";
    tastingData.taste.note = noteField ? noteField.value.trim() : "";
  }

  if (currentStepName === "Feel") {
    const bodyField = document.getElementById("feel-body");
    const tanninField = document.getElementById("feel-tannin");
    const finishField = document.getElementById("feel-finish");
    const noteField = document.getElementById("feel-note");

    tastingData.feel.body = bodyField ? readChoice(bodyField) : "";
    tastingData.feel.tannin = tanninField ? readChoice(tanninField) : "";
    tastingData.feel.finish = finishField ? readChoice(finishField) : "";
    tastingData.feel.note = noteField ? noteField.value.trim() : "";
  }

  if (currentStepName === "Reflect") {
    const starsField = document.getElementById("reflect-stars");
    const buyAgainField = document.getElementById("reflect-buy-again");
    const userTakeField = document.getElementById("reflect-user-take");
    const userTastingNoteField = document.getElementById("reflect-user-tasting-note");

    tastingData.reflect.stars = starsField ? readChoice(starsField) : "";
    tastingData.reflect.buyAgain = buyAgainField ? readChoice(buyAgainField) : "";
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
  document.getElementById('begin-button')?.addEventListener('click', () => {
    currentStepIndex = 1;
    renderStep();
  });
  stepContent.querySelectorAll('input[type="radio"]').forEach(input => {
    input.addEventListener('change', () => {
      saveCurrentStepData();
      if (document.querySelector('.app-card').dataset.complete) {
        delete document.querySelector('.app-card').dataset.complete;
        stepTitle.textContent = 'A glass, understood.';
        updateNavigation();
      }
      document.getElementById('selection-status').textContent = validateCurrentStep() ? ['','Nice — you just described wine.','Nice — you are building aroma vocabulary.','Nice — you are noticing taste.','Nice — you are noticing structure.','Your reaction belongs in this story, too.'][currentStepIndex] : '';
      document.getElementById('validation-message').textContent = '';
    });
  });
  stepContent.querySelectorAll('textarea').forEach(textarea => textarea.addEventListener('input', saveCurrentStepData));
}

function polishStep() {
  // Keep writing available without making it part of the required task.
  stepContent.querySelectorAll('textarea').forEach(textarea => {
    const label = stepContent.querySelector('label[for="' + textarea.id + '"]');
    const details = document.createElement('details');
    details.className = 'help-details optional-note';
    const summary = document.createElement('summary');
    summary.textContent = textarea.id === 'reflect-user-take' ? 'Your take · optional' : textarea.id === 'reflect-user-tasting-note' ? 'Try your own tasting note · optional' : 'Add a note · optional';
    const wrapper = document.createElement('div'); wrapper.className = 'help-content';
    textarea.before(details); details.append(summary, wrapper);
    if (label) wrapper.append(label);
    wrapper.append(textarea); textarea.rows = 3;
    if (textarea.value) details.open = true;
  });
  stepContent.querySelectorAll('.learning-tip').forEach(node => {
    const details = document.createElement('details'); details.className = 'help-details';
    details.innerHTML = '<summary>A little learning tip</summary><div class="help-content">' + node.innerHTML + '</div>';
    node.replaceWith(details);
  });
  if (currentStepIndex === 5) {
    stepContent.querySelectorAll('.input-card').forEach(node => {
      if (!node.querySelector('fieldset')) { node.querySelectorAll('h3,p').forEach(child => child.remove()); node.classList.add('optional-section'); }
    });
    const note = stepContent.querySelector('.generated-note-card');
    stepContent.querySelector('.lesson-card').after(note);
  }
}

function renderStep() {
  const currentStepName = steps[currentStepIndex];

  stepTitle.textContent = ['Welcome', 'First, take a look.', 'Follow your nose.', 'Time for a sip.', 'Notice the feeling.', 'A glass, understood.'][currentStepIndex];
  document.querySelector('.app-card').dataset.step = currentStepName.toLowerCase();
  delete document.querySelector('.app-card').dataset.complete;
  stepContent.innerHTML = getStepMarkup(currentStepName);

  polishStep();
  document.getElementById('selection-status').textContent = '';
  document.getElementById('validation-message').textContent = '';
  updateProgress();
  updateNavigation();
  attachStepEvents();
  stepTitle.focus({preventScroll: true});
  window.scrollTo(0, 0);
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
    document.getElementById('validation-message').textContent = 'Pick an answer for each question. On Taste and Feel, Skip is an answer too.';
    const missing = [...stepContent.querySelectorAll('fieldset')].find(field => !field.querySelector('input:checked'));
    missing?.querySelector('input').focus();
    return;
  }

  if (currentStepIndex < steps.length - 1) {
    currentStepIndex += 1;
    renderStep();
  } else {
    document.querySelector('.app-card').dataset.complete = 'true';
    stepTitle.textContent = 'You just tasted with curiosity.';
    document.getElementById('selection-status').textContent = 'Tasting complete. You looked, smelled, tasted, and made it your own. Next glass, notice one thing that is different.';
    nextButton.style.display = 'none';
    stepTitle.focus();
  }
});

// -----------------------------
// Initial render
// -----------------------------

renderStep();
