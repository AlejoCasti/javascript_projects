/*
getUserChoice - set user choice to lower case
Return: User choice
*/
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
    return userInput;
  }
  else{
    console.log('Error: This is not an option');
  }
}
/*
getUserChoice - get a random chice from computer
Return: computer choice
*/
const getComputerChoice = () => {
  switch (Math.floor(Math.random() * 3)){
    case 0:
      return 'scissors';
      break;
    case 1:
      return 'rock';
      break;
    case 2:
      return 'paper';
      break;
  }
}
/*
getUserChoice - determine winner 
Return: string to print with the win
*/
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return 'Tie';
  }
  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'Computer won';
    }
    else{
      return 'You won';
    }
  }
  else if(userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'Computer won';
    }
    else{
      return 'You won';
    }
  }
  else if(userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'Computer won';
    }
    else{
      return 'You won';
    }
  }
}
/*
playGame - start game
*/
function playGame(){
  //if you want to change user choice, just write what you want in the word ROCK
  userChoice = getUserChoice('ROCK');
  computerChoice = getComputerChoice();
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
