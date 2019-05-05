const CardGame = require('../testing_task_2');
const Card = require('../card');

describe('CardGame', () => {

  let cardGame;
  let card;

  beforeEach(() => {
    cardGame = new CardGame();
    card1 = new Card('spades', 1);
    card2 = new Card('hearts', 7);
    card3 = new Card('clubs', 9);
    cards = [ card1, card2, card3 ];
  });

  test('Should be able to check whether the card is an Ace', () => {
    const result = cardGame.checkforAce(card1);
    expect(result).toBe(true);
  });

  test('Should be able to return the highest of two cards', () => {
    const result = cardGame.highestCard(card1, card2);
    expect(result).toBe(card2);
  });

  test('Should be able to return the total value of all cards held', () => {
    const result = cardGame.cardsTotal(cards);
    expect(result).toBe("You have a total of 17");
  });

});
