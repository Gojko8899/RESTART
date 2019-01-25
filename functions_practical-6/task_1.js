// Write a function to count vowels in a provided string. If you are  not aware of indexOf function, try to use switch statement.
// Vowels are a, e, i, o, and u as well as A, E, I, O, and U.

function countVowels(someString) {
  let counter = 0;
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let vowel = "";
  for (let i = 0; i < vowels.length; i++) {
    vowel = vowels[i];
    console.log(vowel);

    for (let j = 0; j < someString.length; j++) {
      if (vowel === someString[j]) {
        counter++;
      }
    }
  }
  return counter;
}
console.log(countVowels("anavolimilovana"));

let result = countVowels("anavolimilovanaaaa");
console.log(result);

function countVowels(someString) {
  let count = 0;
  let letter = "";
  for (let i = 0; i < someString.length; i++) {
    letter = someString[i];
    switch (letter.toLowerCase()) {
      case "a":
        count++;
        break;
      case "e":
        count++;
        break;
      case "i":
        count++;
        break;
      case "o":
        count++;
        break;
      case "u":
        count++;
        break;
    }
  }
  return count;
}
