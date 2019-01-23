// Write a program that finds the second smallest number and prints out its value.
// Input array: [4, 2, 2, -1, 6]
// Output: 2

function findSecondSmallestNum(someArray) {
  let temp;
  for (let i = 1; i < someArray.length; i++) {
    for (let j = 0; j < i; j++) {
      if (someArray[i] < someArray[j]) {
        temp = someArray[j];
        someArray[j] = someArray[i];
        someArray[i] = temp;
      }
    }
  }
  return someArray;
}

console.log(findSecondSmallestNum([4, 2, 2, -1, 6]));
