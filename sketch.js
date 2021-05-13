var bgImg;
var cat,mouse;
var catimg1,catimg2,catimg3,mouseimg1,mouseimg2,mouseimg3;
function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png");
    catimg1=loadAnimation("images/cat1.png");
    catimg2=loadAnimation("images/cat2.png","images/cat3.png");
    catimg3=loadAnimation("images/cat4.png");
    mouseimg1=loadAnimation("images/mouse1.png");
    mouseimg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseimg3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(800,650,30,20);
    cat.addAnimation("standing",catimg1);
    cat.scale=0.15;
    mouse=createSprite(250,650,40,20);
    mouse.addAnimation("standing",mouseimg1);
    mouse.scale=0.13;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x <(cat.width-mouse.width)/2){
        cat.addAnimation("happy",catimg3);
        cat.changeAnimation("happy");
        cat.x=300;
        cat.velocityX=0;
        mouse.addAnimation("happy",mouseimg3);
        mouse.changeAnimation("happy");
       
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    mouse.addAnimation("teasing",mouseimg2);
    mouse.changeAnimation("teasing");
    mouse.frameDelay=25;
    cat.addAnimation("moving",catimg2);
    cat.changeAnimation("moving");
    cat.velocityX=-3;
}

}
