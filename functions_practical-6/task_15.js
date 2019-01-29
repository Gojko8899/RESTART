// Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:

// For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
// *********
// * Hello *
// * World *
// * in    *
// * a     *
// * frame *
// *********

function rectangularFrame(someArray) {
  let element = [];
  let temp = 9;
  let verticalLine = "";

  for (let i = 0; i < someArray.length; i++) {
    element = someArray[i];
    verticalLine += "* ";
    for (let j = 0; j < 9; j++) {
      verticalLine += element[j];
      if (element[j] === undefined) {
        console.log(verticalLine[j]);
      }
    }

    verticalLine += "\n";

    temp = "****";
  }

  console.log(verticalLine);
}
rectangularFrame(["Hello", "World", "in", "a", "frame"]);
