

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1800, 1000);
	rectMode(CENTER);


	


	engine = Engine.create();
	world = engine.world;
	


	ground = new Ground();
	ball=new Ball(width/5,620)
	boxp1 = new BinPart(width/2+85,640,150,20);
	boxp2 = new BinPart(width/2+20,600,20,100);
	boxp3 = new BinPart(width/2+165,600,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  boxp1.display();
  boxp2.display();
  boxp3.display();
  ball.display();
  ground.display();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:40,y:-40})
	}
}