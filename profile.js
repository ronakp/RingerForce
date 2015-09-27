var filter = document.getElementById("filterPop");

var filterIcon = document.getElementById("filterIcon").src;
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
	filterIcon.src = "close.png";
};

