class Shooter{
    constructor(x, y, radius) {
       this.radius = radius;
       this.x = x;
       this.y = y;
        this.body = Bodies.circle(this.x, this.y, this.radius);
        
       
        World.add(world, this.body);
      }
      display(){
        var spos = this.body.position;
        fill("yellow");
        ellipseMode(CENTER);
        circle(spos.x, spos.y, this.radius);
        
      }
}