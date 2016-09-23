var board = document.querySelector('#game-board');

// Memory game cards
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

// Construct board
createCards(board);

// Create HTML elements representing cards
function createCards(board) {
  for (var i = 0; i < cards.length; i++) {
    var card = document.createElement('div');

    // Assign attributes and event handlers
    card.className = 'card';
    card.setAttribute('data-card', cards[i]);
    card.addEventListener('click', isTwoCards);

    // Add card to DOM
    board.appendChild(card);
  }
}

// Check to see if there are cards in play
function isTwoCards() {
  var selectedCard = this.getAttribute('data-card');
  // Display selected card image
  this.innerHTML = '<img src="../images/' + selectedCard + '.png"' +
    ' alt="' + selectedCard + '"/>';

  // Add selected card to cards in play
  cardsInPlay.push(selectedCard);

  // If two cards in play check for a match and reset collection
  // Delay check until DOM is updated
  setTimeout(function() {
    if (cardsInPlay.length === 2) {
      isMatch(cardsInPlay);
      cardsInPlay = [];
    }
  }, 10);
}

// Notify user if selected cards match
function isMatch(cardsInPlay) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert('You found a match!');
  }
  else {
    alert('Sorry, try again.');
  }

  // Clear card images
  var cardElements = document.querySelectorAll('.card');
  for (var i = 0; i < cardElements.length; i++) {
    cardElements[i].innerHTML = '';
  }
}
