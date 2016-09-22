// Memory game cards
var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

// Pick cards
var firstPick = cardOne;
var secondPick = cardTwo;

// Display whether user selected cards are a match
/*
if (firstPick === secondPick) {
  alert('You found a match!');
}
else {
  alert('Sorry, try again.');
}
*/

// Construct board
createCards();

// Create HTML elements representing cards
function createCards() {
  var board = document.querySelector('#game-board');

  for (var i = 0; i < 4; i++) {
    var card = document.createElement('div');
    card.className = 'card';
    board.appendChild(card);
  }
}
