const textDiv = document.querySelector("#main_text");
const speedEl = document.querySelector("#speed");

const text = "Welcome to our practice!";
let i = 1;
let speed = 1000;

const writeText = function () {
  textDiv.innerHTML = text.slice(0, i);
  i++;

  if (i > text.length) {
    i = 1;
  }

  setTimeout(writeText, speed);
};

writeText();
speedEl.addEventListener("input", (e) => {
  speed = 1000 / e.target.value;
});
