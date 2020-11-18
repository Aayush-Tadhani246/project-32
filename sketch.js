const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var backgroundImg

var score = 0;

function preload(){
  getBackgroundImg()
}

function setup() {
  engine = Engine.create();
	world = engine.world;
  
  createCanvas(800,500);
  
  base1 = new Base(350,370,250,20);
  base2 = new Base(675,275,200,20);
  ground = new Base(400,490,800,20);
  polygon = new Polygon(100,250,40);
  slingShot = new SlingShot(polygon.body,{x:100,y: 240});
  //base1 f1
  block1 = new Block(250,315,30,50,"blue");
  block2 = new Block(280,315,30,50,"blue");
  block3 = new Block(310,315,30,50,"blue");
  block4 = new Block(340,225,30,50,"blue");
  block5 = new Block(370,225,30,50,"blue");
  block6 = new Block(400,225,30,50,"blue");
  block7 = new Block(430,225,30,50,"blue");
  //base1 f2
  block8 = new Block(280,175,30,50,"pink");
  block9 = new Block(310,175,30,50,"pink");
  block10 = new Block(340,175,30,50,"pink");
  block11 = new Block(370,175,30,50,"pink");
  block12 = new Block(400,175,30,50,"pink");
  //base1 f3
  block13 = new Block(310,25,30,50,"Turquoise");
  block14 = new Block(340,25,30,50,"Turquoise");
  block15 = new Block(370,25,30,50,"Turquoise");
  //base1 f4
  block16 = new Block(340,0,30,50,"grey");
  //base2 f1
  block17 = new Block(600,100,30,50,"blue");
  block18 = new Block(630,100,30,50,"blue");
  block19 = new Block(660,100,30,50,"blue");
  block20 = new Block(690,100,30,50,"blue");
  block21 = new Block(720,100,30,50,"blue");
  //base2 f2
  block22 = new Block(630,50,30,50,"Turquoise");
  block23 = new Block(660,50,30,50,"Turquoise");
  block24 = new Block(690,50,30,50,"Turquoise");
  //base1 f3
  block25 = new Block(660,0,30,50,"pink");
 
  Engine.run(engine);
}

function draw() {
 
  if (backgroundImg) {
    background(backgroundImg)
}
  
  base1.display();
  base2.display();
  ground.display();
  polygon.display();
  slingShot.display();
  //base1 f1
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
 
  //base1 f2
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
 
  //base1 f3
  block13.display();
  block14.display();
  block15.display();
  //base1 f4
  block16.display();
  //base2 f1
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  //base2 f2
  block22.display();
  block23.display();
  block24.display();
  //base2 f3
  block25.display();

  //score
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
 
  //score
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
 
  //score
  block13.score();
  block14.score();
  block15.score();
  //score
  block16.score();
  //score 
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  //score
  block22.score();
  block23.score();
  block24.score();
  //score
  block25.score();
  noStroke()
    textSize(25)
    fill("white")
    text("score: " + score, 700,40)
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingShot.attach(polygon.body);
  }
}

async function getBackgroundImg(){
    var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Tokyo")
    var responseJSON = await response.json()

    var datetime  = responseJSON.datetime 
    var hour = datetime.slice(11,13)

    if (hour>=06 && hour<=19){
        bg = "bg2.jpg"
    }
    else {
        bg = "bg.png"   }
     backgroundImg = loadImage (bg)
     console.log(backgroundImg)
    }
