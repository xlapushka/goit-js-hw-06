const changeColor = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackgroundColor() {
  const widget = document.querySelector(".widget");
  const body = widget.parentNode;

  body.setAttribute("style", `background-color: ${getRandomHexColor()}`);
  changeSpan();
}

function changeSpan() {
  const span = document.querySelector(".color");

  span.textContent = `- ${getRandomHexColor()}`;
}

changeColor.addEventListener("click", changeBackgroundColor);
