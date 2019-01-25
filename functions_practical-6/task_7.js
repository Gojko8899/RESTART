// Write a function to find the maximum element in array of numbers. Filter out all non-number elements.
// [NaN, 0, 15, false, -22, '', undefined, 47, null]

function findMaximum(someArray) {
  let cleanArray = filterOut(someArray);
  let maxNum = cleanArray[0];
  let temp;
  for (let i = 1; i < cleanArray.length; i++) {
    for (let j = 0; j < cleanArray.length; j++) {
      if (cleanArray[i] > cleanArray[j]) {
        temp = cleanArray[j];
        cleanArray[j] = cleanArray[i];
        cleanArray[i] = temp;
      }
    }
  }
  return cleanArray[0];
}
let filterOut = function(array) {
  let newArray = [];
  let number = 0;

  for (let i = 0; i < array.length; i++) {
    number = parseInt(array[i]) + "";

    if (number !== "NaN") {
      newArray[newArray.length] = number * 1;
    }
  }

  return newArray;
};

console.log(findMaximum([NaN, 0, 15, false, -22, "", undefined, 47, null]));
