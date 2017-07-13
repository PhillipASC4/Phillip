var playerChoice = "Rock";

    var compChoices = ["Rock", "Paper", "Scissors"]
    var compChoice = compChoices[Math.floor(Math.random()*3)]

   if (compChoice == playerChoice){
       console.log("it's a tie >:|", compChoice, "and", playerChoice, "are friends :)!!!");
  }

    if (compChoice == "Paper" && playerChoice == "Rock"){
        console.log("You Lose >:), Paper beats Rock");
    }    
    else if (compChoice == "Paper" && playerChoice == "Scissor"){
        console.log("You win >:[, Scissors beat Paper");
    }    
    else if (compChoice == "Scissors" && playerChoice == "Rock"){
        console.log("You won >:[, Scissors beat Rock");
    }

    else if (compChoice == "Scissors" && playerChoice == "Paper"){
        console.log("You lose >:), Scissors beat Paper");
    }

     else if (compChoice == "Rock" && playerChoice == "Scissors"){
        console.log("You Lose >:), Paper beats Rocks");
    }
    
    else if (compChoice == "Rock" && playerChoice == "Paper"){
        console.log("You win >:[, Paper beats rock");
    }