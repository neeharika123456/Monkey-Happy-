var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,400);
          
  //creating monkey
  monkey = createSprite(50,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400,350,1000,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)

  obstaclesGroup = new Group();
  

}


function draw() {
 background("skyBlue");
 
  if(ground.x<0){
   ground.x = ground.width/2; 
    }
  
  if(keyDown("space")){
     monkey.velocityY = -12;
     }
  monkey.velocityY = monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  obstaclesGroup.setLifetimeEach(-1);
  obstaclesGroup.setVelocityXEach(0);
  
  spawnBanana();
  
   drawSprites();
}

function spawnBanana(){
  
if(frameCount % 60===0) {
  
  banana = createSprite(400,150,10,10);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -3; 
} 
  
  
  
}













