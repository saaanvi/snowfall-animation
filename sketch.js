
function preload(){
 snowImage = loadImage("snowflake1.webp")
 backgroundImage = loadImage("snow2.jpg")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  for(i = 0; i <50; i++){
    snow = createSprite(random (100,windowWidth),0)
    snow.addImage(snowImage)
    snow.scale = 0.5
    snow.velocityY = 2.5
    
  }
}





function draw() {
  background(backgroundImage);  
  drawSprites();
}