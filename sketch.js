
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
//const Render = Matter.Render;
var boy
var launchingForce=100;

function preload()
{

}

function setup() {
	createCanvas(1300, 700);
	rectMode(CENTER)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = new Boy(300,570,150,400)
	tree = new Tree(1000,350,350,650)
	mango1 = new Mango(30,-50,20)
	mango2 = new Mango(-50,-100,20)
	mango3 = new Mango(100,-150,20)
	mango4 = new Mango(95,-80,20)
	mango5 = new Mango(-80,-50,20)
	mango6 = new Mango(-120,-130,20)
	mango7 = new Mango(20,-150,20)
	mango8 = new Mango(-40,-250,20)
	mango9 = new Mango(40,-220,20)
	mango10 = new Mango(-40,-180,20)
	stone = new Stone(-750,130,30)
	chain = new Chain(stone.body,{x:-750,y:120})
	ground = new Ground(-350,330,1300,30)
	/*var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });*/

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("LightBlue");


  boy.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  stone.display();
  chain.display();
  ground.display();
  
  drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	chain.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  chain.attach(stone.body);
	}
  }

  function detectollision(lstone,lmango){
  MangoBodyPosition=lmango.body.position
  StoneBodyPosition=lstone.body.position
  
  var distance=dist(StoneBodyPosition.x, StoneBodyPosition.y, MangoBodyPosition.x, MangoBodyPosition.y)
  
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }



