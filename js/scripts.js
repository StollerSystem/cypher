$(document).ready(function() {



function capitalized(sentence) {
  let capSentence = sentence.charAt(0).toUpperCase() + sentence.charAt(sentence.length - 1).toUpperCase();
  let capLettersReversed = capReverse(capSentence);
  return capLettersReversed;

}

function capReverse(capSentence) {
  console.log(capSentence);
  let revSentence = capSentence.reverse();
  return revSentence;
}

const userInput = prompt("Enter a sentence:");

console.log(capitalized(userInput));
});