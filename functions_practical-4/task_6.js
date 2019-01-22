// Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

function isArraySymetric(someArray) {
  let result;
  if (someArray.length % 2 == 0) {
    for (let i = 0, j = someArray.length - 1; i <= j, j >= i; i++, j--) {
      if (someArray[i] === someArray[j]) {
        result = "array is symetric";
      } else {
        result = "array is not symetric";
        break;
      }
    }
  }

  if (someArray.length % 2 !== 0) {
    for (let i = 0, j = someArray.length - 1; i < j, j > i; i++, j--) {
      if (someArray[i] == someArray[j]) {
        result = "array is symetric";
      } else {
        result = "array is not symetric";
        break;
      }
    }
  }
  return result;
}
console.log(isArraySymetric([2, 4, -2, 7, -2, 3, 2]));

function isArraySymmetric(array) {
  if (array.length < 1) {
    return false;
  }

  for (var i = 0; i < array.length / 2; i++) {
    var element = array[i];
    var elementPair = array[array.length - i - 1];
    if (element !== elementPair) {
      return false;
    }
  }
  return true;
}

var array = [2, 4, -2, 7, -2, 4, 2];
var isSymmetric = isArraySymmetric(array);

console.log(
  isSymmetric ? "The array is symmetric." : "The array isn't symmetric."
);
