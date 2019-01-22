// Write a program that calculates a number of integer values in the array.

// 	Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
// Output: 3

function numOfIntegers(someArray) {
  let newArray = [];
  let counter = 0;
  for (let i = 0; i < someArray.length; i++) {
    if (someArray[i] === Math.round(someArray[i])) {
      newArray[newArray.length] = someArray[i];
      counter++;
    }
  }
  console.log(counter);
  return newArray;
}
console.log(numOfIntegers([NaN, "23.1", 15, false, -22.5, "", 4, 7, null]));

function numberOfIntegers(array) {
  var i;
  var integerValue;
  var counter = 0;

  for (i = 0; i < array.length; i++) {
    integerValue = parseInt(array[i]);
    console.log(integerValue);
    if (isNaN(integerValue) == false && integerValue == array[i]) {
      //   console.log(integerValue);
      counter++;
    }
  }
  return counter;
}

var array = [NaN, 23.1, 15, false, -22.5, "", 4, 7, null];
var integerCounter;
integerCounter = numberOfIntegers(array);
console.log(integerCounter);
