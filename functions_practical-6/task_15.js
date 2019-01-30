// Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********
rectangularFrame([
  "moja",
  "plava",
  "sveska",
  "je",
  "u",
  "stvari",
  "ljubicasta"
]);
function rectangularFrame(someArray) {
  let element = [];
  let beginAndFinishLine = creatFirstAndLastLine(someArray);
  let verticalLine = "";
  let finalVerticalLIne = "";

  for (let i = 0; i < someArray.length; i++) {
    element = someArray[i];
    verticalLine = "* ";

    for (let j = 0; j < beginAndFinishLine.length - 2; j++) {
      if (j === beginAndFinishLine.length - 3) {
        verticalLine += "*";
      } else if (element[j] === undefined) {
        verticalLine += " ";
      } else {
        verticalLine += element[j];
      }
    }

    finalVerticalLIne += verticalLine + "\n";
    verticalLine = "* " + "\n";
    temp = "****";
  }

  console.log(
    beginAndFinishLine + "\n" + finalVerticalLIne + beginAndFinishLine
  );
}
function creatFirstAndLastLine(arrayToCheck) {
  let longestWord;
  let firstAndLastLine = "";
  let stars = "****";

  let temp = 0;
  for (let k = 0; k < arrayToCheck.length; k++) {
    longestWord = arrayToCheck[k];
    for (let c = 0; c < longestWord.length; c++) {
      stars += "*";
    }
    if (stars.length > firstAndLastLine.length) {
      firstAndLastLine = stars;
    }
    stars = "****";
  }
  return firstAndLastLine;
}
