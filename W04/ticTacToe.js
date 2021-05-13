//  ------ retrieve HTML elements ---------
const board = document.getElementById('board');
const cellElements = document.querySelectorAll('[cell-test]');
const resetGame = document.getElementById('reset');
const restartGame = document.getElementById('restartGame');
const winningMessageTextElement = document.getElementById('winningText');
const winningMessageElement = document.getElementById('winningMessage');

//  ------- Build the game variables------
const playerX = 'x';
const playerO = 'circle';
let circleTurn;

// create an array's within an array to hold all the combinations that win
const combinationsToWin = [
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
//  ------------ Event Listeners -----------------
// clear the board when Reset Game button is clicked
resetGame.addEventListener('click', startGame);
// clear the board when Start Game button is clicked
restartGame.addEventListener('click', startGame);

// use touchend with event listener for touch screen and mouse ---
cellElements.forEach((cell) => {
	cell.addEventListener('touchend', handleClickorTap, { once: true });
	cell.addEventListener('click', handleClickorTap, { once: true });
});

// -- Functions are hoisted may be placed after the call back ----
// call the start game function
startGame();

function startGame() {
	circleTurn = false;
	cellElements.forEach((cell) => {
		cell.classList.remove(playerX);
		cell.classList.remove(playerO);
		cell.removeEventListener('click', handleClickorTap);
		cell.addEventListener('click', handleClickorTap, { once: true });
		// callback the setBoardHoverClass function
		setBoardHoverClass();
		winningMessageElement.classList.remove('show');
	});
}
// e = event this function looks at grid cell and places either an x or o based upon the current turn
function handleClickorTap(e) {
	const cell = e.target;
	// establish the currentClass as either an x or 0
	const currentClass = circleTurn ? playerO : playerX;
	// calls placeMark function
	placeMark(cell, currentClass);
	// continue to check if a x or o has won
	if (checkWin(currentClass)) {
		// if there is a winner call the endGame Function
		endGame(false);
	} else if (isDraw()) {
		endGame(true);
	} else {
		// call the swapTurns function to swap between x and o
		swapTurns();
		// call the hover class function after the swapTurns to show x or o based on current characters turn
		setBoardHoverClass();
		// due to touch need to prevent browsers default behavior
		e.preventDefault();
		return false;
	}
}
// ----------- function to print screen message if game is draw
function endGame(draw) {
	if (draw) {
		winningMessageTextElement.innerText = 'Draw!';
	} else {
		// ternary operator to check if o or x won
		winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`;
	}
	winningMessageElement.classList.add('show');
}
// --- using a spread operator ... to look through cellElements array and count (every) cell to determin if game is a draw --- //
function isDraw() {
	return [...cellElements].every((cell) => {
		return cell.classList.contains(playerX) || cell.classList.contains(playerO);
	});
}
//  function to look at grid cell and place current character
function placeMark(cell, currentClass) {
	cell.classList.add(currentClass);
}

//create the swap turns function -  - simple function toggles between circle and x

function swapTurns() {
	circleTurn = !circleTurn;
}

// create the hover state for the board callback in start game
function setBoardHoverClass() {
	board.classList.remove(playerX);
	board.classList.remove(playerO);
	if (circleTurn) {
		board.classList.add(playerO);
	} else {
		board.classList.add(playerX);
	}
}

function checkWin(currentClass) {
	/// check if winning combination
	return combinationsToWin.some((combination) => {
		return combination.every((index) => {
			// check that every element has either an x or o
			// check each cell and its class
			return cellElements[index].classList.contains(currentClass);
		});
	});
}
