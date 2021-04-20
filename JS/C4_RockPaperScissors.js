function rps(yourChoice) {
	let humanChoice = yourChoice.id;
	let botChoice = toChoice(rpsInt());

	let results = decideWinner(humanChoice, botChoice);
	let message = finalMessage(results);
	rpsFrontEnd(humanChoice, botChoice, message);
}

function rpsInt() {
	return Math.floor(Math.random() *3);
}

function toChoice(number) {
	return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(humanChoice, botChoice) {
	let database = {
		'rock' : {'paper' : 0, 'rock' : 0.5, 'scissors' : 1},
		'paper' : {'scissors' : 0, 'paper' : 0.5, 'rock' : 1},
		'scissors' : {'rock' : 0, 'scissors' : 0.5, 'paper' : 1}
	};

	let humanScore = database[humanChoice][botChoice];
	return humanScore;
}

function finalMessage(humanScore) {
	if (humanScore === 0) {
		return {'message' : 'You Lost!', 'color' : 'red'};
	}
	else if (humanScore === 0.5) {
		return {'message' : 'You Tied!', 'color' : 'yellow'};
	}
	else if (humanScore === 1) {
		return {'message' : 'You Win!', 'color' : 'green'};
	}
}

function rpsFrontEnd(humanChoice, botChoice, message) {
	let imageDatabase = {
		'rock' : document.getElementById('rock').src,
		'paper' : document.getElementById('paper').src,
		'scissors' : document.getElementById('scissors').src,
	};

	document.getElementById('rock').remove();
	document.getElementById('paper').remove();
	document.getElementById('scissors').remove();

	let humanDiv = document.createElement('div');
	let textDiv = document.createElement('div');
	let botDiv = document.createElement('div');

	humanDiv.innerHTML = "<img src = '" + imageDatabase[humanChoice] + "' height : '170px' width : '170px' style = 'box-shadow: 4px 10px 30px 4px dodgerblue;'>";
	textDiv.innerHTML = "<h1 style = '" + message['color'] + "; font-size: 60px; padding: 20px; margin: 10px;'>" + message['message'] + "</h1>";
	botDiv.innerHTML = "<img src = '" + imageDatabase[botChoice] + "' height : '170px' width : '170px' style = 'box-shadow: 4px 10px 30px 4px red;'>";

	document.getElementById('flex4').appendChild(humanDiv);
	document.getElementById('flex4').appendChild(textDiv);
	document.getElementById('flex4').appendChild(botDiv);
}
