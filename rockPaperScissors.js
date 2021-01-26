let playChoices = ["rock","paper","scissors"];
let userPlay;

function computerPlay(){
    let computerPlay = playChoices[Math.floor(Math.random() * 3)];
    return computerPlay;
}

 function playRound(userPlay, computerPlay) {

   if ( userPlay === computerPlay) {
    document.getElementById('winnerOutput').innerHTML = "Tie Game";
  }
   else if ( userPlay === "rock" && computerPlay === "paper") {
    document.getElementById('winnerOutput').innerHTML = "Computer wins";
  }
  else if ( userPlay === "rock" && computerPlay === "scissors") {
    document.getElementById('winnerOutput').innerHTML = " You are the winner";
  }
 else if ( userPlay === "paper" && computerPlay === "scissors") {
    document.getElementById('winnerOutput').innerHTML = "Computer wins";
  }
  else if ( userPlay === "paper" && computerPlay === "rock") {
    document.getElementById('winnerOutput').innerHTML = " You are the winner";
  }
  else if ( userPlay === "scissors" && computerPlay === "rock") {
   document.getElementById('winnerOutput').innerHTML = "Computer wins";
  }
  else if ( userPlay === "scissors" && computerPlay === "paper") {
   document.getElementById('winnerOutput').innerHTML = " You are the winner";
  }
};
