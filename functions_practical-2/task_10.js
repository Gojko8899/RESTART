// 10  Write a function to get the first n characters and add “...” at the end of newly created string.

function addDots(someString, char) {
  let newString = "";
  for (let i = 0; i < someString.length; i++) {
    newString += someString[i];
    if (someString[i] == char) {
      break;
    }
    // console.log(newString);
  }
  return newString + "...";
}
console.log(addDots("some", "o"));
