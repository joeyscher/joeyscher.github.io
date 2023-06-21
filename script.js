$(document).ready(function() {
  var isDragging = false;
  var currentX;
  var currentY;
  var initialX;
  var initialY;
  var xOffset = 0;
  var yOffset = 0;
  
  $("#movable-image").mousedown(function(e) {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
  
    if (e.target === document.getElementById("movable-image")) {
      isDragging = true;
    }
  });
  
  $("#movable-image").mouseup(function() {
    initialX = currentX;
    initialY = currentY;
  
    isDragging = false;
  });
  
  $("#movable-image").mousemove(function(e) {
    if (isDragging) {
      e.preventDefault();
  
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
  
      xOffset = currentX;
      yOffset = currentY;
  
      setTranslate(currentX, currentY, document.getElementById("movable-image"));
    }
  });
  
  function setTranslate(xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
  }
});