// Write a program that inserts a given element e on the given position p in the array a. If the value of the position is greater than the array length,
//  print the error message.
// Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
// Output: [2, -2, 33, 78, 12, 5, 8]

function insertElementa(someArray, position, elem) {
  let newArray = [];
  if (position > someArray.length) {
    console.log("error");
  } else {
    for (let i = 0; i < someArray.length; i++) {
      if (position === someArray.length) {
        newArray = someArray;
        newArray[newArray.length] = elem;
        break;
      }
      if (i <= position) {
        newArray[i] = someArray[i];
      }
      if (i === position) {
        newArray[position] = elem;
      }

      if (i >= position) {
        newArray[newArray.length] = someArray[i];
      }
    }
  }
  return newArray;
}
console.log(insertElementa([2, -2, 33, 12, 5, 8], 6, 78));
