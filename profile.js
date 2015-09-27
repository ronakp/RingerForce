//FILTER FUNCTIONALITY
	var filterIcon = document.getElementById("filterIcon");
	var filterPanel = document.getElementById("filterPanel");
	var filterPop = document.getElementById("filterPop");
	var ticker = true;

	filterPanel.onclick = function () { 
		if(ticker == true) {
			filterPop.style.height = 150 + "px";
			filterIcon.src = "closex.png";
			tickera();
		}else if(ticker == false) {
			filterPop.style.height = 31 + "px";
			filterIcon.src = "filter.png";
			tickerb();
		}
	
	}

	function tickera() {
		ticker = false;
	}

	function tickerb() {
		ticker = true;
	}

//ACCOUNT FUNCTIONALITY
	var accountIcon = document.getElementById("gearIcon");
	var accountPanel = document.getElementById("accountPanel");
	var accountPop = document.getElementById("accountPop");

accountPanel.onclick = function () { 
		if(ticker == true) {
			accountPop.style.height = 150 + "px";
			accountIcon.src = "closex.png";
			tickera();
		}else if(ticker == false) {
			accountPop.style.height = 31 + "px";
			accountIcon.src = "gearicon.png";
			tickerb();
		}
	
	}
