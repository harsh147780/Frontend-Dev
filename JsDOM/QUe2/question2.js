const message = document.getElementById("message");
const charCounter = document.getElementById("charCounter");
const resetBtn = document.getElementById("resetBtn");

const MAX_CHAR = 100;

// -----------------------------------
// LIVE CHARACTER COUNTER
// -----------------------------------
message.addEventListener("input", () => {
  let currentLength = message.value.length;
  let remaining = MAX_CHAR - currentLength;

  // Update counter text
  charCounter.textContent = `${remaining} characters left`;

  // COLOR CONDITIONS
  if (remaining <= 0) {
    charCounter.classList.remove("yellow");
    charCounter.classList.add("red");
  } else if (remaining <= 20) {
    charCounter.classList.remove("red");
    charCounter.classList.add("yellow");
  } else {
    charCounter.classList.remove("yellow", "red");
  }
});

// -----------------------------------
// PREVENT EXTRA TYPING AFTER LIMIT
// -----------------------------------
message.addEventListener("keydown", (e) => {
  if (message.value.length >= MAX_CHAR && e.key.length === 1) {
    e.preventDefault(); // block new characters
  }
});

// -----------------------------------
// RESET BUTTON
// -----------------------------------
resetBtn.addEventListener("click", () => {
  message.value = "";
  charCounter.textContent = "100 characters left";
  charCounter.classList.remove("yellow", "red");
});
