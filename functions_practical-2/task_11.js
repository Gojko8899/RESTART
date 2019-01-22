// 11 Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.
// ["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]

function onlyNumbers(someArray) {
  let newArray = [];
  for (let i = 0; i < someArray.length; i++) {
    if (someArray[i] / someArray[i]) {
      newArray[newArray.length] = someArray[i] * 1;
    }
  }
  return newArray;
}
console.log(onlyNumbers(["1", "21", undefined, "42", "1e+3", Infinity, null]));
