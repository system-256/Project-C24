class ShootBall {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    shoot() {
        this.sling.bodyA = null;
    }

    restore() {
        this.sling.bodyA = cannonball.body;
    }
}
