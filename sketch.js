
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1;
var box1;
var box2;
var box3;
var dustbinimage;
function preload(){
dustbinimage=loadImage("dustbingreen.png")
}

	


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
ball1=new Ball(50,640,20);
box1 = new Box(400,600,20,100);
box2=new Box(600,600,20,100);
box3=new Box(500,640,180,20);
ground = Bodies.rectangle(width/2, 650,	 width, 10 , {isStatic:true} );
 	World.add(world, ground)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  fill("brown")
 rect(ground.position.x,ground.position.y,800,10)
 ball1.display();
 box1.display();
 box2.display();
 box3.display();
 imageMode(CENTER)
 image(dustbinimage,500,580,250,130)
 
}

function keyPressed(){
if( keyCode===UP_ARROW){
Matter.Body.applyForce(ball1.body,ball1.body.position,{x:50,y:-50});
  }

}

