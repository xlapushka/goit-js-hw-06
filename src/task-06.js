// const counter = document.querySelector("#validation-input");
// const number = document.querySelector('input[data-length="6"]');

// counter.addEventListener("focus", () => counter.classList.add("invalid"));

// counter.addEventListener("input", (event) => {
//   +number.dataset.length === event.currentTarget.value.trim().split("").length
//     ? counter.classList.replace("invalid", "valid")
//     : counter.classList.replace("valid", "invalid");
// });
// ================================================================

const counter = document.querySelector("#validation-input");
const number = document.querySelector('input[data-length="6"]');

counter.addEventListener("input", (event) => {
  counter.classList.add("invalid");

  +number.dataset.length !== event.currentTarget.value.replace(/\s/g, "").length
    ? counter.classList.replace("valid", "invalid")
    : counter.classList.replace("invalid", "valid");
});

// !!!
// з input гратися цікавійше.
// якщо trim, то тоді вже й replace(/\s/g, ""). або пробіл - то символ і тожі без trim.
// користувач одразу не може ввести одночасно 6 символів, тому при першому введеному
// символі одразу додаю класс "інвалід". і, тим паче, при blur не видно червоне воно чи зелене
// якщо з blur робити, то:

// const counter = document.querySelector("#validation-input");
// const number = document.querySelector('input[data-length="6"]');

// counter.addEventListener("blur", (event) => {
//   counter.classList.add("invalid");

//   +number.dataset.length === event.currentTarget.value.replace(/\s/g, "").length
//     ? counter.classList.replace("invalid", "valid")
//     : counter.classList.replace("valid", "invalid");
// });
