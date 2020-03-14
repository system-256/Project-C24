class Tanker {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);
    this.width = width;
    this.height = height;
  };

  display() {
    // Draw the tanker the way you like.
    // You could also use an image if you want a specific look
    rectMode(CENTER);
    rect()
  };
}
