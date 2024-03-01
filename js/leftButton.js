const leftButton = document.getElementById('leftBtn');
leftButton.addEventListener('click', function () {
  // Invoke the left method of the drone object when the LEFT button is clicked
  drone.left();
  // Update the position of the drone on the page
  updateDronePosition();
});
