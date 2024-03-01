document.getElementById('placeBtn').addEventListener('click', function () {
  drone.place(0, 0, 'NORTH');
  updateDronePosition();
});
