function ageInDays() {
	let birthYear = prompt("What is your Birth-year??");

	if ((birthYear > 0) && (birthYear < 2020)) {
		x = (2020 - birthYear) * 365;
		document.getElementById('finalResult').innerHTML = "Your are " + x + " days old..";
	} else {
		alert("You enter an invalid Birth-year..");
	}
}

function reset() {
	document.getElementById('finalResult').innerHTML = "";
}