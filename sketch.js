let bubbles = [];

// 1 time, good for variable initialization
function setup() {
  createCanvas(innerWidth, innerHeight);
}

// 60 fps
function draw() {
  background(color(50, 50, 50));

  bubbles.forEach(bubble => {
    bubble.update();
    bubble.display();
  });
}

function mousePressed() {
  for (let i = 0; i < 5; i++) {
    const position = createVector(mouseX, mouseY);
    const col = color(random(0, 255), random(0, 255), random(0, 255));

    const bubble = new Bubble(position, col);

    bubbles.push(bubble);
  }
}

class Bubble {
  constructor(position, col) {
    this.position = position;
    this.col = col;
    this.velocity = createVector(random(-3, 3), random(-3, 3));
  }

  display() {
    push();
    fill(this.col);
    ellipse(this.position.x, this.position.y, 75, 75);
    pop();
  }

  update() {
    this.position.add(this.velocity);

    if (this.isEdges()) {
      this.velocity.mult(-1);
    }
  }

  isEdges() {
    return (
      this.position.x >= width - 37 ||
      this.position.x <= 37 ||
      this.position.y >= height - 37 ||
      this.position.y <= 37
    );
  }
}
