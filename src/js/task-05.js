const currentName = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

currentName.addEventListener("input", (event) => {
  event.currentTarget.value === ""
    ? (output.textContent = "Anonymous")
    : (output.textContent = event.currentTarget.value);
});
