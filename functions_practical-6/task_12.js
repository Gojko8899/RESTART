// Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.

function findAverage(...numbers) {
  let averageNum = 0;
  let arrayOfArguments = numbers;
  //   console.log(arguments);
  if (numbers.length === 0) {
    averageNum = "array is empty";
    return averageNum;
  }
  if (numbers.length === 1) {
    averageNum = numbers[0];
    return averageNum;
  } else {
    for (let i = 0; i < arrayOfArguments.length; i++) {
      averageNum += arrayOfArguments[i];
    }
    averageNum = averageNum / arrayOfArguments.length;
  }
  return averageNum;
}
console.log(findAverage(4, 2));
