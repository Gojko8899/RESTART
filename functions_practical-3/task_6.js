// Write a function to create a specified number of elements with pre-filled numeric value array.

// 6, 0 -> [0, 0, 0, 0, 0, 0]
// 2, "none" -> ["none", "none"]
// 2 -> [null, null]

function createArray(howMuch, elem = null) {
  let newArray = [];
  for (let i = 1; i <= howMuch; i++) {
    newArray[newArray.length] = elem;
  }
  return newArray;
}

console.log(createArray(6, 0));
console.log(createArray(3, "none"));
console.log(createArray(2));
