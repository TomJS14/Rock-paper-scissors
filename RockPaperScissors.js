const choices = ["Rock", "Paper", "Scissors"]
let playerSelection = ""
let computerSelection = ""

function getComputerChoice() {
    random = Math.floor(Math.random() * choices.length)
    computerSelection = choices[random].toLowerCase()
    return computerSelection
}

function playRound() {
    playerSelection = prompt("choose your weapon", "rock").toLowerCase()
    computerSelection = getComputerChoice()
    
    if (playerSelection === computerSelection) {
        return "It's a draw"; }
    else if ((playerSelection == "rock" && computerSelection == "scissors")||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
        return "You Win!";}
    else {
        return "You lose";
    }}


    function game () {
        let playerScore = 0
        let computerScore = 0
        
        for (let i = 0; i < 5; i++) {
            const result = playRound();
            if (result === "You Win!") {
                ++playerScore;
            }
            else if (result === "It's a draw") {
                playerScore == playerScore;
            }
            else {
                ++computerScore;
            }
            console.log(playerScore);
            console.log(computerScore);   
        }


        if (playerScore < computerScore) {
            console.log(`YOU LOSE!, Your score was ${playerScore} & the computers was ${computerScore}, you were beaten by ${computerScore - playerScore} points`)
            return `YOU LOSE!, Your score was ${playerScore} & the computers was ${computerScore}, you were beaten by ${computerScore - playerScore} points`
        }
        else if (playerScore > computerScore) {
            console.log(`YOU WIN!, Your score was ${playerScore} & the computers was ${computerScore}, you won by ${playerScore - computerScore} points`)
            return `YOU WIN!, Your score was ${playerScore} & the computers was ${computerScore}, you won by ${playerScore - computerScore} points`
        }
        else {
            console.log(`IT'S A DRAW! Your score was ${playerScore} & the computers was ${computerScore}, you won by ${playerScore - computerScore} points`)
            return `IT'S A DRAW! Your score was ${playerScore} & the computers was ${computerScore}`
        }

    }


    

