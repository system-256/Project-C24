class CanonBall {
  constructor(x, y) {
    var options = {
      "density": 1.5,
      "friction": 1.0,
      "restitution": 0.8,
      "frictionAir": 0.06
    }
    this.body = Bodies.circle(x, y, 25, options);
    World.add(world, this.body);
  }

  display() {
    ellipse(this.body.position.x, this.body.position.y, 25, 25);
    pop();
    push();
  }
};
