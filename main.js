const form = document.querySelector(".form");
const input = document.querySelector(".input");
const list = document.querySelector(".list");

let currentInput;
input.addEventListener("input", (event) => {
  currentInput = event.target.value;
  console.log(currentInput);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
});
