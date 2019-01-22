// 8
// Write a function that accepts a number as a parameter and checks if the number is prime or not.
// Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function primeOrNot(someNumber) {
  if (
    someNumber % 2 == 0 ||
    someNumber % 3 == 0 ||
    someNumber == 1 ||
    someNumber == 2
  ) {
    console.log("number is not a prime");
  } else {
    console.log("number is prime");
  }
}
primeOrNot();
