// let currentValue = document.querySelector("#value").textContent;
// let counterValue = 0;

let currentValue = document.querySelector("#value");
let currentValueTextContext = +document.querySelector("#value").textContent;

document.addEventListener("click", changeValue);

function changeValue(event) {
  // console.log(event.target.dataset.action);
  if (event.target.dataset.action === "decrement") {
    currentValueTextContext -= 1;
    // console.log(currentValueTextContext);
  }
  if (event.target.dataset.action === "increment") {
    currentValueTextContext += 1;
    // console.log(currentValueTextContext);
  }
  currentValue.innerHTML = currentValueTextContext;
}
