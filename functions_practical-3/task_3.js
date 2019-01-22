// 3 Write a program to filter out falsy values from the array.

// [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]

function filterOut(someArray) {
  let newArray = [];
  for (let i = 0; i < someArray.length; i++) {
    if (!someArray[i] === false) {
      newArray[newArray.length] = someArray[i];
    }
  }
  return newArray;
}

console.log(filterOut([NaN, 0, 15, false, -22, "", undefined, 47, null]));
