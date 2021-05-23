class paper {
    constructor(x, y, radius) {
        var option = {
            isStatic: false,
            restitution: 0.3,
            friction: 0, 
            density: 1.2
        }
        this.body = Bodies.circle(x, y, radius, option);
        this.radius = radius;
        this.image = loadImage("paper.png");
        World.add(world, this.body);

    }
    display() {
        fill("blue");
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    
    }
}