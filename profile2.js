var button = document.getElementById("pulse-button");
function buttonplace() {

	//move button right
	var docWidth = $(window).width();
	var buttonLeft = docWidth - 105;
	// console.log(buttonLeft);
	button.style.left = buttonLeft + "px";
	//console.log(docWidth, headWidth, header);

	//move button down
	var docHeight = $(window).height();
	var buttonTop = docHeight - 105;
	button.style.top = buttonTop + "px";
}
buttonplace();
window.onresize = function(event) {
  buttonplace();
}

var addjob = document.getElementById("addjob");
addjob.style.visibility = "hidden";
button.onclick = function() {
	if (addjob.style.visibility == "hidden") {
		addjob.style.visibility = "visible";
	}
	else {
		addjob.style.visibility = "hidden";
	}
}

