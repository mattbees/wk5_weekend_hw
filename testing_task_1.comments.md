### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.

```js
// Testing task 2 code:

// Carry out dynamic testing on the code below.
// Correct the errors below that you spotted in task 1.

var card = require('./card'); // The variable name 'card' should be capitalised as it requires in a class.

class CardGame{

  checkforAce(card){
    if(card = 1){ // The single equals sign will throw an error. This should be either == or ===. Also, '1' presumably should refer to card.value. 
      return true;
    }else{
      return false;
    } // By convention there should be a semi-colon here. Also true of lines 22, 26, 29, 30, 31, 39, 40, 41
  }

  highestCard(card1 card2){ // Missing comma between the arguments
    if(card1.value > card2.value){
      return card.name // Here 'card' would refer to the global var declared on line 12. This does not have a .name property.
    } // The 'else' clause should begin here on line 27 for readability.
    else{
      card2 // There is no method or return value in this statement.
    }
   }
 }  // This bracket is not needed and will cause an error.

  static.cardsTotal(cards){ // Unnecessary '.' after static keyword. This will throw an error.
    return total; // Total is not defined. This will throw an error. A return statement here will also block the remainder of the function.
    for(let card of cards){
      total += card.value; // Total is not defined.
      return "You have a total of " + total; // I don't think this is a valid return statement.
    }
  }
}

// To use this class elsewhere the following code is required:
// Module.exports = CardGame;

```
