// Write a function to find the element that occurs most frequently.
array = [4, 1, 2, 3, 4, 5, 6, 5, 6, 8, 8, 4, 1, 4, 4];

function mostfrequentElement(someArray) {
  let mostfrequent;
  let index;
  let counter = 0;
  let temp;
  for (let i = 0; i < someArray.length; i++) {
    mostfrequent = someArray[i];
    for (let j = 0; j < someArray.length; j++) {
      if (mostfrequent === someArray[j]) {
        counter++;
        index = i;
      }
    }
  }
}
