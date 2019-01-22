// Write a program that finds the minimum of a given array and prints out its value and index.
// Input array: [4, 2, 2, -1, 6]
// Output: -1, 3

function findMinimum(someArray) {
  let startPoint = someArray[0];
  let position;
  for (let i = 0; i < someArray.length; i++) {
    if (someArray[i] <= startPoint) {
      startPoint = someArray[i];
      position = i;
    }
  }
  return startPoint + "," + position;
}
console.log(findMinimum([-14, -13, 4, 2, 2, -15, -3, 6, -10]));
