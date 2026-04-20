// script.js

// -----------------------------
// App state
// -----------------------------

const steps = [
  "Welcome",
  "Look",
  "Smell",
  "Taste",
  "Feel",
  "Final Note"
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
// Render helpers
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

function getStepMarkup(stepName) {
  switch (stepName) {
    case "Welcome":
      return `
        <p>
          This app helps you practice a simple wine tasting flow.
          You do not need expert knowledge to begin.
        </p>
        <button id="begin-button" class="primary-button" type="button">Begin</button>
      `;

    case "Look":
      return `
    <p>Start simple. What color is the wine?</p>

    <label for="look-color">Wine color</label>
    <select id="look-color">
      <option value="">Select one</option>
      <option value="Red" ${tastingData.look.color === "Red" ? "selected" : ""}>Red</option>
      <option value="White" ${tastingData.look.color === "White" ? "selected" : ""}>White</option>
      <option value="Rosé" ${tastingData.look.color === "Rosé" ? "selected" : ""}>Rosé</option>
    </select>

    <label for="look-note">Optional comment</label>
    <textarea id="look-note" rows="4" placeholder="Anything you notice about the appearance?">${tastingData.look.note}</textarea>
      `;

    case "Smell":
      return `
        <p>What kind of smell stands out most?</p>

        <label for="smell-aroma">Aroma family</label>
        <select id="smell-aroma">
          <option value="">Select one</option>
          <option value="Fruit" ${tastingData.smell.aroma === "Fruit" ? "selected" : ""}>Fruit</option>
          <option value="Floral" ${tastingData.smell.aroma === "Floral" ? "selected" : ""}>Floral</option>
          <option value="Herbal" ${tastingData.smell.aroma === "Herbal" ? "selected" : ""}>Herbal</option>
          <option value="Earthy" ${tastingData.smell.aroma === "Earthy" ? "selected" : ""}>Earthy</option>
          <option value="Spicy" ${tastingData.smell.aroma === "Spicy" ? "selected" : ""}>Spicy</option>
          <option value="Other" ${tastingData.smell.aroma === "Other" ? "selected" : ""}>Other</option>
        </select>

        <label for="smell-note">Optional comment</label>
        <textarea id="smell-note" rows="4" placeholder="What stands out most to you?">${tastingData.smell.note}</textarea>
      `;

    case "Taste":
      return `
        <p>How would you describe the taste?</p>

        <label for="taste-dryness">Dryness</label>
        <select id="taste-dryness">
          <option value="">Select one</option>
          <option value="Dry" ${tastingData.taste.dryness === "Dry" ? "selected" : ""}>Dry</option>
          <option value="Off-dry" ${tastingData.taste.dryness === "Off-dry" ? "selected" : ""}>Off-dry</option>
          <option value="Sweet" ${tastingData.taste.dryness === "Sweet" ? "selected" : ""}>Sweet</option>
          <option value="Skip" ${tastingData.taste.dryness === "Skip" ? "selected" : ""}>Skip</option>
        </select>

        <label for="taste-body">Body</label>
        <select id="taste-body">
          <option value="">Select one</option>
          <option value="Light" ${tastingData.taste.body === "Light" ? "selected" : ""}>Light</option>
          <option value="Medium" ${tastingData.taste.body === "Medium" ? "selected" : ""}>Medium</option>
          <option value="Full" ${tastingData.taste.body === "Full" ? "selected" : ""}>Full</option>
          <option value="Skip" ${tastingData.taste.body === "Skip" ? "selected" : ""}>Skip</option>
        </select>

        <label for="taste-note">Optional comment</label>
        <textarea id="taste-note" rows="4" placeholder="Any simple taste notes?">${tastingData.taste.note}</textarea>
      `;

    case "Feel":
      return `
        <p>How does the wine feel in your mouth?</p>

        <label for="feel-acidity">Acidity</label>
        <select id="feel-acidity">
          <option value="">Select one</option>
          <option value="Low" ${tastingData.feel.acidity === "Low" ? "selected" : ""}>Low</option>
          <option value="Medium" ${tastingData.feel.acidity === "Medium" ? "selected" : ""}>Medium</option>
          <option value="High" ${tastingData.feel.acidity === "High" ? "selected" : ""}>High</option>
          <option value="Skip" ${tastingData.feel.acidity === "Skip" ? "selected" : ""}>Skip</option>
        </select>

        <label for="feel-tannin">Tannin</label>
        <select id="feel-tannin">
          <option value="">Select one</option>
          <option value="Low" ${tastingData.feel.tannin === "Low" ? "selected" : ""}>Low</option>
          <option value="Medium" ${tastingData.feel.tannin === "Medium" ? "selected" : ""}>Medium</option>
          <option value="High" ${tastingData.feel.tannin === "High" ? "selected" : ""}>High</option>
          <option value="N/A" ${tastingData.feel.tannin === "N/A" ? "selected" : ""}>N/A</option>
          <option value="Skip" ${tastingData.feel.tannin === "Skip" ? "selected" : ""}>Skip</option>
        </select>

        <label for="feel-finish">Finish</label>
        <select id="feel-finish">
          <option value="">Select one</option>
          <option value="Short" ${tastingData.feel.finish === "Short" ? "selected" : ""}>Short</option>
          <option value="Medium" ${tastingData.feel.finish === "Medium" ? "selected" : ""}>Medium</option>
          <option value="Long" ${tastingData.feel.finish === "Long" ? "selected" : ""}>Long</option>
          <option value="Skip" ${tastingData.feel.finish === "Skip" ? "selected" : ""}>Skip</option>
        </select>

        <label for="feel-note">Optional comment</label>
        <textarea id="feel-note" rows="4" placeholder="Anything you notice about the feel?">${tastingData.feel.note}</textarea>
      `;

    case "Final Note":
      const generatedNote = generateTechnicalNote();

      return `
      <p>Wrap up your tasting with a quick review and a structured note.</p>

      <label for="review-stars">Rating</label>
      <select id="review-stars">
        <option value="">Select one</option>
        <option value="1" ${tastingData.review.stars === "1" ? "selected" : ""}>1 star</option>
        <option value="2" ${tastingData.review.stars === "2" ? "selected" : ""}>2 stars</option>
        <option value="3" ${tastingData.review.stars === "3" ? "selected" : ""}>3 stars</option>
        <option value="4" ${tastingData.review.stars === "4" ? "selected" : ""}>4 stars</option>
        <option value="5" ${tastingData.review.stars === "5" ? "selected" : ""}>5 stars</option>
      </select>

      <label for="review-buy-again">Would you buy it again?</label>
      <select id="review-buy-again">
        <option value="">Select one</option>
        <option value="Yes" ${tastingData.review.buyAgain === "Yes" ? "selected" : ""}>Yes</option>
        <option value="No" ${tastingData.review.buyAgain === "No" ? "selected" : ""}>No</option>
        <option value="Maybe" ${tastingData.review.buyAgain === "Maybe" ? "selected" : ""}>Maybe</option>
      </select>

      <label for="review-user-review">Your review</label>
      <textarea id="review-user-review" rows="4" placeholder="What did you think?">${tastingData.review.userReview}</textarea>

      <label for="review-generated-note">Generated technical note</label>
      <textarea id="review-generated-note" rows="5" readonly>${generatedNote}</textarea>

      <label for="review-user-technical-note">Your technical note</label>
      <textarea id="review-user-technical-note" rows="5" placeholder="Try writing your own tasting note...">${tastingData.review.userTechnicalNote}</textarea>
      `;

    default:
      return `<p>Unknown step.</p>`;
  }
}

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
}

