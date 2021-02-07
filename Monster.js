class Monster {
    constructor(x,y,r, angle) {
        var options ={
            restitution: 1,
            density: 1,
            frictionAir: 1
        }

        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(x, y, r,options);
        this.image = loadImage("images/Monster-01.png");
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(0);
        imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r, this.r);
        pop();
    }

};