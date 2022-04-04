const choices= ['rock', 'paper','scissors']
const winners=[];

function game(){
   for(let i = 1; i<= 5; i++){
       playRound();

   }
   logWins();
}

function playRound() {
    const playerSelection= playerChoice();
    const computerSelection= computerChoice();
    console.log(computerSelection);
    const winner = checkWinner(playerSelection, computerSelection);
    console.log(winner);
    winners.push(winner);

}

function playerChoice() {

   let input = prompt("Type Rock, Paper, or Scissors");
   while(input == null){
       input = prompt("Type Rock, Paper, or Scissors");
   }
   input= input.toLowerCase();
   let check = validateInput(input)
   while (check == false){
      input = prompt("Type Rock, Paper or Scissors. Spelling needs to be exact but capitalization doesnt matter");
      while(input == null){
        input = prompt("Type Rock, Paper, or Scissors");
    }
      
      input = input.toLowerCase()
      check = validateInput(input);
   }
    return input;

}

function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)]

}


function validateInput(choice){
   return choices.includes(choice);
    }


function checkWinner(choiceP,choiceC){
    if(choiceP === choiceC){
        return 'tie';
    }   else if ((choiceP === 'rock' && 'scissors')|| 
        (choiceP === 'paper' && 'rock')|| 
        (choiceP === 'scissors' && 'paper')){
        return 'player';
    }   else {
        return "computer"
    }

}

function logWins(){
    let playerWins = winners.filter((item) => item == "player").length;
    let computerWins = winners.filter((item) => item == "computer").length;
    let ties = winners.filter((item)=> item == "tie").length;
    console.log('Results:');
    console.log ('player wins:', playerWins);
    console.log('computer wins:', computerWins)
    console.log('Ties:', ties);
}

game();