let angle = 0;
let amt, startColor, newColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  colorMode(HSB);
  startColor = color(255, 255, 255);
  newColor = color(random(255), random(255), random(255));
  amt = 0;
}

function draw() {
  background(0);

  for (let i = 50; i < mouseX; i += 50) {
    for (let j = 50; j < mouseY; j += 50) {
      noFill();
      stroke(lerpColor(startColor, newColor, amt));
      strokeWeight(3);

      let d = dist(mouseX, mouseY, i + width / 2, j + height / 2);

      let r = d / 5;

      push();
      translate(i, j);
      rotate(-angle);
      rect(0, 0, r, r);
      pop();

      push();
      translate(i, j);
      rotate(angle);
      rect(0, 0, r, r);
      pop();

      angle += 0.0003;

      amt += 0.01;

      if (amt >= 1) {
        amt = 0.0;
        startColor = newColor;
        newColor = color(random(255), random(255), random(255));
      }
    }
  }
}
