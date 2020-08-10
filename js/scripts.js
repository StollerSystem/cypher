$(document).ready(function() {



function capitalized(sentence) {
  let concatLetters = sentence.slice(0, 1).toUpperCase().concat(sentence.slice(-1).toUpperCase());
  let reversedLetters = letterReverse(concatLetters);

  return reversedLetters;
}

function letterReverse(concatLetters) {
  let letterArray = concatLetters.split("").reverse().join("");
  return letterArray;
}

const userInput = prompt("Enter a sentence:");
console.log(capitalized(userInput));
});