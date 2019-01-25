// Write a function to find the maximum and minimum elements. Function returns an array.

function findMinAndMAx(someArray) {
  let minValue = someArray[0];
  let maxValue = someArray[0];
  let element;
  let newArray = [];
  for (let i = 1; i < someArray.length; i++) {
    element = someArray[i];
    if (element > maxValue) {
      maxValue = element;
      newArray[0] = maxValue;
    }
    if (element < minValue) {
      minValue = element;
      newArray[1] = minValue;
    }
  }
  return newArray;
}
console.log(findMinAndMAx([26, 45, 2, 13, 4, 11, 77, 1, 56, 12]));
