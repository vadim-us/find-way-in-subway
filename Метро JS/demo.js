const canv = document.getElementById('myCanvas');
canv.width = canv.clientWidth;
canv.height = canv.clientHeight;

const ctx2 = canv.getContext('2d');

/* const circle = new Path2D();
circle.arc(50, 75, 50, 0, 2 * Math.PI);
ctx2.fillStyle = 'red';
ctx2.fill(circle);

const circletwo = new Path2D();
circletwo.arc(200, 75, 50, 0, 2 * Math.PI);
ctx2.fillStyle = 'red';
ctx2.fill(circletwo); */

/* // Listen for mouse moves
canv.addEventListener('mousemove', function (event) {
  // Check whether point is inside circle
  if (ctx2.isPointInPath(circle, event.offsetX, event.offsetY)) {
    ctx2.fillStyle = 'green';
    ctx2.fill(circle);
  } else {
    ctx2.fillStyle = 'red';
    ctx2.fill(circle);
  }

  if (ctx2.isPointInPath(circletwo, event.offsetX, event.offsetY)) {
    ctx2.fillStyle = 'blue';
    ctx2.fill(circletwo);
  } else {
    ctx2.fillStyle = 'red';
    ctx2.fill(circletwo);
  }
}); */

ctx2.beginPath();
ctx2.strokeStyle = 'red';
ctx2.lineWidth = 2;

ctx2.moveTo(0, 0);
ctx2.lineTo(300, 300);
ctx2.stroke();

ctx2.fillStyle = '#000';
ctx2.font = '14px Arial';
ctx2.textAlign = 'center';
ctx2.fillText(111, 100, 100);
