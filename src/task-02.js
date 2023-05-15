const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let ul = document.querySelector("#ingredients");

let newArr = ingredients.map((el) => {
  const newEl = document.createElement("li");

  newEl.textContent = el;
  newEl.classList.add("item");

  return newEl;
});

ul.append(...newArr);
