// Find the min and max element in the following array and switch their places. Print out the modified array in the console.
// Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
var array = [3, 500, 12, 149, 53, 414, 1, 19];
console.log(swapMinimumAndMaximumElement(array));

function swapMinimumAndMaximumElement(array) {
  let minNumber = 999999999;
  let maxNumber = -99999999;

  let minIndex = 0;
  let maxIndex = 0;

  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    newArray[i] = element;

    if (element > maxNumber) {
      maxNumber = element;
      maxIndex = i;
    }
    if (element < minNumber) {
      minNumber = element;
      minIndex = i;
    }
    if (i === array.length - 1) {
      newArray[minIndex] = maxNumber;
      newArray[maxIndex] = minNumber;
    }
  }
  return newArray;
}
