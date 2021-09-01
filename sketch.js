var ball;
var ground;
var leftSide;
var rightSide;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);
	
	engine = Engine.create();
	world = engine.world;


	var ball_options={
		isStatic:false,
		restitution: 0.5,
		friction: 0,
		density: 1.2
	}


	ground =new Ground(400,390,800,20);
	leftSide = new Ground(600,360,10,50);
	rightSide = new Ground(700,360,10,50);



	//Create the Bodies Here.
	ball= Bodies.circle(50,100,20,ball_options);
	World.add(world,ball);



	Engine.run(engine);
} 

function draw() {


  rectMode(CENTER);
  
  background(255);
 
  ellipse(ball.position.x,ball.position.y,20);
  
  ground.show();
  leftSide.show();
  rightSide.show();
 
  function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0, y:0},{x:0.5, y:-0.5})
	}
  }

  drawSprites();
  keyPressed();
}




