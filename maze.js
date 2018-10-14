// JavaScript Document
window.onload = starter;
var nohit = true;

function starter(){
	document.getElementById("start").addEventListener("click",main);
}
function main(){
	var bs = document.querySelectorAll(".boundary");
	for(var x= 0; x < bs.length; x++){
		bs[x].addEventListener("mouseover", fail);
	}
	document.getElementById("end").addEventListener("mouseover", win);	
	document.getElementById("start").addEventListener("click",reset);
	document.getElementById("start").addEventListener("click",anticheat);
}
function fail(){
	document.getElementById("status").textContent ="You lose";
	var bs = document.getElementsByClassName("boundary");
	for( var x = 0; x < bs.length; x++){
		bs[x].classList.add("youlose");
	}
	nohit = false;
	
}
function win(){
	if (nohit === true){
		document.getElementById("status").textContent = "You win!";
	}
}
function reset(){
	var bs = document.querySelectorAll(".boundary");
	for (var x = 0; x < bs.length; x++){
		bs[x].classList.remove("youlose");
	}
	nohit = true;
	document.getElementById("status").textContent = "Click the \"S\" to begin";
	
}
function anticheat(){
	document.getElementById("maze").addEventListener("mouseleave",fail);
}
	