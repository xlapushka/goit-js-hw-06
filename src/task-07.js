// const fontSizeOfAbra = document.querySelector("#font-size-control");
// const abra = document.querySelector("#text");

// // console.log(fontSizeOfAbra.value);

// function changeFontSize() {
//   let a = fontSizeOfAbra.value;

//   // console.log(`font-size: ${a}px`);
//   abra.setAttribute("style", `font-size: ${a}px`);
//   // console.log(abra.attributes);
// }

// fontSizeOfAbra.addEventListener("click", changeFontSize);

// ============================================
// пробачте, я не розумію про "просто текстовий контент".
// початковий розмір поправила

const fontSizeOfAbra = document.querySelector("#font-size-control");
const abra = document.querySelector("#text");
changeFontSize();

function changeFontSize() {
  abra.setAttribute("style", `font-size: ${fontSizeOfAbra.value}px`);
}

fontSizeOfAbra.addEventListener("input", changeFontSize);
