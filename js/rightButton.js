const rightButton = document.getElementById('rightBtn');
rightButton.addEventListener('click', function () {
  // Invoke the right method of the drone object when the RIGHT button is clicked
  drone.right();
  // Update the position of the drone on the page
  updateDronePosition();
});
