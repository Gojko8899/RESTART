// Write a function to find the median element of array.

function findAmedianElement(someArray) {
  let element;
  if (someArray.length % 2 === 1) {
    for (let i = someArray.length / 2 - 0.5; i < someArray.length / 2; i++) {
      element = someArray[i];
      break;
    }
  } else {
    element = "array is even";
  }
  return element;
}
console.log(findAmedianElement([1, null, 3, "kljm", 5, 6, 7, 8, 9, 1]));
