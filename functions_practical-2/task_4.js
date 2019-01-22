// 4 Write a function to count the number of letter occurrences in a string.
// "My random string", "n" -> 2

function numberOfLetter(someString, someLetter) {
  let counter = 0;
  for (let i = 0; i < someString.length; i++) {
    if (someString[i] == someLetter) {
      counter++;
    }
  }
  return counter;
}
console.log(numberOfLetter("my random string", "r"));
