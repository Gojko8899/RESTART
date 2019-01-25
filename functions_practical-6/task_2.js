// Write a function that combines two arrays by alternatingly taking elements.

// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

function intervineArrays(arrayOne, arrayTwo) {
  let newArray = [];
  for (let i = 0, j = 0; i < arrayOne.length, j < arrayTwo.length; i++, j++) {
    newArray[newArray.length] = arrayOne[i];
    newArray[newArray.length] = arrayTwo[j];
  }
  return newArray;
}
console.log(intervineArrays(["a", "b", "c"], [1, 2, 3]));
