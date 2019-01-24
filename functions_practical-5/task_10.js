// Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
// Input:  17    | 15
// Output: true  | false
function isPrime(someNumber) {
  let num;
  let result;
  for (let i = 2; i < someNumber; i++) {
    num = someNumber / i;
    let roundNum = parseInt(num);
    if (roundNum * i === someNumber) {
      result = false;
      break;
    } else {
      result = true;
    }
  }
  return result;
}

console.log(isPrime(199));
