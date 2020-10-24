const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var base1, base2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25;

var shooter;
var sling;

var score = 0;


function setup() {
  createCanvas(1200,800);

  engine = Engine.create();
	world = engine.world;

  base1 = new Ground(500,500,250,10);
  base2 = new Ground(800,300,250,10);

  //level 1 
  box1 = new Box(400,450,30,30);
  box2 = new Box(430,450,30,30);
  box3 = new Box(460,450,30,30);
  box4 = new Box(490,450,30,30);
  box5 = new Box(520,450,30,30);
  box6 = new Box(550,450,30,30);
  box7 = new Box(580,450,30,30);

  box8 = new Box(430,480,30,30);
  box9 = new Box(460,480,30,30);
  box10 = new Box(490,480,30,30);
  box11 = new Box(520,480,30,30);
  box12 = new Box(550,480,30,30);

  box13 = new Box(460,450,30,30);
  box14 = new Box(490,450,30,30);
  box15 = new Box(520,450,30,30);
  box16 = new Box(490,420,30,30);

  //level 2
  box17 = new Box(700,250,30,30);
  box18 = new Box(730,250,30,30);
  box19 = new Box(760,250,30,30);
  box20 = new Box(790,250,30,30);
  box21 = new Box(820,250,30,30);

  box22 = new Box(730,220,30,30);
  box23 = new Box(760,220,30,30);
  box24 = new Box(790,220,30,30);
  box25 = new Box(760,90,30,30);

  shooter = new Shooter(200,100,30);

  sling = new Shot(shooter.body, {x:150, y:400});
  Engine.run(engine);
 
}

function draw() {
  background(0);

  textSize(30);
  fill("white");
  text("SCORE:" + score, width-300, 100);
  
  Engine.update(engine);

   base1.display();
  base2.display();
  
  //level 1
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
  box16.display();

  //level 2
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  box22.display();
  box23.display();
  box24.display();
  box25.display();

  shooter.display();
  sling.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();
  box17.score();
  box18.score();
  box19.score();
  box20.score();
  box21.score();
  box22.score();
  box23.score();
  box24.score();
  box25.score();

}

function mouseDragged(){
  Matter.Body.setPosition(shooter.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(shooter.body,{x:100,y:400})
		sling.attach(shooter.body);
	}
}