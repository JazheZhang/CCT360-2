// 1. Mouse: click the button to switch between light and dark theme
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Light Mode";
  } else {
    themeBtn.textContent = "Dark Mode";
  }
});

// 2. Keyboard: show what the user types and count the characters
const textInput = document.getElementById("textInput");
const preview = document.getElementById("preview");
const count = document.getElementById("count");

textInput.addEventListener("input", function () {
  preview.textContent = textInput.value;
  count.textContent = "Characters: " + textInput.value.length;
});

// 3. Time (BOM): update the clock every second
const clock = document.getElementById("clock");

function showTime() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}

showTime();
setInterval(showTime, 1000);