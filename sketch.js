
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var score
var survivalTime=0;
var PLAY=1;
var END=0;
var gameState=PLAY;
var reset;



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,350);
  monkey=createSprite(50,340,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
ground=createSprite(410,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  
  
  
  
  
  
  
  
 // invisibleGround = createSprite(200,190,400,10);
 // invisibleGround.visible = false;
  
  bananaGroup=new Group();
   obstacleGroup=new Group();
  
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug=true;
  
  
  
  
}


function draw() {
  background("white");
  
  
  if(gameState===PLAY){

  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,580,50);
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime:"+survivalTime,250,50);
  
  if(keyDown("space")){
    monkey.velocityY = -13;
  }
  
  monkey.velocityY = monkey.velocityY + 0.5
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  
  banana();
 obstacle();
 
  
  
    
   
  if(monkey.isTouching(obstacleGroup)){
    gameState=END;
}     
  } 
  else if(gameState===END) {
    ground.velocityX=0;
    
    bananaGroup.setLifetimeEach(-1);
    obstacleGroup.setLifetimeEach(-1);
    
    bananaGroup.setVelocityXEach(0);
    obstacleGroup.setVelocityXEach(0);
    text("game over",200,50);
    stroke("pink");
    fill("pink");
    textSize(400);
    
    
    
    
    
    
  }
    
    
  
  
  
  
 monkey.collide(ground); 
  
  
  

 drawSprites(); 
}
function banana(){
  
  if (frameCount % 60 === 0) {
   var banana = createSprite(400,300,40,10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(10,200));
    banana.scale = 0.1;
    banana.velocityX = -3;
    
  
    banana.lifetime = 130;
     bananaGroup.add(banana);
  }
}

function obstacle(){
  if(frameCount% 300===0){
    var obstacle=createSprite(400,350,10,40);
    obstacle.addImage(obstacleImage);
   // obstacle.y=Math.round(random(10,340 ));
    obstacle.scale = 0.2;
    obstacle.velocityX = -5;
    
  
    
  
    obstacle.lifetime = 134;
     obstacleGroup.add(obstacle);
  }
  
  
}