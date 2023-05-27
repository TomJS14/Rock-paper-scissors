let playerSelection = ""
let computerSelection = ""
let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll("button");

const selection = document.querySelectorAll("button");
    selection.forEach((button) => {
        button.addEventListener("click", () => {
            playerSelection = button.id;
        });
    });

//selects all elements with the type button then a function that loops through all buttons, listens for a click and then triggers alert function on the click then Triggers the play round function
buttons.forEach((button) =>  {
    button.addEventListener("click", playRound)
});

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound() {  
    computerSelection = getComputerChoice()  //Invoke the function to get the computer choice
    const message = document.getElementById("roundResult")
    message.classList.add("message-transition")
    
    if (playerSelection === computerSelection) { 
        result = `It's a draw, you both chose ${playerSelection}`;
        message.textContent = result;

    } else if ((playerSelection == "Rock" && computerSelection == "Scissors")||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")) {
        ++playerScore
        result = `You win! ${playerSelection} beats ${computerSelection}`;
        message.textContent = result;
        message.classList.toggle("message-transition");
        
    }
    else {
        ++computerScore
        result = `You Lose! ${playerSelection} loses to ${computerSelection}`;
        message.textContent = result;
        
    }

    const yourScore = document.getElementById("yourScore")
    const theirScore = document.getElementById("theirScore")
    yourScore.textContent = playerScore
    theirScore.textContent = computerScore
    message.setAttribute("style", "color: black;")

    if (playerScore === 5) {
        message.setAttribute("style", "color: lime; text-wrap: wrap")
        message.textContent = "You Won! Press any button to restart"
        playerScore = 0
        computerScore = 0
        
        
    }
    else if (computerScore === 5) {
        message.setAttribute("style", "color: red;")
        message.textContent = "You Lost! Press any button to restart"
        computerScore = 0
        playerScore = 0;
        
        
    }

    

};


    
