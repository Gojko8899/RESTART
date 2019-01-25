// Write a function that rotates a list by k elements.

// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

function rotateByX(someArray, xTimes) {
  let newArray = [];
  for (let i = xTimes; i < someArray.length; i++) {
    newArray[newArray.length] = someArray[i];
  }
  for (let j = 0; j < xTimes; j++) {
    newArray[newArray.length] = someArray[j];
  }
  return newArray;
}
console.log(rotateByX([1, 2, 3, 4, 5, 6], 4));
