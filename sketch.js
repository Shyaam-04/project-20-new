var mouse,mouseTeasingImg,mouseEndImg,mouse1;
var cat, catMovingImg, catEndImg,cat1;
var garden, gardenImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
function preload() {
    
    mouse = loadImage("images/mouse1.png");
    mouseTeasingImg = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseEndImg = loadImage("images/mouse4.png");
    cat = loadImage("images/cat1.png");
    catMovingImg = loadAnimation("images/cat2.png","images/cat3.png");
    catEndImg = loadImage("images/cat4.png");
    gardenImg = loadImage("images/garden.png");

    //load the images here
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,500,1200,1200);
    garden.addImage(gardenImg);

    cat1 = createSprite(600,700);
    cat1.addImage(cat);
    cat1.scale = 0.1;
   
    mouse1 = createSprite(100,700);
    mouse1.addImage(mouse);
    mouse1.scale = 0.1;

}

function draw() {

    background(255);
    if(keyDown === LEFT_ARROW){
        mouse1.addAnimation("mouseTeasing",mouseTeasingImg);
        mouse1.changeAnimation("mouseTeasing");
        keyPressed();
    }
    keyPressed();
    if(cat1.isTouching(mouse1)){
        cat1.velocityX = 0;
        cat1.addAnimation("catLastImage",catEndImg);
        cat1.changeAnimation("catLastImage");
        mouse1.addAnimation("mouseLastImage",mouseEndImg);
        mouse1.changeAnimation("mouseLastImage");

    }
    //Write condition here to evalute if tom and jerry collide
    if(cat1.x - mouse1.x < (cat1.width - mouse1.width)/2 &&
    mouse1.x - cat1.x < (mouse1.width - cat1.width)/2 &&
    cat1.y - mouse1.y < (cat1.height - mouse1.height)/2 &&
    mouse1.y - cat1.mouse< (mouse1.height - cat1.height)/2){
        cat1.velocityX = 0;
        cat1.addAnimation("catLastImage",catEndImg);
        cat1.changeAnimation("catLastImage");
        mouse1.addAnimation("MouseLastImage",mouseEndImg);
        mouse1.changeAnimation("MouseLastImage");
    }
    

    drawSprites();
}


function keyPressed(){
    if(keyCode === LEFT_ARROW){
        cat1.velocityX = -5;
        cat1.addAnimation("catRunning",catMovingImg);
        cat1.changeAnimation("catRunning");
        mouse1.addAnimation("mouseTeasing",mouseTeasingImg);
        mouse1.changeAnimation("mouseTeasing");
    }

  //For moving and changing animation write code here


}
