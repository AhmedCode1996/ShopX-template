// function missingLetters(givenString) {
//   for (let i = 0, j = 1; i < givenString.length; i++, j++) {
//     let previous = givenString.charCodeAt(i);
//     let current = givenString.charCodeAt(j);
//     if (current - previous == 2) {
//       return String.fromCharCode(previous + 1);
//     }
//   }
// }
// console.log(missingLetters("abcdf"))
/*
// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript
function findMissingLetter(array) {
  for (let i = 0, j = 1; i < array.length; i++, j++) {
    if (array.join("").charCodeAt(j) - array.join("").charCodeAt(i) == 2) {
      return String.fromCharCode(array.join("").charCodeAt(i) + 1);
    }
  }
}
console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
*/
let counter = 0;
let shopCounterSpan = document.getElementsByClassName("shop-counter");
let shopCounterContent = shopCounterSpan[0];
let basketItem = document.querySelector(".item-basket span");
basketItem.onclick = function () {
  shopCounterContent.style.display = "block";
  counter++;
  shopCounterContent.textContent = counter;
  console.log(shopCounterContent);
};

let itemBasket = document.querySelectorAll(".item-basket span");
itemBasket.forEach(function (e) {
  e.onclick = function () {
    shopCounterContent.style.display = "block";
    counter++;
    shopCounterContent.textContent = counter;
  };
});
shopCounterContent.addEventListener("mouseover", function (event) {
  event.target.style.boxShadow = "2px solid white";
});