function renderStep() {
  const currentStepName = steps[currentStepIndex];

  stepTitle.textContent = currentStepName;
  stepContent.innerHTML = getStepMarkup(currentStepName);

  updateProgress();
  updateNavigation();
  attachStepEvents();
}
function generateTechnicalNote() {
  const parts = [];

  if (tastingData.look.color) {
    parts.push(`${tastingData.look.color} in color`);
  }

  if (tastingData.smell.aroma) {
    parts.push(`${tastingData.smell.aroma.toLowerCase()} aromas on the nose`);
  }

  if (tastingData.taste.dryness && tastingData.taste.dryness !== "Skip") {
    parts.push(`${tastingData.taste.dryness.toLowerCase()} on the palate`);
  }

  if (tastingData.taste.body && tastingData.taste.body !== "Skip") {
    parts.push(`${tastingData.taste.body.toLowerCase()} body`);
  }

  if (tastingData.feel.acidity && tastingData.feel.acidity !== "Skip") {
    parts.push(`${tastingData.feel.acidity.toLowerCase()} acidity`);
  }

  if (tastingData.feel.tannin && tastingData.feel.tannin !== "Skip") {
    parts.push(`${tastingData.feel.tannin.toLowerCase()} tannin`);
  }

  if (tastingData.feel.finish && tastingData.feel.finish !== "Skip") {
    parts.push(`${tastingData.feel.finish.toLowerCase()} finish`);
  }

  const comments = [
    tastingData.look.note,
    tastingData.smell.note,
    tastingData.taste.note,
    tastingData.feel.note
  ].filter(note => note && note.trim() !== "");

  let noteText = parts.length > 0
    ? `This wine is ${parts.join(", ")}.`
    : "No structured tasting note available yet.";

  if (comments.length > 0) {
    noteText += ` Notes: ${comments.join(" ")}`;
  }

  tastingData.review.generatedTechnicalNote = noteText;
  return noteText;
}
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
    const bodySelect = document.getElementById("taste-body");
    const noteField = document.getElementById("taste-note");

    tastingData.taste.dryness = drynessSelect ? drynessSelect.value : "";
    tastingData.taste.body = bodySelect ? bodySelect.value : "";
    tastingData.taste.note = noteField ? noteField.value.trim() : "";
  }

  if (currentStepName === "Feel") {
    const aciditySelect = document.getElementById("feel-acidity");
    const tanninSelect = document.getElementById("feel-tannin");
    const finishSelect = document.getElementById("feel-finish");
    const noteField = document.getElementById("feel-note");

    tastingData.feel.acidity = aciditySelect ? aciditySelect.value : "";
    tastingData.feel.tannin = tanninSelect ? tanninSelect.value : "";
    tastingData.feel.finish = finishSelect ? finishSelect.value : "";
    tastingData.feel.note = noteField ? noteField.value.trim() : "";
  }
    if (currentStepName === "Final Note") {
    const starsSelect = document.getElementById("review-stars");
    const buyAgainSelect = document.getElementById("review-buy-again");
    const userReviewField = document.getElementById("review-user-review");
    const userTechnicalNoteField = document.getElementById("review-user-technical-note");

    tastingData.review.stars = starsSelect ? starsSelect.value : "";
    tastingData.review.buyAgain = buyAgainSelect ? buyAgainSelect.value : "";
    tastingData.review.userReview = userReviewField ? userReviewField.value.trim() : "";
    tastingData.review.userTechnicalNote = userTechnicalNoteField ? userTechnicalNoteField.value.trim() : "";
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
    return tastingData.taste.dryness !== "" && tastingData.taste.body !== "";
  }

  if (currentStepName === "Feel") {
    return (
      tastingData.feel.acidity !== "" &&
      tastingData.feel.tannin !== "" &&
      tastingData.feel.finish !== ""
    );
  }
    if (currentStepName === "Final Note") {
    return tastingData.review.stars !== "" && tastingData.review.buyAgain !== "";
  }

  return true;
}
// -----------------------------
// Navigation events
// -----------------------------

backButton.addEventListener("click", () => {
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
    alert("Prototype flow complete. Nice work.");
  }
});

// -----------------------------
// Initial render
// -----------------------------

renderStep();

// Helpful for debugging in the browser console
console.log("Wine Tutorial App loaded.");
console.log("Initial tasting data:", tastingData);