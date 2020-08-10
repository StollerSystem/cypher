$(document).ready(function() {
// BUSINESS LOGIC
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
  // let newSentence = userInput.concat(capitalized(userInput))
  // let sentenceStart = sentenceDivide(userInput);
  // let finalSentence = sentenceStart.concat(newSentence);
  let finalSentence = sentenceDivide(userInput).concat(userInput.concat(capitalized(userInput))).split("").reverse().join("");

  //let reversedFinalSentence = finalSentence.split("").reverse().join("");
  return finalSentence;
}
//4
function sentenceDivide(userInput) {
  let midLetterIndex = userInput.length / 2
  let midLetterRound = parseInt(midLetterIndex);
  let middleLetter = userInput.charAt(midLetterRound);
  return middleLetter;
}
//const userInput = prompt("Enter a sentence:");


// USER INTERFACE
$("#formOne").submit(function(event) {
  const userInput = $("input#user-input").val();
  //console.log(sentenceConcat(userInput));
  event.preventDefault();

  $(".finalSentence").append(sentenceConcat(userInput));
  $(".finalSentence").show();
})
});


