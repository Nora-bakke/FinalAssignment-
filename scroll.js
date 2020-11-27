/*
function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset();
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }
  function ease (t, b, c, d) {
    t /= d / 2;
    if (t < 1) {
      return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
  }
  requestAnimationFrame(animation);
}


var section11 = document.querySelector('.section11');

section11.addEventListener('click',function() {
  smoothScroll('.section22', 8000);
});
*/

var marginY = 0;
var distinasjon = 0;
var hastighet = 2;
var scrollNed = null;

function scrollDown(elementId){

	destinasjon = document.getElementById(elementId).offsetTop;

	scrollNed = setTimeout(function(){
		scrollDown(elementId);
	}, 1);

	marginY = marginY + hastighet;

	if(marginY >= destinasjon){
		clearTimeout(scrollNed);
	}

	window.scroll(0, marginY);

	//console.log(destinasjon);
}
