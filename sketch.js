const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var snow = [];
 var bg;
 var invisibleGround;

function preload(){
  bg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 engine = Engine.create();
 world = engine.world;

 //invisibleGround = createSprite(400, 200, 50, 50);
 
  

}

function draw() {
  background(bg);  
  Engine.update(engine);

  if(frameCount%50===0){
    snow.push(new Snow(random(800,10),20,20));
    }  

for (var a = 0; a < snow.length; a++) {
  snow[a].display();   
}

  drawSprites();
}

