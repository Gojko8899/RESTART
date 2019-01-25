// Write a program that prints a multiplication table for numbers up to 12.

function multiplicationTable(numToCreateTable) {
  let verticalLIne = "";
  let horizontalLine = "";
  for (let i = 1; i <= numToCreateTable; i++) {
    verticalLIne += "\n";
    for (let j = 1; j <= numToCreateTable; j++) {
      verticalLIne += i * j + "\t";
    }
  }

  console.log(verticalLIne);
}
multiplicationTable(15);
