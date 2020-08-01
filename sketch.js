
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof,rope1,rope2,rope3;
var bobDiameter=20;
Constraint= Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bobObject1 = new Bob(400,400,20);
	bobObject2 = new Bob(420,400,20);
	bobObject3 = new Bob(440,400,20);
	bobObject4 = new Bob(380,400,20);
	bobObject5 = new Bob(360,400,20);

	roof = new Roof(400,200,400,40);
	rope1 = new Rope(bobObject1.body,roof.body,0,0);
	rope2 = new Rope(bobObject2.body,roof.body,bobDiameter*2,0);
	rope3 = new Rope(bobObject3.body,roof.body,bobDiameter*4,0);
	rope4 = new Rope(bobObject4.body,roof.body,-bobDiameter*2,0);
	rope5 = new Rope(bobObject5.body,roof.body,-bobDiameter*4,0);
	
	Engine.run(engine);
  
}


function draw() {
  
  background(255);
  rectMode(CENTER);
  
  
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  drawSprites();
 
}
function keyPressed(){
  if(keyCode===UP_ARROW){
Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:-50,y:-45})
  }
}



