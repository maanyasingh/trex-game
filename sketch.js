var trex, trex_running, edges;
var groundImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,140,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
ground=createSprite(200,200,400,10);
ground.addImage("ground",groundImage)
}



function draw(){
  //set background color 
  background("white");
  ground.velocityX=-3
  
 trex.collide(ground) 
  //logging the y position of the trex
  console.log(ground.x)
  
  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -10;

  }
  if(ground.x<0){
    ground.x=ground.width/2
  }
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(edges[3])
  drawSprites();
}