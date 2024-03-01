// Get references to the buttons
const moveButton = document.getElementById('moveBtn');
moveButton.addEventListener('click', function () {
  // Invoke the move method of the drone object when the MOVE button is clicked
  drone.move();
  // Update the position of the drone on the page
  updateDronePosition();
});
