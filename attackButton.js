const square = document.getElementById('drone');

const burst = new mojs.Burst({
  parent: square,
  radius: { 0: 300 },
  count: 10,
  children: {
    shape: 'polygon',
    fill: { orange: 'red' },
    radius: 30,
    rotate: { 360: 20 },
    duration: 3000,
  },
});

var attack = document.getElementById('attackBtn');
attack.addEventListener('click', function (e) {
  burst.replay();
});
