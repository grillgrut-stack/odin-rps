function getComputerChoice(){
    let choice = Math.ceil(Math.random() * 3)

    if (choice === 3)
        {
            return "Paper";
        }

    else if (choice === 2)
        {
            return "Rock";
        }

    else 
        {
            return "Scissors";
        }
    
}

function getHumanChoice()
    {
        let answer = prompt("Rock, Paper, Scissors?");
        return answer;
    }

    let humanScore = 0;
    let computerScore = 0;
 


console.log(getHumanChoice());

