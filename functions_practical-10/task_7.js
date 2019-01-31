// Write a function that filters elements of the given array so that they satisfy a condition given by the callback function.
// Input: [2, 8, 11, 4, 9, 3], callback function checks if the number is odd
// Output: [11, 9, 3]
function createArray(someArray, filterOdds) {
  let arrayOfOddNums = [];
  for (let i = 0; i < someArray.length; i++) {
    if (filterOdds(someArray[i])) {
      arrayOfOddNums[arrayOfOddNums.length] = someArray[i];
    }
  }

  return arrayOfOddNums;
}
let isOdd = function(number) {
  if (number % 2 !== 0) {
    return number;
  }
};
console.log(createArray([2, 8, 11, 4, 9, 3], isOdd));

var filter = function(elements, conditionChecker) {
  if (typeof conditionChecker !== "function") {
    return elements;
  }

  var filteredColection = [];

  for (var index in elements) {
    if (!conditionChecker(elements[index])) {
      continue;
    }

    filteredColection[filteredColection.length] = elements[index];
  }

  return filteredColection;
};

var filteredArray = filter([23, 5, 7, 42, 12], function(element) {
  return element >= 20;
});
console.log("\nFiltered array: ", filteredArray);
