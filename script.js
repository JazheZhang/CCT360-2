const themeBtn = document.getElementById("themeBtn");
const themeName = document.getElementById("themeName");

function updateThemeText() {
  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "Light Mode";
    themeName.textContent = "dark";
  } else {
    themeBtn.textContent = "Dark Mode";
    themeName.textContent = "light";
  }
}

themeBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  updateThemeText();

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  updateThemeText();
}

const textInput = document.getElementById("textInput");
const preview = document.getElementById("preview");
const count = document.getElementById("count");

textInput.addEventListener("input", function () {
  preview.textContent = textInput.value;
  count.textContent = textInput.value.length;
});

const clock = document.getElementById("clock");

function showTime() {
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}

showTime();
setInterval(showTime, 1000);

const windowSize = document.getElementById("windowSize");

function showSize() {
  windowSize.textContent = "Window width: " + window.innerWidth + "px";
}

showSize();
window.addEventListener("resize", showSize);
