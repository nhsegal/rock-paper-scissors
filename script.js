const btns = document.querySelectorAll('button');
const result = document.querySelector('#this-round');
const score = document.querySelector('#score');
const final = document.querySelector('#final-result');


let yourScore = 0;
let computerScore = 0;

btns.forEach(btn => 
    {
        btn.addEventListener('click', ()=>displayResult(oneRound(btn.id, getComputerChoice())));
    }
)
 
function getComputerChoice() {
    let moves = ['rock', 'paper', 'scissors'];
    let pick = Math.floor(Math.random()*3);
    return moves[pick];
}

function oneRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            return 0;
        }
        else if (computerSelection == 'paper') {
            return -1;
        }
        else if (computerSelection == 'scissors') {
            return 1;
        }
    }
    else if (playerSelection == 'paper') {
        if (computerSelection == 'paper') {
            return 0;
        }
        else if (computerSelection == 'scissors') {
            return -1;
        }
        else if (computerSelection == 'rock') {
            return 1;
        }
    }
    else if (playerSelection == 'scissors') {
        if (computerSelection == 'scissors') {
            return 0;
        }
        else if (computerSelection == 'rock') {
            return -1;
        }
        else if (computerSelection == 'paper') {
            return 1;
        }
    }
    else {
        console.log("Error")
    }
}


function displayResult(v) {
    if (v === 0) {
        result.setAttribute('style', '-webkit-text-fill-color: yellow; -webkit-text-color: black;');
        result.innerHTML = "Tie!";
    }
    else if (v === 1) {      
        result.setAttribute('style', 'color: green;');
        result.innerHTML = "You Win!";
        yourScore++;
    }
    else if (v === -1) {
        result.setAttribute('style', 'color: red;');
        result.innerHTML = "You Lose!";
        computerScore++;
    }

    score.innerHTML = `Score: ${yourScore} to ${computerScore}`;

    if (yourScore >= 5) {
        final.innerHTML = "You won the match!";
        return;
    }
    else if (computerScore >=5) {
        final.innerHTML = "You lost the match!"
        return;
    }
    return;
}



function game(){
    let score = 0;
    for (let i = 0; i < 5; i++)  {
        let playerMove = prompt("What is your move?");
        let computerMove = getComputerChoice();
       
        switch (oneRound(playerMove, computerMove)) {
            case 0:
                console.log("Tie!");
                console.log(playerMove.slice(0,1).toUpperCase()+ playerMove.slice(1,playerMove.length).toLowerCase()+" ties "+ playerMove + "." );
                break;
            case 1:
                console.log("You win!");
                console.log(playerMove.slice(0,1).toUpperCase()+ playerMove.slice(1,playerMove.length).toLowerCase()+" beats "+ computerMove + "." );
                score++;
                break;
            case -1:
                console.log("You lose!");
                console.log(computerMove.slice(0,1).toUpperCase()+ computerMove.slice(1,computerMove.length).toLowerCase()+" beats "+ playerMove + "." )
                score--;
                break;
            default:
                console.log("Redo");
                let newMove = prompt("Enter a valid move:");
                oneRound(newMove, computerMove);
        }
       
    }
    if (score > 0) {
        console.log("You won the best of five rounds!")
    }
    else if (score < 0) {
        console.log("You lost the best of five rounds!")
    }
    else {
            console.log("You tied over five rounds!")
    }
}



//game();