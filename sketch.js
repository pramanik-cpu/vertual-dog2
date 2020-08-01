//Create variables here
var dog,happydog,database,foodS,foodStock,dogImg,happydogImg;
function preload()
{
  //load images here
  happydogImg=loadImage(dogImg1.png);
  dogimg=loadImage(dogImg.png);
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(200,200);
  dog.addImage(dogImg);

  foodStock=database.ref('foog');
  foodStock.on("values",readStock);

}


function draw() {  
background(46,139,87);
fedtime=database.ref('Fedtime');
fedtime.on("value",function(data){
lastfed-data.val();
}); 

  drawSprites();
  //add styles here
   fill("red");
   textSize(2);
   stroke(2);
   display();
   if(lastfed>=12){
     text("lastfeed:"+lastFeed%12,"DM",350,30);
   }
   else if(lastFed===0){
    text("last fed 12AM",350,30);
   }
   else{
     text("lastfed:"+lastFed+"AM"+350,30);
   }
   }


function readStock(data){
  foodS=data.val();

}

function writeStroke(x){
  database.ref('/').update({
    food:x
  })
}
function feedDog(){
  dog.addImage(happydogImg);

   foodobj.updateFoodStock(food0bj.getfoodStock()-1)
   database.ref('/').update({
     Food:foodobj.getFoodStock(),
     FeedTime:hour()
   })
}

function addFood(){
foodS++;
database.ref('/').update({
  food:foodS
})
} 