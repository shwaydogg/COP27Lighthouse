document.onkeyup = function(e) {
  if (e.shiftKey) {
    if (e.which == 39) {
      nextSlide();
    } else if (e.which == 37) {
      previousSlide()
    } else if (e.which == 38) {
      restart();
    } else if (e.which == 40) {
      holdCurrentSlide();
    } else if (e.which == 13) {
      toggleFullscreen();
    }
  }
};
