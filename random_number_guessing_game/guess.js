function guess() {
	var number = Math.floor(Math.random() * 100) + 1;
	var userGuess = document.getElementById("userGuess").value;

	if (userGuess == number) {
		document.getElementById("result").innerHTML = "Congratulations! You guessed the number!";
	} else if (userGuess > number) {
		document.getElementById("result").innerHTML = "Too high! Guess again!";
	} else if (userGuess < number) {
		document.getElementById("result").innerHTML = "Too low! Guess again!";
	}
}

function toggleDarkMode() {
	var body = document.body;
	var toggleButton = document.getElementById("toggleButton");
	if (body.classList.contains("dark-mode")) {
		body.classList.remove("dark-mode");
		toggleButton.innerHTML = '<span class="icon">&#9788;</span><span class="text">Toggle Dark Mode</span>';
	} else {
		body.classList.add("dark-mode");
		toggleButton.innerHTML = '<span class="icon">&#9728;</span><span class="text">Toggle Light Mode</span>';
	}
}
