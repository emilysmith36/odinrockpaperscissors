const prompt = require('prompt-sync')();
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
	let choice = Math.floor(Math.random() * 10);
	if (choice <= 3){
		return 'rock';
	}
	else if (3 < choice <= 6){
		return 'paper';
	}
	else if (6 < choice <= 9){
		return 'scissors';
	}
}

function getHumanChoice(){
	let humanChoice = prompt("Please enter a chocie", "rock");
	return humanChoice;
}

function playRound(humanChoice, computerChoice){
	humanChoice.toLowerCase();
	if (humanChoice === 'rock'){
		humanScore += 1;
	}
	else if (humanChoice === 'paper'){
		humanScore += 2;
	}
	else if (humanChoice === 'scissors'){
		humanScoree += 3;
	}
	if (computerChoice === 'rock'){
		computerScore += 1;
	}
	else if (computerChoice === 'paper'){
		computerScore += 2;
	}
	else if (computerChoice === 'scissors'){
		computerScore += 3;
	}

	if (computerScore > humanScore){
		console.log("computer is winner");
	}
	else if (computerScore == humanScore){
		console.log("tied");
	}
	else {
		console.log("human is winner");
	}
}

for (let i = 1; i <= 5; i++){
	console.log('round %d', i);
	const humanSelection = getHumanChoice();
	const computerSelection = getComputerChoice();
	playRound(humanSelection, computerSelection);
	console.log('human selection was %s ; computer selection was %s', humanSelection, computerSelection);
}
