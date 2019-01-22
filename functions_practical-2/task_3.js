//3 Write a function that concatenates a given string n times (default is 1).
// "Ha" -> "Ha"
// "Ha", 3 -> "HaHaHa"

function concatenateString(someString, numOfTimes = 1) {
  let result = "";
  for (let i = 1; i <= numOfTimes; i++) {
    result += someString;
  }
  return result;
}
console.log(concatenateString("bla", 12));
