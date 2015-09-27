//RESPONSIVE BACKGROUND
var bground = $("#bground").outerHeight();
console.log(bground);

var bground2 = document.getElementById("bground2");

function resizer() {
	bground2.style.top = (bground - 7) + "px";
}

resizer();

window.onresize = function(event) {
	resizer();
	console.log(bground);
	if ($(window).width() < 783) {
		bground2.style.top = 100 + "px";
	}
}

function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
    document.body.scroll = "no"; // ie only
}

unloadScrollBars();

//background dim onhover
$( "#email" ).hover(function() {
  $("#bground").fadeOut( 100 );

});
$( "#password" ).hover(function() {
  $("#bground").fadeOut( 100 );

});
// $(".avatar").hover(function(){$("#bground").style.opacity=0.3;},function(){$("#bground").style.opacity=1;});
