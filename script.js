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


    let computerScore = 0;
    let humanScore = 0;




        function playRound(humanChoice, computerChoice) 
            {
                const cons = document.querySelector("#cons");


                    if (humanChoice === "rock" && computerChoice === "paper") 
                        {
                            cons.textContent = "You lose! Paper beats Rocks.";
                            computerScore++;
                        }
                    else if (humanChoice === "rock" && computerChoice === "scissors")
                        {
                            cons.textContent = "You win! Rock beats Scissors.";
                            humanScore++;
                            
                        }
                    else if (humanChoice === computerChoice)
                        {
                            cons.textContent = "Tie! Both picked the same";
                        }
                    else if (humanChoice === "paper" && computerChoice === "rock")
                        {
                            cons.textContent = "You win! Paper beats rock."
                            humanScore++;
                        }
                    else if (humanChoice === "paper" && computerChoice === "scissors")
                        {
                            cons.textContent = "You lose! Scissors beats Paper."
                            computerScore++;
                        }
                    else if (humanChoice === "scissors" && computerChoice === "rock")
                        {
                            cons.textContent = "You lose! Rock beats Paper";
                            computerScore++;
                        }
                    else if (humanChoice === "scissors" && computerChoice === "paper")
                        {
                            cons.textContent = "You win! Scissors beats Paper.";
                            humanScore++;
                        }
                }




 
    const computer = document.querySelector("#computer");
    computer.textContent = "Computer Score: " + computerScore;

    const human = document.querySelector("#human");
    human.textContent = "Human Score: " + humanScore;


    

    const rock = document.querySelector("#rock");
    rock.addEventListener("click",  () => {
        if (humanScore < 5 && computerScore < 5) {
            playRound("rock", getComputerChoice());
        } 
    
        if (humanScore === 5) {
            cons.textContent = "Player Wins!";
        } else if (computerScore === 5) {
            cons.textContent = "Computer Wins!"
        }
        
        computer.textContent = "Computer Score: " + computerScore;
        human.textContent = "Human Score: " + humanScore;
    });



    const paper = document.querySelector("#paper");
    paper.addEventListener("click", () => {
        if (humanScore < 5 && computerScore < 5) {
            playRound("paper", getComputerChoice());
        } 

        if (humanScore === 5) {
            cons.textContent = "Player Wins!";
        } else if (computerScore === 5) {
            cons.textContent = "Computer Wins!"
        }

        computer.textContent = "Computer Score: " + computerScore;
        human.textContent = "Human Score: " + humanScore;
    });



    const scissors = document.querySelector("#scissors");
    scissors.addEventListener("click", () => {
        if (humanScore < 5 && computerScore < 5) {
            playRound("scissors", getComputerChoice());
        } 
        
        if (humanScore === 5) {
            cons.textContent = "Player Wins!";
        } else if (computerScore === 5) {
            cons.textContent = "Computer Wins!"
        }

        computer.textContent = "Computer Score: " + computerScore;
        human.textContent = "Human Score: " + humanScore;
    });

    




