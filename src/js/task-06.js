const counter = document.querySelector("#validation-input");
const number = document.querySelector('input[data-length="6"]');

counter.addEventListener("focus", () => counter.classList.add("invalid"));

counter.addEventListener("input", (event) => {
  +number.dataset.length === event.currentTarget.value.trim().split("").length
    ? counter.classList.replace("invalid", "valid")
    : counter.classList.replace("valid", "invalid");
});
