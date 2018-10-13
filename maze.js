// JavaScript Document
window.onload = go;
var nohit = true;
function go(){
	var bs = document.querySelectorAll(".boundary");
	for(var x= 0; x < bs.length; x++){
		bs[x].addEventListener("mouseover", modify);
	}
	document.getElementById("end").addEventListener("mouseover", win);	
}
function modify(){
	var bs = document.getElementsByClassName("boundary");
	for( var x = 0; x < bs.length; x++){
		bs[x].classList.add("youlose");
	}
	nohit = false;
}
function win(){
	if (nohit === true){
		alert("You win!");
	}
}
	