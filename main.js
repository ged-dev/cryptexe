// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

// INIT DES VARIABLES
var userData;
var a = baffle('#testID');
var tab = [];
var nbrIncrementation = 0;
let newVar = "";

// Function which increment the letters
function nextChar(c, nbrIncrementation)
{
	return 	String.fromCharCode(c.charCodeAt(0) + nbrIncrementation);
}

// Function LAUNCHED when button SUBMIT CLICKED
function getText(){

	userData = document.getElementById("data").value;
	nbrIncrementation = parseInt(document.getElementById("nbrCesar").value);
	
	document.getElementsByClassName("baffle")[0].innerHTML += "Cryptage en cours ..." + "<br>";
	document.getElementsByClassName("baffle")[0].innerHTML += "Mot avant cryptage : " + userData + "<br>";
	

	document.getElementById("testID").innerHTML += userData;

	a.start();
	a.stop();
	a.reveal(5000);
	
	console.log("nbrIncrement : ", nbrIncrementation);
	let nbrTest = 2;
	for (let i = 0; i < userData.length; i++){
		console.log(nbrIncrementation);
		newVar += nextChar(userData[i], nbrIncrementation);	
	}

	document.getElementsByClassName("baffle")[0].innerHTML += "Mot après cryptage : " + newVar + "<br>";
	
	
	console.log("variable cryptée : " + newVar);
	document.getElementById("testID").innerHTML += newVar;
	newVar = "";

}





// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■



