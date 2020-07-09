/*WAR
//deck of cards will be a class
//need two players
// need to deal cards 
//players will need array of objects. a radnom card from their hand
//whoever plays highest card gets a point
// 26 cards
create methods for deck like shuffle inside deck class. */

let playerATurns =[];
let playerBTurns = [];

let playerAScore = 26;
let playerBScore = 26;

function shuffle() {
  var playerACard = Math.floor(Math.random() * 13 + 2);
  playerATurns.push(playerACard);
  console.log(playerATurns);

  var playerACardOutput = "";
  if(playerACard === 11) {
    playerACardOutput = "J";
  } else {
    if(playerACardOutput === 12) {
      playerACardOutput = "Q";
    } else {
      if(playerACardOutput === 13) {
        playerACardOutput = "K";
      } else {
        if(playerACardOutput === 14) {
          playerACardOutput = "A";
        } else {
          playerACardOutput = playerACard;
        }
      }
    }
  }
  
  var playerBCard = Math.floor(Math.random() * 13 + 2);
  playerBTurns.push(playerBCard);
  console.log(playerBTurns);

  var playerBCardOutput = "";
  if(playerBCard === 11) {
    playerBCardOutput = "J";
  } else {
    if(playerBCardOutput === 12) {
      playerBCardOutput = "Q";
    } else {
      if(playerBCardOutput === 13) {
        playerBCardOutput = "K";
      } else {
        if(playerBCardOutput === 14) {
          playerBCardOutput = "A";
        } else {
          playerBCardOutput = playerBCard;
        }
      }
    }
  }
  
  //Chars
  var playerBChar = Math.floor(Math.random() * 4 + 1);
  console.log("playerBChar " + playerBChar);

  switch(playerBChar) {
    case 1:
        playerBChar = "&hearts;";
    break;
    case 2:
        playerBChar = "&spades;"; 
    break;
    case 3:
        playerBChar = "&diamonds;";
    break;
    case 4:
        playerBChar = "&clubs;";
    break;
  }
  
  //Scores
  if (playerAcard === playerBCard) {
    ifequal();
  } else {
    if(playerACard > playerBCard) {
      playerAScore++;
      playerBScore--;
    } else {
      if(playerBCard > playerACard) {
        playerBScore++;
        playerAScore--;
      }
    }
  }
  
  console.log("player a score: " + playerAScore);
  console.log("player b score: " + playerBScore);

}

function ifequal() {
   var playerACard = Math.floor(Math.random() * 13 + 2);
  playerATurns.push(playerACard);
  console.log(playerATurns);

  var playerBCard = Math.floor(Math.random() * 13 + 2);
  playerBTurns.push(playerBCard);
  console.log(playerBTurns);

  if(playerACard === playerBCard) {
    ifequal();
  } else {
    if(playerACard > playerBCard) {
      playerAScore = playerAScore + 4;
      playerBScore = playerBScore - 4;
    } else {
      if(playerBCard > playerACard) {
        playerBScore = playerBScore + 4;
        playerAScore = playerAScore - 4;
      }
    }
  }

}

function checkingScores() {
  if(playerAScore <= 0) {
    playerAScore = 0;
    alert("Player B Win!");
  } else {
    if(playerBScore <= 0) {
      playerBScore = 0;
      alert("Player A Win!");
    }
  }
}