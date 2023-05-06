const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let newArr = [];
let ul = document.querySelector("#ingredients");

ingredients.forEach((el) => {
  const newEl = document.createElement("li");

  newEl.textContent = el;
  newEl.classList.add("item");
  newArr.push(newEl);
  // console.log(newEl.textContent);
});

// console.log(...newArr);
ul.append(...newArr);
// console.log(ul);
