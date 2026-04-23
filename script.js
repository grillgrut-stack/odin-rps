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


    function playGame() 
        {
            
        function playRound(humanChoice, computerChoice) 
            {
                if (humanChoice === "Rock" && computerChoice === "Paper") 
                    {
                        console.log("You lose! Paper beats Rocks.");
                        computerScore++;
                    }
                else if (humanChoice === "Rock" && computerChoice === "Scisccor")
                    {
                        console.log("You win! Rock beats Scissors.");
                        humanScore++;
                    }
                else if (humanChoice === computerChoice)
                    {
                        console.log("Tie! Both picked the same");
                    }
                else if (humanChoice === "Paper" && computerChoice === "Rock")
                    {
                        console.log("You win! Paper beats rock.")
                        humanScore++;
                    }
                else if (humanChoice === "Paper" && computerChoice === "Scissors")
                    {
                        console.log("You lose! Scissors beats Paper.")
                        computerScore++;
                    }
                else if (humanChoice === "Scissors" && computerChoice === "Rock")
                    {
                        console.log("You lose! Rock beats Paper");
                        computerScore++;
                    }
                else if (humanChoice === "Scissors" && computerChoice === "Paper")
                    {
                        console.log("You win! Scissors beats Paper.");
                        humanScore++;
                    }
            }

            let humanScore = 0;
            let computerScore = 0;

            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();


        }
 



