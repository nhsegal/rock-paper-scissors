function getComputerChoice() {
    let moves = ['rock', 'paper', 'scissors'];
    let pick = Math.floor(Math.random()*3);
    return moves[pick];
}

function oneRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();
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

game();