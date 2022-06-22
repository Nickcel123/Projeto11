
var barco, shipImg ;
var sea, seaImg;






function preload(){
  seaImg = loadImage("sea.png");
 
   shipImg = loadAnimation("ship-1.png", "ship-2.png","ship-3.png","ship-4.png");
 

 


}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(400, 200);
  sea.addImage(seaImg);
  sea.scale = 0.3;
  sea.velocityX = -3;

 barco = createSprite(200, 250);
 barco.addAnimation("barquinho", shipImg);
 barco.scale = 0.3
 



}

function draw() {
  background("white");

   if (sea.x < 0){
     sea.x = 400


   }

    drawSprites();

 
}
