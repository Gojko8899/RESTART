// Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements.
// 	Input: prograMming
// 	Output: progra**ing, 2

let replaceLetterM = (function(someWord) {
  let newWord = "";
  let counter = 0;
  for (let i = 0; i < someWord.length; i++) {
    if (someWord[i] === "m" || someWord[i] === "M") {
      newWord += "*";
      counter++;
    } else {
      newWord += someWord[i];
    }
  }
  return newWord;
})("prograMming");

console.log(replaceLetterM);

var transformedInput = (function(sentence) {
  var transformedSentence = "";
  var charOccurrence = 0;

  for (var charIndex in sentence) {
    if (sentence[charIndex].toLocaleLowerCase() !== "m") {
      transformedSentence += sentence[charIndex];
      console.log(transformedSentence);
      continue;
    }

    transformedSentence += "*";
    charOccurrence++;
  }

  return transformedSentence + ", " + charOccurrence;
})("prograMming");

console.log("\nSentence without 'M' and 'm': ", transformedInput);
