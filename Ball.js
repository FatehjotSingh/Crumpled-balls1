class Ball{
    constructor(x,y) {
        var options = {         
            friction:0.5,
            restitution:0.3,
            density:1.2
        }

        this.body = Bodies.circle(x,y,20,options);
        this.radius= 20
        this.color = "blue"

        World.add(world,this.body);
    }

    display() {
        ellipseMode(RADIUS);
        fill(this.color);
        ellipse(this.body.position.x,this.body.position.y,this.radius);
        
    }
}