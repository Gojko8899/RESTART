// Write IIFE that replaces the first and the last element of the given array and prints out its elements.
// 	Input array: [4, 5, 11, 9]
// 	Output array: [ 9, 5, 11, 4]

(function(someArray) {
  let newArray = [];
  newArray[0] = someArray[someArray.length - 1];

  for (let i = 1; i < someArray.length - 1; i++) {
    newArray[newArray.length] = someArray[i];
  }
  newArray[newArray.length] = someArray[0];
  console.log(newArray);
})([4, 5, 11, 9]);
