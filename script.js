"use strict";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
document.querySelector(".guess").value;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "Enter a number";
  }
});
