var hastighet = 8;
var grenseY = 0;
var distinasjon = 0;
var scrollNed = null;

function scrollDown(elementId){
	destinasjon = document.getElementById(elementId).offsetTop;
	scrollNed = setTimeout(function(){
		scrollDown(elementId);
	}, 1);
	grenseY = grenseY + hastighet;
	if(grenseY >= destinasjon){
		clearTimeout(scrollNed);
	}
	window.scroll(0, grenseY);
}

/* ------- Back to top ------- */


toTopButton = document.getElementById("buttonTop");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}
function backTopFunc() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
