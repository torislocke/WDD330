const X_PLAYER = 'x';
const O_PLAYER = 'circle';
const restartButton = document.getElementById('restartButton');

restartButton.addEventListener('click', startGame);
// create an array's within an array to hold all the combinations that win
const WINNING_COMBINATIONS = [
	// horizontal combinations
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	// vertical combinations
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	// diagonal combinations
	[0, 4, 8],
	[2, 4, 6],
];
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
const board = document.getElementById('board');
const winningMessageElement = document.getElementById('winningMessage');
const cellElements = document.querySelectorAll('[data-cell]');
let circleTurn;

cellElements.forEach((cell) => {
	cell.addEventListener('click', handleClick, { once: true });
});

// call the start game function
startGame();

function startGame() {
	circleTurn = false;
	cellElements.forEach((cell) => {
		cell.classList.remove(X_PLAYER);
		cell.classList.remove(O_PLAYER);
		cell.removeEventListener('click', handleClick);
		cell.addEventListener('click', handleClick, {
			once: true,
		});
		setBoardHoverClass();
		winningMessageElement.classList.remove('show');
	});
}

function handleClick(e) {
	const cell = e.target;
	const currentClass = circleTurn ? O_PLAYER : X_PLAYER;
	placeMark(cell, currentClass);
	// continue to check if a x or o has won
	if (checkWin(currentClass)) {
		// if there is a winner trigger the endGame Function
		endGame(false);
	} else if (isDraw()) {
		endGame(true);
	} else {
		// call the swap turns function to swap turns between x and o
		swapTurns();
		// call the hover class after the swapTurns to show x or circle based on current characters turn
		setBoardHoverClass();
	}
}
function endGame(draw) {
	if (draw) {
		winningMessageTextElement.innerText = 'Draw!';
	} else {
		// ternary operator to check if o or x won
		winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`;
	}
	winningMessageElement.classList.add('show');
}

function isDraw() {
	return [...cellElements].every((cell) => {
		return cell.classList.contains(X_PLAYER) || cell.classList.contains(O_PLAYER);
	});
}

function placeMark(cell, currentClass) {
	cell.classList.add(currentClass);
}

//create the swap turns function - functions are hoisted so may be placed after the call - simple function toggles between circle and x

function swapTurns() {
	circleTurn = !circleTurn;
}

// create the hover state for the board
function setBoardHoverClass() {
	board.classList.remove(X_PLAYER);
	board.classList.remove(O_PLAYER);
	if (circleTurn) {
		board.classList.add(O_PLAYER);
	} else {
		board.classList.add(X_PLAYER);
	}
}

function checkWin(currentClass) {
	/// check if winning combination
	return WINNING_COMBINATIONS.some((combination) => {
		return combination.every((index) => {
			// check that every element has either an x or o
			// check each cell and its class
			return cellElements[index].classList.contains(currentClass);
		});
	});
}
