class Hero {
    constructor(x,y,r,angle) {
        var options ={
            restitution: 1,
            density: 1,
            frictionAir: 1
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x, y, r,options);
        this.image = loadImage("images/Superhero-01.png");
        World.add(world, this.body);
    }
    display() {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        fill(0);
        imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r);
        pop();
    }
}