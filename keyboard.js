//document.addEventListener = keyPress;
console.log("keyboard chargé");
document.getElementById("cesarForm").addEventListener("keypress", keyPress, false);

function keyPress(e){
	if(e.keyCode == 13){
		e.preventDefault();
		getText();
	}
	console.log("keyPress");
}
