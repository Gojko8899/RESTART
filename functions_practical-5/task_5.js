// (skip :))Sort a previously defined array in a descending order and display it in the console.
// Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]

function sortArrayDescending(someArray) {
  let newArray = [];
  let temp;
  for (let i = 1; i < someArray.length; i++) {
    for (let j = 0; j < i; j++) {
      if (someArray[i] > someArray[j]) {
        temp = someArray[j];
        someArray[j] = someArray[i];
        someArray[i] = temp;
      }
    }
  }
  return someArray;
}
console.log(sortArrayDescending([13, 11, 15, 5, 6, 1, 8, 12]));
