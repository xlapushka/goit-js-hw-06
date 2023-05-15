const quanityOfLiItem = categories.children;
const liItems = categories.querySelectorAll(".item");

console.log("Number of categories: ", quanityOfLiItem.length);
// console.log(quanityOfLiItem);
// console.log(liItems);
// console.log(liItems[0] === quanityOfLiItem[0]);

liItems.forEach((item) => {
  const itemNameTextContent = item.firstElementChild.textContent;

  const quanityOfLiLength =
    item.firstElementChild.nextElementSibling.children.length;

  console.log("Category: ", itemNameTextContent);
  console.log("Elements: ", quanityOfLiLength);
});
