// Write a program that concatenates two arrays.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 5, 6, 2, 3, 8, 11, 9]

function concatenateTwoArrays(arrayOne, arrayTwo) {
  let newArray = [];
  for (let i = 0; i < arrayTwo.length; i++) {
    newArray = arrayOne;
    newArray[newArray.length] = arrayTwo[i];
  }
  return newArray;
}
console.log(concatenateTwoArrays([4, 5, 6, 2], [3, 8, 11, 9]));
