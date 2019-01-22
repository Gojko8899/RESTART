// 1 Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

// "My random string", "JS " -> "JS My random string"
// "My random string", "JS ", 10 -> "My random JS string"

function insertingString(someString, stringToPut, somePosition) {
  let newString = "";
  for (let i = 0; i < someString.length; i++) {
    if (i == somePosition) {
      newString += stringToPut;
    }
    newString += someString[i];
  }
  return newString;
}
console.log(insertingString("some String", "Gojko", 0));
