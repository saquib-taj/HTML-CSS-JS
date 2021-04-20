// For Project-1: Your Age in Days....
function clickMe() {
	let d = prompt("Enter your Birth-Year??");

	if ((d > 0) && (d <= 2020)) {
		age = (2020 - d) *365;
		document.getElementById('p1-result').innerHTML = "You are " + age + " days old.."
	} else {
		alert("You entered an invalid Birth-Year!");
	}
}

function reset() {
	document.getElementById('p1-result').innerHTML = "";
}



// For Project-2: Random Image Generator....
let randomImg = {
	'photo' : ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
	'photoMap' : {'1':1, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9},
};

function imgGen() {
	let image = document.createElement('img');
	let randomPhoto = random();
	image.src = `Photos/${randomPhoto}.gif`;
	document.getElementById('genImg').appendChild(image);
}

function random() {
	let randomNumber = Math.floor(Math.random() * 9)
		return randomImg['photo'][randomNumber];
}

function removeAll() {
	document.getElementById('genImg').innerHTML = "";
}



// For Project-3: Changing Button Colors...
let allButtons = document.getElementsByTagName('button');

let copyButtons = [];
for (let i = 0; i < allButtons.length; i++) {
	copyButtons.push(allButtons[i].classList[1]);
}

function btnFunc(selected) {

	if (selected.value === 'red') {
		toRed();
	} else if (selected.value === 'green') {
		toGreen();
	} else if (selected.value === 'yellow') {
		toYellow();
	} else if (selected.value === 'blue') {
		toBlue();
	} else if (selected.value === 'random') {
		toRandom();
	} else if (selected.value === 'default') {
		toDefault();
	}
}

function toRed() {
	for (i = 0; i < allButtons.length; i++) {
		allButtons[i].classList.remove(allButtons[i].classList[1]);
		allButtons[i].classList.add('btn-danger');
	}
}

function toGreen() {
	for (i = 0; i < allButtons.length; i++) {
		allButtons[i].classList.remove(allButtons[i].classList[1]);
		allButtons[i].classList.add('btn-success');
	}
}

function toYellow() {
	for (i = 0; i < allButtons.length; i++) {
		allButtons[i].classList.remove(allButtons[i].classList[1]);
		allButtons[i].classList.add('btn-warning');
	}
}

function toBlue() {
	for (i = 0; i < allButtons.length; i++) {
		allButtons[i].classList.remove(allButtons[i].classList[1]);
		allButtons[i].classList.add('btn-primary');
	}
}

function toRandom() {
	for (i = 0; i < allButtons.length; i++) {
		allButtons[i].classList.remove(allButtons[i].classList[1]);
		let randomNum = Math.floor(Math.random() * 4);
		allButtons[i].classList.add(copyButtons[randomNum]);
	}
}

function toDefault() {
	for (i = 0; i < allButtons.length; i++) {
		allButtons[i].classList.remove(allButtons[i].classList[1]);
		allButtons[i].classList.add(copyButtons[i]);
	}
}



// For Project-4: Rock, Paper, Scissors
function rps(yourChoice) {
	let humanChoice = yourChoice.id;
	let botChoice = toChoice(rpsInt());
	
	let output = decideScore(humanChoice, botChoice);
	let message = decideWinner(output);

	rpsFrontEnd(humanChoice, botChoice, message);
}

function rpsInt() {
	return Math.floor(Math.random() * 3);
}

function toChoice(num) {
	return ['rock', 'paper', 'scissors'][num];
}

function decideScore(humanChoice, botChoice) {
	let database = {
		'rock' : {'paper' : 0, 'rock' : 0.5, 'scissors' : 1},
		'paper' : {'scissors' : 0, 'paper' : 0.5, 'rock' : 1},
		'scissors' : {'rock' : 0, 'scissors' : 0.5, 'paper' : 1},
	};
	
	let humanScore = database[humanChoice][botChoice];	
	return humanScore;
}

function decideWinner(humanScore) {
	if (humanScore === 0) {
		return {'message' : 'You Lost!', 'color' : 'red'};
	}
	else if (humanScore === 0.5) {
		return {'message' : 'You Drew!', 'color' : 'yellow'};
	}
	else if (humanScore === 1) {
		return {'message' : 'You Won!', 'color' : 'green'};
	}
}

var humanDiv, botDiv, textDiv, imageData;

function rpsFrontEnd(humanChoice, botChoice, message) {
	imageData = {
		'rock' : document.getElementById('rock').src,
		'paper' : document.getElementById('paper').src,
		'scissors' : document.getElementById('scissors').src,
	};

	document.getElementById('rock').remove();
	document.getElementById('paper').remove();
	document.getElementById('scissors').remove();

	humanDiv = document.createElement('div');
	textDiv = document.createElement('div');
	botDiv = document.createElement('div');

	humanDiv.innerHTML = "<img src = '" + imageData[humanChoice] + "' style = 'width: 191px; height: 189px; box-shadow: 8px 10px 30px 4px #007bff;'>";
	textDiv.innerHTML = "<h1 style = 'color: " + message['color'] + "; padding-top: 60px; font-size: 60px;'>" + message['message'] + "</h1>";
	botDiv.innerHTML = "<img src = '" + imageData[botChoice] + "' style = 'width: 191px; height: 189px; box-shadow: 8px 10px 30px 4px red;'>";

	document.getElementById('flex-4').appendChild(humanDiv);
	document.getElementById('flex-4').appendChild(textDiv);
	document.getElementById('flex-4').appendChild(botDiv);
}

function restart() {
	let div1 = document.createElement('img');
	let div2 = document.createElement('img');
	let div3 = document.createElement('img');

	humanDiv.remove();
	textDiv.remove();
	botDiv.remove();

	div1.src = imageData['rock'];
	div1.style = 'width: 191px; height: 189px; box-shadow: 8px 10px 30px 4px #007bff;';
	div1.id = 'rock';
	div1.onclick = rps(this);

	div2.src = imageData['paper'];
	div2.style = 'width: 191px; height: 189px; box-shadow: 8px 10px 30px 4px #007bff;';
	div2.id = 'paper';
	div2.onclick = rps(this);

	div3.src = imageData['scissors'];
	div3.style = 'width: 191px; height: 189px; box-shadow: 8px 10px 30px 4px #007bff;';
	div3.id = 'scissors';
	div3.onclick = rps(this);
		
	document.getElementById('flex-4').appendChild(div1);
	document.getElementById('flex-4').appendChild(div2);
	document.getElementById('flex-4').appendChild(div3);
}