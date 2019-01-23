// (skip :))Sort a previously defined array. Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
// Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
// Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]

function sortAndMultiplie(someArray) {
  let newArray = [];
  let element;
  let temp;

  for (let i = 1; i < someArray.length; i++) {
    for (let j = 0; j < i; j++) {
      if (someArray[i] < someArray[j]) {
        temp = someArray[j];
        someArray[j] = someArray[i];
        someArray[i] = temp;
      }
    }
  }
  for (let i = 0; i < someArray.length; i++) {
    newArray[i] = someArray[i] * 2;
  }
  return newArray;
}
console.log(sortAndMultiplie([13, 11, 15, 5, 6, 1, 8, 12]));
