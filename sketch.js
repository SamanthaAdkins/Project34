const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
  bg = loadImage("images/GamingBackground.png")
}

function setup() {
  createCanvas(1250, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(550,500,1100,20);
  hero = new Hero(200,250,150);
  fly = new Fly(hero.body, {x:300,y:10});
  block1 = new Block(870,460);
  block2 = new Block(810,460);
  block3 = new Block(750,460);
  block4 = new Block(690,460);
  block5 = new Block(630,460);
  block6 = new Block(840,400);
  block7 = new Block(780,400);
  block8 = new Block(720,400);
  block9 = new Block(660,400);
  block10 = new Block(810,340);
  block11 = new Block(750,340);
  block12 = new Block(690,340);
  block13 = new Block(780,280);
  block14 = new Block(720,280);
  block15 = new Block(750,220);
  monster = new Monster(1000,415,200);
}

function draw() {
  background(bg);

  ground.display();
  hero.display();
  fly.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  monster.display();
}

function mouseDragged() {
  Matter.Body.setPosition(hero.body, { x: mouseX, y: mouseY });
}