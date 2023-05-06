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
  let amount = number.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const boxes = document.querySelector("#boxes");
  let divs = document.createElement("div");
  let a = 30;

  for (let i = 0; i < amount; i++) {
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
