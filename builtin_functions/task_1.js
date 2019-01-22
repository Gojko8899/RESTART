// // Write a function that converts an array of strings into an array of numbers. Filter out all non-numeric values.

// Input: ["1", "21", undefined, "42", "1e+3", Infinity]
// Output: [1, 21, 42, 1000]

function convert(someArray) {
  let newArray = [];
  for (let i = 0; i < someArray.length; i++) {
    if (isFinite(someArray[i])) {
      newArray[newArray.length] = someArray[i] * 1;
    }
  }
  return newArray;
}
console.log(convert(["1", "21", undefined, "42", "1e+3", Infinity]));
