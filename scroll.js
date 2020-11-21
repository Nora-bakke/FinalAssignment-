function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startingPosition = window.pageYOffset();
  var distance = targetPosition - startingPosition;
  var startTime = null;

  function scrollAnimation(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
    }
    var timeElapsed = currentTime - startTime;
    var run = easeIn(timeElapsed, startingPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }
  function easeIn (a, b, c, d) {
    t /= d / 2;
    if (t < 1) {
      return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
  }
  requestAnimationFrame(animation);
}


var scroll = document.querySelector('scroll');
scroll.addEventListener('click'function() {
  smoothScroll('#scroll', 8000);
});
