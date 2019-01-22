// Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

function multipliesPositive(someArray) {
  let newArray = [];
  for (let i = 0; i < someArray.length; i++) {
    if (someArray[i] > 0) {
      newArray[i] = someArray[i] * 2;
    } else {
      newArray[i] = someArray[i];
    }
  }
  return newArray;
}

console.log(multipliesPositive([-3, 11, 5, 3.4, -8]));
