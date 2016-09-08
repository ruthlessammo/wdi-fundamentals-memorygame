//var cardOne = 'queen';
//var cardTwo = 'queen';
//var cardThree = 'king';
//var cardFour = 'king';

//if (cardOne === cardTwo) {
//	alert('You found a match!');	
//} else {
//  alert('Sorry, try again.');
//}


var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];


var board = document.getElementById('game-board');

function shuffle(cardsInPlay) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = cardsInPlay[currentIndex];
    cardsInPlay[currentIndex] = cardsInPlay[randomIndex];
    cardsInPlay[randomIndex] = temporaryValue;
  }

  return cardsInPlay;
}

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards)
		
		board.appendChild(cardElement);
		board.appendChild(cardElement);	
	}
} 

var isTwoCards = function () {
	cardsInPlay.push(this.getAttribute('data-card'));
		console.log(this.getAttribute('data-card'));
		if (this.getAttribute('data-card') === 'king') {
			this.innerHTML = "<img src='https://pixabay.com/static/uploads/photo/2013/07/13/13/45/playing-card-161489_960_720.png'>"; //KING			
		} else {
			this.innerHTML = "<img src='https://pixabay.com/static/uploads/photo/2013/07/13/13/45/playing-card-161488_960_720.png'>";
		}
	if(cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}



var isMatch = function(cards) {
	if (cards[0] === cards[1]) {
		alert("You have found a match!");
	} else {
		alert("Sorry, try again.");
	}
}
var refreshBoard = function() {
                location.reload();
         }

         document.addEventListener('keydown', refreshBoard);

         

createBoard();
