// Write a function to find a word within a string.

// 'The quick brown fox', 'fox' -> "'fox' was found 1 times"
// 'aa, bb, cc, dd, aa', 'aa' -> "'aa' was found 2 times"

function findAWord(someString, someWord) {
  let counter_X = 0;
  let counter_Y = 0;

  for (let i = 0; i < someString.length; i++) {
    if (someString[i] == someWord[0]) {
      for (let j = i; j < i + someWord.length; j++) {
        if (someString[j] == someWord[j - i]) {
          counter_Y++;
        }
        if (counter_Y === someWord.length) {
          counter_X++;
        }
      }
    }
    counter_Y = 0;
  }
  return "'" + someWord + "'" + "was found " + counter_X + " times!";
}
console.log(findAWord("The quick brown fox", "fox"));
