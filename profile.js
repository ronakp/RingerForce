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
var ticker = true;

filterPanel.onclick = function () { 
	console.log("running");
	if (ticker) {
		document.getElementById("filterPop").style.height = 150 + "px";
		filterIcon.src = "closex.png";
		ticker = false;
	}
	if (!ticker) {
	 	document.getElementById("filterPop").style.height = 31 + "px";
		filterIcon.src = "filter.png";
	}
};

// filterPanel.onclick = function() {
// 	if (filterIcon.src == "file:///C:/Users/saga/Documents/TONS/developTONS/RingerForce/closex.png") {
// 		document.getElementById("filterPop").style.height = 31 + "px";
// 		filterIcon.src = "filter.png";
// 	} 
// }
