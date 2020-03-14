// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.
var engine, world;
var tanker, ground
var cannonball;
var sling;

function setup() {
    engine = Engine.create();
    world = engine.world;

    createCanvas(1200, 400);

    tanker = new Tanker(100, 250, 100, 50);
    ground = new Ground(600, 280, 1200, 10);
    cannonball = new CanonBall(100, 205);
    sling = new ShootBall(cannonball.body, { x: 100, y: 205 });

    /*var options = {
        bodyA: cannonball.body,
        pointB: { x: 100, y: 225 },
        stiffness: 0.5,
        length: 10
    }
    sling = Constraint.create(options);
    World.add(world, sling);*/
}

function draw() {
    //console.log(sling);
    background(0);
    tanker.display();
    ground.display();
    cannonball.display();
    Engine.update(engine);
    /*if (cannonball.body.position.x > 800); {
        sling.restore();
    }*/
}

function mouseDragged() {
    Matter.Body.setPosition(cannonball.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    sling.shoot();
}