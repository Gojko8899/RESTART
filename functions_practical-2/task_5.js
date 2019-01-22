// 5 Write a function to find the position of the first occurrence of a character in a string. The result should be in human numeration form.
// If there are no occurrences of the character, the function should return -1.

function findFirstChar(someString, someChar) {
  let counter = -1;
  for (let i = 0; i < someString.length; i++) {
    if (someString[i] == someChar) {
      counter = i + 1;
      break;
    }
  }
  return counter;
}
console.log(findFirstChar("transilvanija", "e"));
