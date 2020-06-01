const startGameBtn = document.getElementById('start-game-btn');

const start = function () {
	console.log('Game is starting...');
};

// const person = {
// 	greet: function greet() {
// 		console.log('Hello there!');
// 	},
// };

// person.greet();

console.log(typeof start);

console.log(start);

console.dir(start);

startGameBtn.addEventListener('click', start);
