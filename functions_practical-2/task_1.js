//1 Write a function to check whether the `input` is a string or not.

function stringOrNot(someInput) {
  if (typeof someInput === "string") {
    return true;
  } else {
    return false;
  }
}

console.log(stringOrNot(12));
