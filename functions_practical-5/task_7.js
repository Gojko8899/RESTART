// Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them.
// Print it out in the console.
// Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]
// Output: AnStJoJoDaMa

function createStringFromElements(someArray) {
  let newString = "";
  let element;
  for (let i = 0; i < someArray.length; i++) {
    element = someArray[i];
    if (element.length >= 2) {
      console.log(element);
      for (let j = 0; j < 2; j++) {
        newString += element[j];
      }
    }
  }
  return newString;
}
console.log(
  createStringFromElements([
    "M",
    "Anne",
    12,
    "Steve",
    "Joe",
    "John",
    "David",
    "Mark",
    true,
    "A"
  ])
);
