//2 Write a function to check whether a string is blank or not.
// "My random string" -> false
// " " -> true
// 12 -> false
// false -> false

function isBlank(someInput) {
  if (someInput.length == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isBlank(""));
