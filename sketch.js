
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

var radius = 40;

function preload()
{
	
}

function setup() {
	createCanvas(2000,1000);


	engine = Engine.create();
	world = engine.world;

	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(1600,600,20,120)



	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2

	}

	//Create the Bodies Here.
	ball = Bodies.circle(260,100,radius/2,ball_options)
	World.add(world,ball)


	
  
}


function draw() {

	Engine.run(engine);
	background(0);
   groundObj.show();
   leftSide.show();
   rightSide.show();

   

  rectMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20,20);
  
  
  drawSprites();
 
}

	function keyPressed(){
		if (keyCode === UP_ARROW){
			Matter.Body.applyForce(ball,{x:0,y:0},{x:45,y:-45})
		}
	}



