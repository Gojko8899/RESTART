// 5 Write a function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

// [7, 9, 0, -2] -> -2
// [7, 9, 0, -2], 2 -> [0, -2]

function getElements(someArray, numOfElements = 1) {
  let newArray = [];
  for (
    let i = someArray.length - 1;
    i >= someArray.length - numOfElements;
    i--
  ) {
    newArray[newArray.length] = someArray[i];
  }
  return newArray;
}
console.log(getElements([7, 9, 0, -2], 2));
