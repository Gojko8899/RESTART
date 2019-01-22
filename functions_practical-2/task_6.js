//6 Write a function to find the position of the last occurrence of a character in a string. The result should be in human numeration form.
// If there are no occurrences of the character, function should return -1.

function findPositionOfChar(someString, someChar) {
  let counter = -1;
  for (let i = someString.length; i >= 0; i--) {
    // console.log(someString[i]);
    if (someString[i] == someChar) {
      counter = i + 1;
      break;
    }
  }
  return counter;
}
console.log(findPositionOfChar("transilvanija", "n"));
