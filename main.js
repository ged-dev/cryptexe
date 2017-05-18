// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

var a = baffle('#testID');

function getText(){

	var userData = document.getElementById("data").value;
	
	document.getElementsByClassName("baffle")[0].innerHTML += "Cryptage en cours ...";
	//document.getElementsByClassName("baffle")[0].innerHTML += userData;

	document.getElementById("testID").innerHTML += userData;

	a.start();
	// // a.stop();
	a.reveal(20000);

	console.log(userData);

}

// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■



