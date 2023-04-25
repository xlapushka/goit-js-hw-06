const quanityOfLiItem = categories.children;
const liItems = categories.querySelectorAll(".item");

console.log("Number of categories: ", quanityOfLiItem.length);
// console.log(quanityOfLiItem);
// console.log(liItems);
// console.log(liItems[0] === quanityOfLiItem[0]);

liItems.forEach((item) => {
  const itemName = item.firstElementChild;
  const itemNameTextContent = itemName.textContent;

  const itemNameNeibor = itemName.nextElementSibling;
  const quanityOfLi = itemNameNeibor.children;
  const quanityOfLiLength = quanityOfLi.length;

  console.log("Category: ", itemNameTextContent);
  console.log("Elements: ", quanityOfLiLength);
});
