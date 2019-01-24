// Write a program that displays all the combinations of two numbers between 1 and 7.
// Don't display two of the same numbers at the same time. Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).

function possibleCombinations() {
  let comb;
  let comb1;
  let numToCompareI;
  let numToCompareJ;

  for (let i = 1; i <= 7; i++) {
    numToCompareI = i;

    for (let k = 1; k <= 7; k++) {
      if (k !== i) {
        console.log(k + " ," + i);
      }
    }
  }
}
possibleCombinations();
