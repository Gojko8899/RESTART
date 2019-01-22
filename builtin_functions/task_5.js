// Write a program that calculates a number of float values in the array.

// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 2

function floatNumbers(someArray) {
  let counter = 0;
  let newArray = [];
  let integerValue;
  for (let i = 0; i < someArray.length; i++) {
    integerValue = parseFloat(someArray[i]);

    if (
      integerValue !== parseInt(someArray[i]) &&
      isNaN(integerValue) == false
    ) {
      counter++;
    }
  }

  return counter;
}
console.log(
  floatNumbers([NaN, 23.1, 15, false, -22.5, "", 4, 7, null, 22.4, 31.6])
);
