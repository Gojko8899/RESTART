// Write a program that deletes a given element e from the array a.
// Input: e = 2, a = [4, 6, 2, 8, 2, 2]
// Output array: [4, 6, 8]

function deleteAnElementFormArray(someArray, elem) {
  let newArray = [];
  for (let i = 0; i < someArray.length; i++) {
    if (someArray[i] !== elem) {
      newArray[newArray.length] = someArray[i];
    }
  }
  return newArray;
}
console.log(deleteAnElementFormArray([4, 6, 2, 8, 2, 2], 6));
