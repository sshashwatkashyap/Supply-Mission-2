var helicopterIMG, helicopterSprite, packageSprite, packageIMG, world, engine;
var packageBody, ground, Line1, Line2, Line3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
    world = engine.world;
	
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

    fill("red");   
	Line1 = new baseLine(width/2, 650, 200, 20);

	fill("red");   
	Line2 = new baseLine(300, 610, 20, 100);

	fill("red");   
	Line3 = new baseLine(500, 610, 20, 100);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution: 0 , isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	line1 = Bodies.rectangle(width/2, 625, width, 10 , {isStatic:true} );
 	World.add(world, line1);

	line2 = Bodies.rectangle(width/2, 625, width, 10 , {isStatic:true} );
 	World.add(world, line1);

	line3 = Bodies.rectangle(width/2, 625, width, 10 , {isStatic:true} );
 	World.add(world, line1);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0); 
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  Line1.display();
  Line2.display(); 
  Line3.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
     Matter.Body.setStatic(packageBody, false);
	
  }
}



