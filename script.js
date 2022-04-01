const choices= ['rock', 'paper','scissors']

function game(){
    playRound();
}

function playRound() {
    const playerSelection= playerChoice();
    const computerSelection= computerChoice();

}

function playerChoice() {

   let input = prompt("Type Rock, Paper, or Scissors");
   while(input == null){
       input = prompt("Type Rock, Paper, or Scissors");
   }
   input= input.toLowerCase();
   console.log(input);

}

function computerChoice(){
    return choices[Math.floor(Math.random()*choices.length)]

}


function validateInput(choice){
    if(choices.includes(choice)){
        return true;
    } else {
        return false;
    }


}

game();