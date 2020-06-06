// declare a variable to identify the 'start-game-btn' so the game can be initiated
const startGameBtn = document.getElementById('start-game-btn');

// define Global variables for the game
const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMPUTER_WINS = 'COMPUTER_WINS';

// set the State of the game to false prior to page load.
let gameIsRunning = false;

// declare a function to handle Player choice
const getPlayerChoice = function () {
	const selection = prompt(
		`${ROCK}, ${PAPER} or ${SCISSORS}?`,
		''
	).toUpperCase();
	if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
		alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
		return DEFAULT_USER_CHOICE;
	}
	return selection;
};

// declare a function to randomize Computer choice
const getComputerChoice = function () {
	const randomValue = Math.random();
	if (randomValue < 0.34) {
		return ROCK;
	} else if (randomValue < 0.67) {
		return PAPER;
	} else {
		return SCISSORS;
	}
};

// declare an Arrow function + ternary expression logic to determine the winner of the game
const getWinner = (cChoice, pChoice) => {
	return cChoice === pChoice
		? RESULT_DRAW
		: (cChoice === ROCK && pChoice === PAPER) ||
		  (cChoice === PAPER && pChoice === SCISSORS) ||
		  (cChoice === SCISSORS && pChoice === ROCK)
		? RESULT_PLAYER_WINS
		: RESULT_COMPUTER_WINS;
};

// const getWinner = (cChoice, pChoice) =>
// 	cChoice === pChoice
// 		? RESULT_DRAW
// 		: (cChoice === ROCK && pChoice === PAPER) ||
// 		  (cChoice === PAPER && pChoice === SCISSORS) ||
// 		  (cChoice === SCISSORS && pChoice === ROCK)
// 		? RESULT_PLAYER_WINS
// 		: RESULT_COMPUTER_WINS;

// declare a function using logic to determine the winner of the game
// const getWinner = function(cChoice, pChoice) {
// 	if (cChoice === pChoice) {
// 		return RESULT_DRAW;
// 	} else if (
// 		(cChoice === ROCK && pChoice === PAPER) ||
// 		(cChoice === PAPER && pChoice === SCISSORS) ||
// 		(cChoice === SCISSORS && pChoice === ROCK)
// 	) {
// 		return RESUlT_PLAYER_WINS;
// 	} else {
// 		return RESULT_COMPUTER_WINS;
// 	}
// };

// declare an anonymous function that listens for a click event and returns outputs using variables below
startGameBtn.addEventListener('click', () => {
	if (gameIsRunning) {
		return;
	}
	gameIsRunning = true;
	console.log('Game is starting...');
	const playerChoice = getPlayerChoice();
	const computerChoice = getComputerChoice();
	const winner = getWinner(computerChoice, playerChoice);
	console.log(winner);
	let message = `You picked ${playerChoice}, computer picked ${computerChoice}, therefore you `;
	if (winner === RESULT_DRAW) {
		message = message + 'had a draw.';
	} else if (winner === RESULT_PLAYER_WINS) {
		message = message + 'won.';
	} else {
		message = message + 'lost.';
	}
	// declare an alert message to the user/ player about the result of the game.
	alert(message);
	gameIsRunning = false;
});
