//Create variables here
var dog,dog1IMG;
var happyDog,happyDogIMG;
var foodS,foodSIMG;
var foodStock,foodStockIMG;
function preload(){

  //load images here
 dog1IMG=loadImage("images/dogIMG.png") 
 happyDogIMG=loadImage("images/happyDogIMG.png") 
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(300, 300,10,10);
dog.addImage("dog",dog1IMG) 
dog.addImage("dogH",happyDogIMG)
dog.scale=0.2
foodStock=database.ref('food');
foodStock.on("value",readStock)
}


function draw() {  
background(46,139,87)
if (keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.changeImage("dogH",happyDogIMG)
}
  drawSprites();
  text("NOTE:PRESS THE UP ARROW TO FEED THE DOG",50,50)
  
  //add styles here
  fill("black")
text("FOOD STOCK"+foodS,200,200)

}
function readStock(data){
foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
database.ref('/').update({
  food:x
})
}

