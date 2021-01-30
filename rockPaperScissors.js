var playChoices = ["rock", "paper", "scissors"];
var computerSelection = computerPlay();
var userSelection;


        //Return a random choice from array playChoices
        function computerPlay(){
            let computerPlay = playChoices[Math.floor(Math.random() * 3)];
            return computerPlay;
        }

        function playRound(userPlay, computerSelection){
            if (userPlay === computerSelection) {
                console.log("Tie Game");
                document.getElementById('winner-output').innerHTML = "Tie Game";
            }
            else if (userPlay === "rock" && computerSelection === "scissors") {
                console.log("Player Wins");
                document.getElementById('winner-output').innerHTML = "Player Wins!";
            }
            else if (userPlay === "rock" && computerSelection === "paper") {
                console.log("CPU Win");
                document.getElementById('winner-output').innerHTML = "CPU Wins!";
            }
            else if (userPlay === "scissors" && computerSelection === "paper") {
                console.log("Player Wins");
                document.getElementById('winner-output').innerHTML = "Player Wins!";
            }
            else if (userPlay === "scissors" && computerSelection === "rock") {
                console.log("CPU Win");
                document.getElementById('winner-output').innerHTML = "CPU Wins!";
            }
            else if (userPlay === "paper" && computerSelection === "rock") {
                console.log("Player Wins");
                document.getElementById('winner-output').innerHTML = "Player Wins!";
            }
            else if (userPlay === "paper" && computerSelection === "scissors") {
                console.log("CPU Win");
                document.getElementById('winner-output').innerHTML = "CPU Wins!";
            }
            else{
                console.log("Something doesn't feel right");
                document.getElementById('winner-output').innerHTML = "Game Broken";
            }
        }
