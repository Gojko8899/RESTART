// Write a function that says whether a number is perfect.

// 28 -> 28 is a perfect number.

function perfectNumber(someNumber) {
  let num = 0;
  for (let i = 1; i <= someNumber; i++) {
    if (someNumber % i === 0) {
      num += i;
      //   console.log(num);
    }
  }
  if (num / 2 === someNumber) {
    console.log(someNumber + " num is perfect");
  } else {
    console.log("num is not perfect");
  }
}
perfectNumber(8128);
