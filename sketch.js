var bananaImage,obstacleImage, obstacleGroup, stage, score, Monkey, ground, foodGroup, RunMonkey;

function preload(){
RunMonkey.loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png","Monkey_04.png", "Monkey_05.png","Monkey_06.png","Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
stage.loadImage("jungle.png");
bananaImage.loadImage("banana.png");
obstacleImage.loadImage("stone.png");
}

function setup() {
  createCanvas(800, 400);
  Monkey = createSprite(100, 340, 20, 20);
  Monkey.addAnimation("monkeyRun", RunMonkey)
  Monkey.scale = 0.1
  stage = createSprite(0,0,800,400);
  stage.addImage("jungle.png");
  stage.scale = 1.5
  stage.velocityX = -5;
  stage.x = stage.width/2;
  ground = createSprite(400, 350, 800, 10)
  ground.velocityX = -5;
  ground.x = ground.width/2;
  ground.visibility = false;
  foodGroup = new Group()
  obstacleGroup = new Group()
  score = 0
}

function draw() {
  background(220);
   if (ground.x < 0){ 
       ground.x = ground.width/2;
   }
  if (stage.x < 0){
      stage.x = stage.width/2;
   }
  if (foodGroup.isTouching(monkey)){
    score = score + 2;
    foodGroup.destroyEach();
  }
  switch(score){
    case 10: Monkey.scale = 0.12;
      break;
     case 20: Monkey.scale = 0.14;
      break;
     case 30: Monkey.scale = 0.16;
      break;
    case 40: Monkey.scale = 0.18;
      break;
  }
  if (keyDown("space")){
Monkey.velocityY = -10
 }
 Monkey.velocityY = Monkey.velocityY + 2
  Monkey.collide(ground)
  
  if (obstaclegroup.isTouching(Monkey)){
   score = score - 3
  Monkey.scale = 0.08
  }
  SpawnFood();
  SpawnObstacles();
  //spawning things is the same as spawn clouds and obstacles from a   T rex class
  
  drawSprites();
  text("score = " + score, 500, 50)
}
function SpawnFood(){
if (World.frameCount % 60 === 0){
 var food = createSprite(850, 0, 20, 20)
  foods.addImage(bananaImage)
  banana.y = random(410, 500)
  food.velocity = -5
  food.scale = 0.5
  foodgroup.add(food)
}
}
function SpawnObstacles(){
if (World.frameCount % 75 === 0){
 var Obstacle = createSprite(850, 0, 20, 20)
  Obstacle.addImage("obstacleImage")
  Obstacle.velocity = -7
  Obstacle.scale = 0.5
  obstaclegroup.add(Obstacle)
}
}