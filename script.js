function getComputerChoice(){
    let choice = Math.ceil(Math.random() * 3)

    if (choice === 3)
        {
            return "paper";
        }

    else if (choice === 2)
        {
            return "rock";
        }

    else 
        {
            return "scissors";
        }
    
}

function getHumanChoice() 
    {
        let answer = prompt("Rock, Paper, Scissors?");
        answer = answer.toLowerCase();
        return answer;
    }


    function playGame() 
        {
            
        function playRound(humanChoice, computerChoice) 
            {
                if (humanChoice === "rock" && computerChoice === "paper") 
                    {
                        console.log("You lose! Paper beats Rocks.");
                        computerScore++;
                    }
                else if (humanChoice === "rock" && computerChoice === "scissors")
                    {
                        console.log("You win! Rock beats Scissors.");
                        humanScore++;
                    }
                else if (humanChoice === computerChoice)
                    {
                        console.log("Tie! Both picked the same");
                    }
                else if (humanChoice === "paper" && computerChoice === "rock")
                    {
                        console.log("You win! Paper beats rock.")
                        humanScore++;
                    }
                else if (humanChoice === "paper" && computerChoice === "scissors")
                    {
                        console.log("You lose! Scissors beats Paper.")
                        computerScore++;
                    }
                else if (humanChoice === "scissors" && computerChoice === "rock")
                    {
                        console.log("You lose! Rock beats Paper");
                        computerScore++;
                    }
                else if (humanChoice === "scissors" && computerChoice === "paper")
                    {
                        console.log("You win! Scissors beats Paper.");
                        humanScore++;
                    }
            }

            let humanScore = 0;
            let computerScore = 0;
            let game = 1;

            for (let i = 5; i > 0; i--)
                {
                    const humanSelection = getHumanChoice();
                    const computerSelection = getComputerChoice();
                    playRound(humanSelection, computerSelection);
                    
                    console.log("Game: " + game + " Human Score: " + humanScore + " Computer Score: " + computerScore)
                    ++game;
                }
        }
 
    playGame();



