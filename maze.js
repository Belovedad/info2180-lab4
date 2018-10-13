// JavaScript Document
window.onload = main;
var nohit = true;
function main(){
	var bs = document.querySelectorAll(".boundary");
	for(var x= 0; x < bs.length; x++){
		bs[x].addEventListener("mouseover", fail);
	}
	document.getElementById("end").addEventListener("mouseover", win);	
	document.getElementById("start").addEventListener("click",reset);
}
function fail(){
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
	document.getElementById("status").textContent = "Move your mouse over the \"S\" to begin.";
	
}
	