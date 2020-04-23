function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function roundResultDisplay(pPlayerSelection, pComputerSelection, playerWon, tie=true,) {
    if (tie) {
        return `round was a tie. both chose ${pPlayerSelection}`;
    } else if (playerWon){
        return `player won the round. they played ${pPlayerSelection}, computer played ${pComputerSelection}`;
    } else {
        return `player lost the round. they played ${pPlayerSelection}, computer played ${pComputerSelection}`;
    }
}

function roundResult(pPlayerSelection, pComputerSelection) {
    if (pPlayerSelection === pComputerSelection) return "tie";

    if (pPlayerSelection == "rock") {
        return pComputerSelection == "scissors" ? true : false;
    } else if (pPlayerSelection == "paper") {
        return pComputerSelection == "rock" ?  true : false;
    } else if (pPlayerSelection == "scissors") {
        return pComputerSelection == "paper" ? true : false;
    }

}

function playRound() {
    let container = document.querySelector("#container");

    let vComputerSelection = computerPlay();
    let vPlayerSelection = this.id;
    let resultDisplay;
    let result = roundResult(vPlayerSelection, vComputerSelection);
    if(result == "tie") {
        resultDisplay = roundResultDisplay(vPlayerSelection, vComputerSelection);
    } else if (result === true) {
        resultDisplay = roundResultDisplay(vPlayerSelection, vComputerSelection, true, false);
        playerScore++;
    } else {
        resultDisplay = roundResultDisplay(vPlayerSelection, vComputerSelection, false, false);
        computerScore++;
    }
    let showRoundResult = document.querySelector("#round-result");
    showRoundResult.textContent = `round result: ${resultDisplay}`;

    document.getElementById("player-score").textContent = `Player Score: ${playerScore}`;
    document.getElementById("computer-score").textContent = `Computer Score: ${computerScore}`;

    if (playerScore === 5) {
        let gameResult = document.createElement("h1");

        gameResult.textContent = "Player Wins! Game Over";
        container.appendChild(gameResult);
        let btns = document.querySelectorAll("button");
        btns.forEach(button => button.removeEventListener("click", playRound));
    } else if (computerScore == 5) {
        let gameResult = document.createElement("h1");

        gameResult.textContent = "Computer Wins! Game Over";
        container.appendChild(gameResult);
        let btns = document.querySelectorAll("button");
        btns.forEach(button => button.removeEventListener("click", playRound));
    }
}

function game() {
    document.querySelector("#reset").addEventListener("click", function() {
        window.location.reload();
    });
    const btns = document.querySelectorAll("button");
    btns.forEach(button => button.addEventListener("click",playRound));
    
}

let playerScore = 0;
let computerScore = 0;
game();