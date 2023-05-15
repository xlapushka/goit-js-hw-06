// let currentValue = document.querySelector("#value").textContent;
//

// let currentValue = document.querySelector("#value");
// let currentValueTextContext = +document.querySelector("#value").textContent;

// document.addEventListener("click", changeValue);

// function changeValue(event) {
//   // console.log(event.target.dataset.action);
//   if (event.target.dataset.action === "decrement") {
//     currentValueTextContext -= 1;
//     // console.log(currentValueTextContext);
//   }
//   if (event.target.dataset.action === "increment") {
//     currentValueTextContext += 1;
//     // console.log(currentValueTextContext);
//   }
//   currentValue.innerHTML = currentValueTextContext;
// }

// =========================================

let counterValue = 0;
let currentValue = document.querySelector("#value");

const buttonPlusOne = document.querySelector("button[data-action=increment]");
const buttonMinusOne = document.querySelector("button[data-action=decrement]");

buttonMinusOne.addEventListener("click", minusOne);
function minusOne() {
  counterValue -= 1;
  currentValue.textContent = counterValue;
}

buttonPlusOne.addEventListener("click", plusOne);
function plusOne() {
  counterValue += 1;
  currentValue.textContent = counterValue;
}
