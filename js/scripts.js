$(document).ready(function() {
//2
function capitalized(sentence) {
  let concatLetters = sentence.slice(0, 1).toUpperCase().concat(sentence.slice(-1).toUpperCase());
  let reversedLetters = letterReverse(concatLetters);
  return reversedLetters;
}
//3
function letterReverse(concatLetters) {
  let letterArray = concatLetters.split("").reverse().join("");
  return letterArray;
}
//1
function sentenceConcat(userInput) {
  let newSentence = userInput.concat(capitalized(userInput))

  let sentenceStart = sentenceDivide(userInput);
  let finalSentence = sentenceStart.concat(newSentence);

  return newSentence;
}

function sentenceDivide(userInput) {
  let midLetterIndex = userInput.length / 2
  let midLetterRound = parseInt(midLetterIndex);
  let middleLetter = charAt(midLetterRound);
  return middleLetter;
}

const userInput = prompt("Enter a sentence:");
console.log(sentenceConcat(userInput));
});