// const box = document.getElementById('fire');

// const burst = new mojs.Burst({
//   parent: box,
//   radius: { 0: 300 },
//   count: 10,
//   children: {
//     shape: 'polygon',
//     fill: { '#DC143C': 'orange' },
//     radius: 30,
//     rotate: { 360: 20 },
//     duration: 3000,
//   },
// });

var attack = document.getElementById('attackBtn');
attack.addEventListener('click', function (e) {
  // burst.replay();

  drone.attack();
});
