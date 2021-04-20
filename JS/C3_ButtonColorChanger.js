var allButtons = document.getElementsByTagName('button');

var copyButtons = [];
for (let i = 0; i < allButtons.length; i++) {
	copyButtons.push(allButtons[i].classList[1]);
}

function btncolors(selected) {
	if (selected.value === 'red') {
		toRed();
	} 
	else if (selected.value === 'blue') {
		toBlue();
	} 
	else if (selected.value === 'green') {
		toGreen();
	}
	else if (selected.value === 'yellow') {
		toYellow();
	}
	else if (selected.value === 'default') {
		toDefault();
	}
	else if (selected.value === 'random') {
		toRandom();
	}
}

function toRed() {
	for(let i = 0; i < allButtons.length; i++) {
		allButtons[i].classList.remove(allButtons[i].classList[1]);
		allButtons[i].classList.add('btn-danger');
	}
}

function toBlue() {
	for(let i = 0; i < allButtons.length; i++) {
		allButtons[i].classList.remove(allButtons[i].classList[1]);
		allButtons[i].classList.add('btn-primary');
	}
}

function toGreen() {
	for(let i = 0; i < allButtons.length; i++) {
		allButtons[i].classList.remove(allButtons[i].classList[1]);
		allButtons[i].classList.add('btn-success');
	}
}

function toYellow() {
	for(let i = 0; i < allButtons.length; i++) {
		allButtons[i].classList.remove(allButtons[i].classList[1]);
		allButtons[i].classList.add('btn-warning');
	}
}

function toDefault() {
	for(let i = 0; i < allButtons.length; i++) {
		allButtons[i].classList.remove(allButtons[i].classList[1]);
		allButtons[i].classList.add(copyButtons[i]);
	}
}

function toRandom() {
	for(let i = 0; i < allButtons.length; i++) {
		allButtons[i].classList.remove(allButtons[i].classList[1]);
		let randomNumber = Math.floor(Math.random() * 4);
		allButtons[i].classList.add(copyButtons[randomNumber]);
	}
}