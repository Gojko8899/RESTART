// Write a program to find the most frequent item of an array.

// [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

function mostFrequent(someArray) {
  let counter_Y = 0;
  let item;
  let temp = 0;
  let result;
  for (let i = 0; i < someArray.length; i++) {
    for (let j = 0; j < someArray.length; j++) {
      if (someArray[i] == someArray[j]) {
        counter_Y++;
      }
    }
    if (counter_Y > temp) {
      result = counter_Y;
    }
    if (counter_Y > temp) {
      temp = counter_Y;
      item = someArray[i];
    }
    counter_Y = 0;
  }
  console.log("the most frequent item is " + item + " ," + result + " times");
}
mostFrequent([
  3,
  "a",
  9,
  "a",
  "a",
  9,
  2,
  3,
  9,
  3,
  3,
  9,
  3,
  3,
  3,
  9,
  "a",
  "a",
  9,
  2,
  4,
  "a",
  9,
  3,
  9,
  9,
  9,
  9,
  9
]);
