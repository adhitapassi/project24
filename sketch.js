const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3;
var ground;
var ball1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Dustbin(200,355,10,50);
    box2= new Dustbin(300,355,10,50);
    box3= new Dustbin(250,375,90,10);
    ball1=new Ball(50,300,20);
    ground=new Ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);

   keyPressed();

    box1.display();
    box2.display();
    box3.display();
    ball1.display();
   ground.display();
}

function keyPressed(){
    if(keyCode===UP_ARROW)  {
        Matter.Body.applyForce(ball1.body,ball1.body.position,{x:85,y:85})
    }
 }