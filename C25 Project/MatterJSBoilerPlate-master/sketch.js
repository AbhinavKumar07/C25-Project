
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground;
var trashCan1 , trashCanSide1 , trashCanSide2 , trashCanSide3;

function preload() {

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create()
	world = engine.world;

	//Create the Bodies Here.

paper1 = new paper(100,590,50,50);
trashCan1 = new TrashCan(600,450,100,200);
trashCanSide1 = new TrashCanSidesAndGround(600,550,100,10);
trashCanSide2 = new TrashCanSidesAndGround(550,500,10,200);
trashCanSide3 = new TrashCanSidesAndGround(650,500,10,200);
ground = new TrashCanSidesAndGround(width,600,width/2,5);
  
Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  trashCan1.display();
  trashCanSide1.display();
  trashCanSide2.display();
  trashCanSide3.display();
  ground.display();
  paper1.display();

  drawSprites();
}

function keyPressed() {
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:80,y:-80})
  }
}



