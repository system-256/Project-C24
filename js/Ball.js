class Ball {
  constructor(x, y, radius) {
    var options = {
      frictionAir: 0,
      friction: 0,
      frictionStatic: 1,
      inertia: Infinity,
      restitution: 1.0
    }

  }

  display() {
    ellipse(this.body.position.x, this.body.position.y, 5, 5);
  }
}
