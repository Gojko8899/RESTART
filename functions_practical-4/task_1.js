// Write a program that checks if a given element e is in the array a.
// Input:  e = 3, a = [5, -4.2, 3, 7]
// Output: yes

// Input:  e = 3, a = [5, -4.2, 18, 7]
// Output: no

function findAnElement(someArray, elem) {
  let result;
  for (let i = 0; i < someArray.length; i++) {
    if (elem === someArray[i]) {
      result = "yes";
      break;
    } else {
      result = "no";
    }
  }
  return result;
}
console.log(findAnElement([5, -4.2, 8, 18, 7], 3));
