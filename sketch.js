
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(500, 500);
	
	engine = Engine.create();
	world = engine.world;

	var plane_options = {
		isStatic : true 
	}
	 
	var objeto1_options = {
		restitution: 0.5,
		friction: 0.02,
		frictionAir: 0
	}
	
	var objeto2_options = {
		restitution: 0.7,
		friction: 0.01,
		frictionAir: 0.1
	}

	var objeto3_options = {
		restitution: 0.01,
		friction: 1,
		frictionAir: 0.3 
	}
	
	objeto1 =  Bodies.circle(220, 10, 10, objeto1_options);
	World.add(world, objeto1);
	
	objeto2 = Bodies.rectangle(110, 50, 10, 10, objeto2_options);
	World.add(world, objeto2);

	objeto3 = Bodies.rectangle(350, 50, 10, 10, objeto3_options);
	World.add(world, objeto3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(51)
  Engine.update(engine);




  drawSprites();
 
}



