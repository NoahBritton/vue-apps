let t = 0; // time variable

function setup() {
  canvas = createCanvas(windowWidth, 1042);
  canvas.style("z-index", "-1");
  canvas.position(0, 0);
  fill(255, 255, 255);
  noStroke();
}

function draw() {
  background(10, 10);
  // make a x and y grid of ellipses
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 30) {
      // starting point of each circle depends on mouse position
      const xAngle = map(0, 0, width, -4 * PI, 4 * PI, true);
      const yAngle = map(0, 0, height, -4 * PI, 4 * PI, true);
      // and also varies based on the particle's location
      const angle = xAngle * (x / width) + yAngle * (y / height);

      // each particle moves in a circle
      const myX = x + 20 * cos(2 * PI * t + angle);
      const myY = y + 20 * sin(2 * PI * t + angle);
      ellipse(myX, myY, 10); // draw particle
    }
  }

  t = t + 0.01; // update time
}
