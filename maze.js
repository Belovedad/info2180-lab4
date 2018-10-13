// JavaScript Document
window.onload = go;

function go(){
	var bs = document.querySelectorAll(".boundary");
	for(var x= 0; x < bs.length; x++){
		bs[x].addEventListener("mouseover", modify);
	}
	
}
function modify(){
	var bs = document.getElementsByClassName("boundary");
	for( var x = 0; x < bs.length; x++){
		bs[x].classList.add("youlose");
	}
}
	