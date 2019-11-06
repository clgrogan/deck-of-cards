const main = () => {
  console.log('Print this on page load.')
  buildDeck()
  shuffleDeck()
}

const deckOfCards = []
let cardsRemaining = 52

// ====================================
// Functions - generally speaking
// ====================================
const buildDeck = () => {
  let deckIndex = 0
  const cardSuits = ['Clubs', 'Spades', 'Hearts', 'Diamonds']
  const cardValue = [
    'Ace',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Jack',
    'Queen',
    'King'
  ]
  for (let iSuits = 0; iSuits <= cardSuits.length - 1; iSuits++) {
    for (let iCardValue = 0; iCardValue <= cardValue.length - 1; iCardValue++) {
      deckOfCards[deckIndex] =
        cardValue[iCardValue] + ' of ' + cardSuits[iSuits]

      console.log(deckOfCards[deckIndex])
      deckIndex++
    }
  }

  console.log(deckOfCards.length)
}

const shuffleDeck = () => {
  let randomInt = 0
  let currentCard = ''
  for (let i = 0; i <= deckOfCards.length - 1; i++) {
    randomInt = Math.floor(Math.random() * deckOfCards.length)
    currentCard = deckOfCards[i]
    deckOfCards[i] = deckOfCards[randomInt]
    deckOfCards[randomInt] = currentCard
  }
}

// This function deals a card from the deck
// Add the card to the player's hand
// Remove the card from the deck
const dealCard = () => {
  const topCardIndex = deckOfCards.length - 1

  // Add Card to Hand
  document.querySelector('.card-dealt').textContent = deckOfCards[topCardIndex]
  console.log(topCardIndex)
  const mySection = document.createElement('section')
  mySection.textContent = deckOfCards[topCardIndex]

  // Place Section With Dealt Card Into Hand
  if (cardsRemaining > 0) {
    if (topCardIndex % 2) {
      document.querySelector('.hand-one').appendChild(mySection)
    } else {
      document.querySelector('.hand-two').appendChild(mySection)
    }

    // Delete Card from Deck
    deckOfCards.splice(topCardIndex, 1)
    cardsRemaining--
    document.querySelector('.deck').textContent =
      cardsRemaining + ' Cards Remaining in Deck'
  }
}

// ============================ //
// Listeners
// ============================ //
document.addEventListener('DOMContentLoaded', main)
document.querySelector('.deck').addEventListener('click', dealCard)
