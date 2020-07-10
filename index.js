/*WAR
//deck of cards will be a class
//need two players
// need to deal cards 
//players will need array of objects. a radnom card from their hand
//whoever plays highest card gets a point
// 26 cards
create methods for deck like shuffle inside deck class. */

let player1 = []

let player2 = []

player1points = 0
player2points = 0

let deck = [2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14]

for(let i = 0; i < 52; i++){
  let randomCard = deck.splice(Math.floor(Math.random() * deck.length), 1)
  if(i % 2 == 0) {
    player1.push(randomCard)
  } else {
    player2.push(randomCard)
  }
}

console.log(player1);
console.log(player2);

for(let i = 0; i < 26; i++) {
  if(player1[i] > player2[i]) {
    player1points++
    console.log('Player1 won!', player1[i] + ' is more than ' + player2[i]);
  } else if (player2[i] > player1[i]) {
    player2points++
    console.log('Player2 won!', player2[i] + ' is more than ' + player1[i])
  } else {
    console.log('Tie!')
  }
}

console.log("Player 1 won" + ' ' + player1points + ' ' + "times.");
console.log("Player 2 won" + ' ' + player2points + ' ' + "times.");

if(player1points > player2points) {
  alert("Player 1 wins the WAR!");
} else if (player2points > player1points) {
  alert("Player 2 wins the WAR!")
} else {
  alert("It's a tie!")
}