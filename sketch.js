const Engine = Matter.Engine; // laws of Physics
const World = Matter.World; //apply laws of physics onto all bodies
const Bodies = Matter.Bodies;

var engine, world;
var box, ball, ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  var box_options = {restitution : 1}
  box = Bodies.rectangle(200,100,50,50,{restitution : 1});
  console.log(box);

  World.add(world,box)
  var ground_options = {isStatic:true}
  ground = Bodies.rectangle(width/2,height-50,width,20,ground_options)
  World.add(world,ground);

  var ball_options = {restitution : 1}
  ball = Bodies.circle(50, 60, 20, ball_options);
  World.add(world, ball);
}

function draw() {
  background(220,255,255);  
  Engine.update(engine); 

  rectMode(CENTER)
  rect(box.position.x,box.position.y,50,50);

  rect(ground.position.x,ground.position.y,width,20)

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20)

}