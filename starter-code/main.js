//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";
//if (cardOne === cardTwo) {
//  alert("You found a match!");
//} else {
//alert("Sorry, try again");
//};
var board = document.getElementById('game-board');

function createBoard() {

	for (var i = 0; i < 4; i++) {

		var cardElement = document.createElement('div');

		cardElement.className = 'card';
		
		board.appendChild(cardElement);
	}
} 
createBoard();

