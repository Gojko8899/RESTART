// Write a program that calculates the sum of positive elements in the array.
// Input array: [3, 11, -5, -3, 2]
// Output: 16

function calculateSumOfPositiveElements(someArray) {
  let result = 0;
  for (let i = 0; i < someArray.length; i++) {
    if (someArray[i] > 0) {
      result += someArray[i];
    }
  }
  return result;
}
console.log(calculateSumOfPositiveElements([3, 11, -5, -3, 2]));
