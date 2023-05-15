const create = document.querySelector("button[data-create]");
const destroy = document.querySelector("button[data-destroy]");

const div = document.querySelector("#controls");
const number = div.firstElementChild;
number.classList.add("input");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createDivs() {
  let amount = +number.value;
  let min = +number.min;
  let max = +number.max;
  let step = +number.step;

  if (min <= amount && amount <= max) {
    createBoxes(amount, step);
  } else {
    alert(
      `Please, enter a number, bigger then ${min - 1} and smaller then ${
        max + 1
      }!`
    );
  }
}

function createBoxes(amount, step) {
  const boxes = document.querySelector("#boxes");
  let divs = document.createElement("div");
  let a = 30;

  for (let i = 1; i <= amount; i += step) {
    let div = document.createElement("div");
    div.setAttribute(
      "style",
      `width: ${a}px; height: ${a}px; background-color: ${getRandomHexColor()}`
    );

    divs.append(div);
    a += 10;
  }

  boxes.insertAdjacentElement("beforeend", divs);
}

function destroyDivs() {
  const boxes = document.querySelector("#boxes");

  boxes.innerHTML = "";
  number.value = "";
}

create.addEventListener("click", createDivs);
destroy.addEventListener("click", destroyDivs);
