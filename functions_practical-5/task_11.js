// Check if a given string is a palindrome (spaces are ignored).
// Input:  eye  | Geek  | a nut for a jar of tuna
// Output: true | false | true

function isPalindrome(someString) {
  let letterToCompare;
  let newString = "";
  for (let i = 0; i < someString.length; i++) {
    if (someString[i] !== " ") {
      newString += someString[i];
    }
  }
  for (let j = 0; j < newString.length; j++) {
    letterToCompare = newString[newString.length - j - 1];

    if (letterToCompare !== newString[j]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome("a nut for a jar of tuna"));
