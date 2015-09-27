var filter = document.getElementById("filterPop");

var filterIcon = document.getElementById("filterIcon");
// console.log(filterIcon);

// function pop() {
// 	filter = 400 + "px";
// 	filterIcon.src = "closex.png";
// }

// function close() {
// 	filter = 80 + "px";
// 	filterIcon.src = "filter.png";
// }
var filterPanel = document.getElementById("filterPanel");

filterPanel.onclick = function () { 
	document.getElementById("filterPop").style.height = 150 + "px";
	// console.log(filterIcon.src);
	filterIcon.src = "closex.png";
};

filterIcon.onclick = function () {
	document.getElementById("filterPop").style.height = 31 + "px";
	console.log("ran close");
	filterIcon.src = "filter.png"
}
