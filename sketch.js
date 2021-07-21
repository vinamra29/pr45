var bg, bgImg, fisherman,fishermanImg
var shark , sharkImg
var fish1,fish1Img,fish1Group1
var fish2,fish2Img,fish2Group2
var fish3,fish3Img,fish3Group3
var fish4,fish4Img,fish4Group4
var fish5, fish5Img,fish5Group5
function preload (){
bg = loadImage ("pond.jpg")
fishermanImg = loadImage ("th-removebg-preview (1).png")
sharkImg = loadImage ("th-removebg-preview.png")
fish2Img = loadImage("fish2-removebg-preview.png")
fish3Img = loadImage("fish3-removebg-preview.png")
fish4Img = loadImage("fish4-removebg-preview.png")
fish1Img = loadImage("fish1-removebg-preview.png")
fish5Img = loadImage ("fish5.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  fisherman = createSprite(1000, 200, 50, 50);
  fisherman.addImage(fishermanImg)

  shark = createSprite (1000,600,10,10)
  shark.addImage(sharkImg)
 
  fish1Group1 = createGroup()
  
 
  fish2Group2 = createGroup()
  
 
  fish3Group3 = createGroup()
 
 
  fish4Group4 = createGroup()

  fish5Group5 = createGroup()
 
}

function draw() {
  background(bg); 
  spawnFish1() 
  spawnFish2()
  spawnFish3()
  spawnFish4()
  drawSprites();
}
function spawnFish1 (){
  if(frameCount%60==0){
    fish1 = createSprite(700,700,10,10)
    fish1.addImage(fish1Img)
    fish1.scale = 0.1
    fish1.velocity
  }
}
function spawnFish2 (){
  if(frameCount%60==0){
    fish2 = createSprite(700,600,10,10)
    fish2.addImage(fish2Img)
    fish2.scale = 0.1
  }
}
function spawnFish3 (){
  if(frameCount%60==0){
    fish3 = createSprite(700,500,10,10)
    fish3.addImage(fish3Img)
    fish3.scale = 0.1
  }
}
function spawnFish4 (){
  if(frameCount%60==0){
    fish4 = createSprite(600,700,10,10)
    fish4.addImage(fish4Img)
    fish4.scale = 0.1
  }
}
function spawnFish5 (){
  if(frameCount%60==0){
    fish5 = createSprite(300,700,10,10)
    fish5.addImage(fish5Img)
   
  }
}