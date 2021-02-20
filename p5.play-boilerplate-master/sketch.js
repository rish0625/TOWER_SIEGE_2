const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var platform, ground;
var ball, slingshot;

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  platform = new Ground(600, 300, 250, 20);
  ground = new Ground(width/2,height,800,20);
  
  ball = new Ball(125, 150, 40);
  slingshot = new SlingShot(ball.body,{x:125, y:150});

  box1 = new Box(525, 275, 30, 40);
  box2 = new Box(565, 275, 30, 40);
  box3 = new Box(605, 275, 30, 40);
  box4 = new Box(645, 275, 30, 40);
  box5 = new Box(685, 275, 30, 40);

  box6 = new Box(545, 225, 30, 40);
  box7 = new Box(585, 225, 30, 40);
  box8 = new Box(625, 225, 30, 40);
  box9 = new Box(665, 225, 30, 40);

  box10 = new Box(565, 175, 30, 40);
  box11 = new Box(605, 175, 30, 40);
  box12 = new Box(645, 175, 30, 40);

  box13 = new Box(585, 125, 30, 40);
  box14 = new Box(625, 125, 30, 40);

  box15 = new Box(605, 75, 30, 40);
  
  
}

function draw() {
  background(11,66,82);
  Engine.update(engine);

  platform.display();
  ground.display();

  ball.display();
  slingshot.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  box6.display();
  box7.display();
  box8.display();
  box9.display();

  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();

  box15.display();


  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(ball.body);
  }
}