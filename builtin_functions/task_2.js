// Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

// Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
// Output: “015false-2247”

function joinElements(someArray) {
  let newString = "";
  for (let i = 0; i < someArray.length; i++) {
    if (
      !someArray[i] === false ||
      someArray[i] === false ||
      someArray[i] === 0
    ) {
      newString += someArray[i];
    }
  }
  return newString;
}
console.log(joinElements([NaN, 0, 15, false, -22, "", undefined, 47, null]));
