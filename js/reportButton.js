const reportButton = document.getElementById('reportBtn');

reportButton.addEventListener('click', function () {
  // Invoke the report method of the drone object when the REPORT button is clicked
  const reportResult = drone.report();

  // Populate the pop-up content with the report result
  document.getElementById('popupContent').innerHTML =
    '<b>POSITION OF THE DRONE</b> <br>' + reportResult;

  // Show the custom pop-up
  document.getElementById('customPopup').style.display = 'block';
});

// Add event listener to the close button of the custom pop-up
document.getElementById('popupClose').addEventListener('click', function () {
  // Hide the custom pop-up when the close button is clicked
  document.getElementById('customPopup').style.display = 'none';
});
