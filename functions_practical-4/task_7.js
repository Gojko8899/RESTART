// Write a program that intertwines two arrays. You can assume the arrays are of the same length.
// Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
// Output array: [4, 3, 5, 8, 6, 11, 2, 9]

function intertwinesArrays(arrayOne, arrayTwo) {
  let newArray = [];
  for (let i = 0, j = 0; i < arrayOne.length, j < arrayTwo.length; i++, j++) {
    newArray[newArray.length] = arrayOne[i];
    newArray[newArray.length] = arrayTwo[j];
  }
  return newArray;
}
console.log(intertwinesArrays([4, 5, 6, 2], [3, 8, 11, 9]));
