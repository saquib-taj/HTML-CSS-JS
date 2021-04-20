function imgGen() {
	let image = document.createElement('img');
	let div = document.getElementById('genImg');
	image.src = 'Photos/1.gif';
	div.appendChild(image);
}

function removeAll() {
	document.getElementById('genImg').innerHTML = "";
}