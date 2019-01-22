// Write a function that reverses a number. The result must be a number.

// 12345 -> 54321 // Output must be a number

function reverseNumber(someNumber) {
  let newNumber = 0;
  for (let i = someNumber.length - 1; i >= 0; i--) {
    newNumber += someNumber[i];
  }
  return newNumber * 1;
}
let result = reverseNumber("12345");
console.log(result);
console.log(typeof result);
