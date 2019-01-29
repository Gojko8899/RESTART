// Write a function to find and return the first, middle and last element of an array if the array has odd number of elements.
//  If number of elements is even, return just the first and the last. In other cases (empty array), input array should be returned.

function firstLastMIddleElement(someArray = []) {
  let newArray = [];
  if (someArray.length === 0) {
    return newArray;
  } else if (someArray.length % 2 == 0) {
    newArray[newArray.length] = someArray[0];
    newArray[newArray.length] = someArray[someArray.length - 1];
  } else {
    newArray[newArray.length] = someArray[0];
    newArray[newArray.length] = someArray[(someArray.length - 1) / 2];
    newArray[newArray.length] = someArray[someArray.length - 1];
  }
  return newArray;
}
console.log(firstLastMIddleElement([null, NaN, Infinity]));
