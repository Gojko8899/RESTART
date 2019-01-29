// Write a function to find all the numbers greater than the average.

function allNumsGreaterThanAverage(...numbers) {
  let arrayOfNums = numbers;

  let average = 0;
  let newArray = [];
  for (let i = 0; i < arrayOfNums.length; i++) {
    average += arrayOfNums[i];
  }
  average = average / arrayOfNums.length;

  for (let j = 0; j < arrayOfNums.length; j++) {
    if (arrayOfNums[j] > average) {
      newArray[newArray.length] = arrayOfNums[j];
    }
  }
  return newArray;
}
console.log(allNumsGreaterThanAverage(2, 3, 4, 5, 1, 7));
