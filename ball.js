class Ball {
    constructor(x, y, radius) {
      var options = {
          restitution:0.8,
          friction:0.5,
          density:1.2,
isStatic:false,

      }
      this.image=loadImage("paper.png");
      this.body = Bodies.circle(x, y,radius, options);
      this.radius=radius;
      
      World.add(world,this.body);
    }
    display() {
var pos=this.body.position;
var angle=this.body.angle;
    push();
    translate(pos.x,pos.y);
   rotate(angle);
    imageMode(CENTER);
  image(this.image,0,0,50,50);
    pop();

  }
}