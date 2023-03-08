// Generate a random word
let wordList = ["apple", "banana", "cherry", "orange", "peach", "pear"];
let word = wordList[Math.floor(Math.random() * wordList.length)];
console.log(word);

// Initialize the number of guesses and max number of guesses
let numGuesses = 0;
let maxGuesses = 3;

// Check if the guessed word is correct
function checkGuess() {
  let guess = document.getElementById("guess").value.toLowerCase();
  if (guess === word) {
    document.getElementById("feedback").innerHTML = "You guessed the word!";
    document.getElementById("guess").value = "";
    // add your action here
    alert("Congratulations, you guessed the word!");
  } else {
    numGuesses++;
    document.getElementById("feedback").innerHTML = "Incorrect guess. You have " + (maxGuesses - numGuesses) + " guesses left.";
    if (numGuesses >= maxGuesses) {
      document.getElementById("feedback").innerHTML = "Sorry, the word was " + word + ". Please guess a new word.";
      word = wordList[Math.floor(Math.random() * wordList.length)];
      console.log(word);
      numGuesses = 0;
    }
    document.getElementById("guess").value = "";
  }
}
