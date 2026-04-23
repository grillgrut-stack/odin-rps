function getComputerChoice(){
    let choice = Math.ceil(Math.random() * 3)
    if (choice === 3)
        {
            console.log(choice);
            return "Paper";
        }
    else if (choice === 2)
        {
            console.log(choice);
            return "Rock";
        }
    else 
        {
            console.log(choice);   
            return "Scissors";
        }
    
}

console.log(getComputerChoice());