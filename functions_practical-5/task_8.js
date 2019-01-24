// Write a program that takes a string and prints its characters out in reversed order in the console.
// Input:  Belgrade Institute of Technology
// Output: ygolonhceT fo etutitsnI edargleB

function reverseAString(someString) {
  let newString = "";
  for (let i = someString.length - 1; i >= 0; i--) {
    newString += someString[i];
  }
  return newString;
}

console.log(reverseAString("Belgrade Institute of Technology"));
