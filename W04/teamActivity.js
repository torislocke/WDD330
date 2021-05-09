class TicTacToeGame {
	constructor(yourCharacter, yourLocation) {
		this.yourCharacter = yourCharacter;
		this.yourLocation = yourLocation;
	}
	chooseCharacter() {
		console.log(`You have selected ${yourCharacter} and the ${yourLocation}.`);
	}
}

let firstGame = new TicTacToeGame('X', 1);
console.log(firstGame);
firstGame.chooseCharacter();
