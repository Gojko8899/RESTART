// Write a program that calculates the greatest common divisor of two integers. Note:
//  The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
// Input:  192 42 | 81 9
// Output: 6      | 9

function greatestCommonDivisor(numOne, numTwo) {
  let multiplicateNums = numOne * numTwo;
  let smallestCommon;
  let result;
  for (let i = 1; i <= 99999999; i++) {
    if (i % numOne === 0 && i % numTwo === 0) {
      smallestCommon = i;
      break;
    }
  }
  result = multiplicateNums / smallestCommon;
  return result;
}
console.log(greatestCommonDivisor(81, 9));
