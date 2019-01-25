// Write a function that takes a number and returns array of its digits.

function convertNumberToArray(someNumber) {
  let numToString = someNumber + "";
  let stringToNum;

  let newArray = [];
  for (let i = 0; i < numToString.length; i++) {
    stringToNum = parseInt(numToString[i]);

    newArray[newArray.length] = stringToNum;
  }
  return newArray;
}
console.log(convertNumberToArray(456796));
