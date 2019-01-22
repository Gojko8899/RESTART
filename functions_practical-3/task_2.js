// 2 Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

// [NaN, 0, 15, false, -22, '', undefined, 47, null]

function joinElements(someArray) {
  let newString = "";
  for (let i = 0; i < someArray.length; i++) {
    if (!someArray[i] === false) {
      newString += "," + someArray[i];
    }
    if (someArray[i] === 0) {
      newString = someArray[i];
    }
  }
  return newString;
}

console.log(joinElements([NaN, 0, 15, false, -22, "", undefined, 47, null]));
