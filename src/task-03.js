const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

let ul = document.querySelector(".gallery");
let Str = "";


images.forEach((img) => {
  const url = img.url;
  const alt = img.alt;

  let newEl = document.createElement("li");
  let newImg = document.createElement("img");

  newImg.setAttribute("src", `${url}`);
  newImg.setAttribute("alt", `${alt}`);
  newImg.setAttribute("width", "250px");
  newEl.append(newImg);

  Str += newEl.outerHTML;
});


ul.insertAdjacentHTML("afterbegin", `${Str}`);

