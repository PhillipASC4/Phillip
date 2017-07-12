var playerChoice = "Paper";

    var compChoices = ["Rock", "Paper", "Scissors"]
    var compChoice = compChoices[Math.floor(Math.random()*3)]

   if (compChoice == playerChoice){
       console.log("it's a tie >:|");
  }

    if (compChoice == "Paper" && playerChoice == "Rock"){
        console.log("You Lose >:)");
    }    
    else if (compChoice == "Paper" && playerChoice == "Scissor"){
        console.log("You win >:[");
    }    
    else if (compChoice == "Scissors" && playerChoice == "Rock"){
        console.log("You won >:[");
    }

    else if (compChoice == "Scissors" && playerChoice == "Paper"){
        console.log("You lose >:)");
    }

     else if (compChoice == "Rock" && playerChoice == "Scissors"){
        console.log("You Lose >:)");
    }
    
    else if (compChoice == "Rock" && playerChoice == "Paper"){
        console.log("You win >:[");
    }
    