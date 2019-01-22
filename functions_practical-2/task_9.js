//9  Write a function that replaces spaces in a string with provided separator. If separator is not provided, use “-” (dash) as the default separator.

// "My random string", "_" -> "My_random_string"
// "My random string", "+" -> "My+random+string"
// "My random string" -> "My-random-string"

function replaceWhiteSpaces(someString, element = "-") {
  let newString = "";
  for (let i = 0; i < someString.length; i++) {
    if (someString[i] == " ") {
      newString += element;
    } else {
      newString += someString[i];
    }
  }
  return newString;
}
console.log(replaceWhiteSpaces("my random string maybe", "+"));
