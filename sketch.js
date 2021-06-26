
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var angle=60;
var poly;
var fighterImg;
var fighter;
var up, upImage;
var down ,downImage;
var block1 ,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15;
var block16,block17,block18,block19,block20,block21,block22,block23,block24,block25,block26,block27,block28,block29,block30;
var block31,block32,block33,block34,block35,block36,block37,block38,block39,block40,block41,block42,block43,block44,block45;
var block46,block47,block48,block49,block50,block51,block52,block53,block54;
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacle7,obstacle8;
var obst1Img,obst2Img,obst3Img,obst4Img,obst5Img,obst6Img,obst7Img,obst8Img;
var bg1,bg2,bg,k1;
var garbage1,garbage2,garbage3,garbage4,garbage5,garbage6,garbage7,garbage8,garbage9,garbage10,garbage11,garbage12;
var garbage1Img,garbage2Img,garbage3Img,garbage4Img;
var gamestate="wait";
var button1,button1Image;
var button2,button2Image;
var l1,l2,l3;

function preload(){

   fighterImg=loadImage("happy2-removebg-preview.png");
  
   downImage=loadImage("down.png");
   bg=loadImage("level1_bg.jpg");
   k1=loadImage("K1.jpg");
   obst1Img=loadImage("cars-removebg-preview.png");
   obst2Img=loadImage("cat-removebg-preview.png");
   obst3Img=loadImage("cat3-removebg-preview.png");
   obst4Img=loadImage("dog-removebg-preview.png");
   obst5Img=loadImage("dog2-removebg-preview.png");
   obst6Img=loadImage("grandma-removebg-preview.png");
   obst7Img=loadImage("pedestrain-removebg-preview.png");
   obst8Img=loadImage("truck2-removebg-preview.png");
   button2Image=loadImage("homeButton-removebg-preview.png");
   garbage1Img=loadImage("trash1-removebg-preview.png");
   garbage2Img=loadImage("trash2-removebg-preview.png");
   garbage3Img=loadImage("trash3-removebg-preview.png");
   garbage4Img=loadImage("trash4-removebg-preview.png");
   l1=loadImage("level1.png");
   l2=loadImage("level2.png");
   l3=loadImage("level3.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;
  
  bg1=createSprite(400,400,800,800);
  bg1.addImage(k1);
  bg2=createSprite(400,400,800,800);
  bg.resize(800,800);
  bg2.addImage(bg)
  //bg2.scale=1.2;
 
  
  garbage1=createSprite(107,680,20,20);
  garbage1.addImage(garbage1Img);
  garbage1.scale=0.5;

  garbage2=createSprite(585,250,20,20);
  garbage2.addImage(garbage2Img);
  garbage2.scale=0.5;

  garbage3=createSprite(615,380,20,20);
  garbage3.addImage(garbage3Img);
  garbage3.scale=0.5;

  garbage4=createSprite(480,130,20,20);
  garbage4.addImage(garbage4Img);
  garbage4.scale=0.5;

  garbage5=createSprite(120,255,20,20);
  garbage5.addImage(garbage1Img);
  garbage5.scale=0.5;

  garbage6=createSprite(640,700,20,20);
  garbage6.addImage(garbage2Img);
  garbage6.scale=0.5;

  garbage7=createSprite(80,480,20,20);
  garbage7.addImage(garbage3Img);
  garbage7.scale=0.5;

  garbage8=createSprite(50,140,20,20);
  garbage8.addImage(garbage4Img);
  garbage8.scale=0.5;

  garbage9=createSprite(460,700,20,20);
  garbage9.addImage(garbage1Img);
  garbage9.scale=0.5;

  garbage10=createSprite(400,480,20,20);
  garbage10.addImage(garbage2Img);
  garbage10.scale=0.5;

  garbage11=createSprite(270,340,20,20);
  garbage11.addImage(garbage3Img);
  garbage11.scale=0.5;

  garbage12=createSprite(480,430,20,20);
  garbage12.addImage(garbage4Img);
  garbage12.scale=0.5;

  block1=createSprite(5,180,10,350);
  

  block2=createSprite(5,610,10,350);
  
  block3=createSprite(80,350,150,10);
  block4=createSprite(80,440,150,10);
  block5=createSprite(400,790,800,10);
  block6=createSprite(400,10,800,10);
  block7=createSprite(50,170,80,10);
  block8=createSprite(155,470,10,70);
  block9=createSprite(155,150,10,150);
  block10=createSprite(130,70,60,10);
  block11=createSprite(120,230,80,10);
  block12=createSprite(80,255,10,60);
  block13=createSprite(185,290,220,10);
  block14=createSprite(230,340,10,90);
  block15=createSprite(290,340,10,90);
  block16=createSprite(290,510,10,110);
  block17=createSprite(185,570,220,10);
  block18=createSprite(80,650,10,150);
  block19=createSprite(107,720,65,10);
  block20=createSprite(143,685,10,80);
  block21=createSprite(275,650,270,10);
  block22=createSprite(210,750,10,90);
  block23=createSprite(280,700,10,90);
  block24=createSprite(350,750,10,90);
  block25=createSprite(415,690,10,90);
  block26=createSprite(360,450,150,10);
  block27=createSprite(330,390,90,10);
  block28=createSprite(440,390,10,240);
  block29=createSprite(400,325,90,10);
  block30=createSprite(400,510,90,10);
  block31=createSprite(425,270,140,10);
  block32=createSprite(360,200,10,150);
  block33=createSprite(257,130,197,10);
  block34=createSprite(330,70,180,10);
  block35=createSprite(425,140,10,150);
  block36=createSprite(490,250,10,50);
  block37=createSprite(585,230,180,10);
  block38=createSprite(525,130,10,50);
  block39=createSprite(480,100,100,10);
  block40=createSprite(595,65,10,100);
  block41=createSprite(670,180,10,100);
  block42=createSprite(460,730,90,10);
  block43=createSprite(500,690,10,90);
  block44=createSprite(580,650,10,160);
  block45=createSprite(580,570,90,10);
  block46=createSprite(625,515,160,10);
  block47=createSprite(615,350,120,10);
  block48=createSprite(550,420,10,195);
  block49=createSprite(680,385,10,140);
  block50=createSprite(740,450,120,10);
  block51=createSprite(640,730,130,10);
  block52=createSprite(700,625,10,210);
  block53=createSprite(795,235,10,440);
  block54=createSprite(795,610,10,350);
  block55=createSprite(740,320,120,10);

  fighter=createSprite(15,400,20,20);
   fighter.addImage(fighterImg);
   fighter.scale=0.15;

  obstacle1=createSprite(200,100,20,20);
  obstacle1.addImage(obst1Img);
  obstacle1.scale=0.3;
  
  obstacle2=createSprite(270,470,20,20);
  obstacle2.addImage(obst2Img);
  obstacle2.scale=0.15;
  
  obstacle3=createSprite(460,370,20,20);
  obstacle3.addImage(obst3Img);
  obstacle3.scale=0.15;
  
  obstacle4=createSprite(510,490,20,20);
  obstacle4.addImage(obst4Img);
  obstacle4.scale=0.3;
  
  obstacle5=createSprite(400,520,20,20);
  obstacle5.addImage(obst5Img);
  obstacle5.scale=0.15;
  
  obstacle6=createSprite(570,440,20,20);
  obstacle6.addImage(obst8Img);
  obstacle6.scale=0.15;
  
  obstacle7=createSprite(700,180,20,20);
  obstacle7.addImage(obst7Img);
  obstacle7.scale=0.1;
 
  obstacle8=createSprite(240,160,20,20);
  obstacle8.addImage(obst6Img);
  obstacle8.scale=0.15;
  
  obstacle1.velocityY=3.5;
  obstacle2.velocityX=3.5;
  obstacle3.velocityX=2;
  obstacle4.velocityX=2;
  obstacle5.velocityY=4;
  obstacle6.velocityX=4;
  obstacle7.velocityX=2;
  obstacle8.velocityY=4;
  
   
    
 
  level1=createSprite(500,400,20,20);
  level1.addImage(l1);
  level1.scale=0.7;
  level2=createSprite(650,400,20,20);
  level2.addImage(l2);
  level2.scale=0.7;
  level3=createSprite(800,400,20,20);
  level3.addImage(l3);
  level3.scale=0.7;
  
}


function draw() 
{
  
  Engine.update(engine);

  if(gamestate==="wait"){
    background("white");
    
    bg1.visible=true;
    bg2.visible=false;
    start();
  //button1.position(200,400);
  
   

  }
  
  else if(gamestate==="play"){
    background("white");
    
    bg1.visible=false;
    bg2.visible=true;
    objects1();
  }

  if(fighter.isTouching(obstacle1)||fighter.isTouching(obstacle2)||fighter.isTouching(obstacle3)||fighter.isTouching(obstacle4)
  ||fighter.isTouching(obstacle5)||fighter.isTouching(obstacle6)||fighter.isTouching(obstacle7)||fighter.isTouching(obstacle8)){
      lose();
      
  }

  

  obstacle1.bounceOff(block33);
  obstacle1.bounceOff(block6);
  obstacle2.bounceOff(block8);
  obstacle2.bounceOff(block16);
  obstacle3.bounceOff(block28);
  obstacle3.bounceOff(block48);
  obstacle4.bounceOff(block28);
  obstacle4.bounceOff(block48);
  obstacle5.bounceOff(block30);
  obstacle5.bounceOff(block21);
  obstacle6.bounceOff(block48);
  obstacle6.bounceOff(block49);
  obstacle7.bounceOff(block41);
  obstacle7.bounceOff(block53);
  obstacle8.bounceOff(block33);
  obstacle8.bounceOff(block13);

  fighter.collide(block1);
  fighter.collide(block2);
  fighter.collide(block3);
  fighter.collide(block4);
  fighter.collide(block5);
  fighter.collide(block6);
  fighter.collide(block7);
  fighter.collide(block8);
  fighter.collide(block9);
  fighter.collide(block10);
  fighter.collide(block11);
  fighter.collide(block12);
  fighter.collide(block13);
  fighter.collide(block14);
  fighter.collide(block15);
  fighter.collide(block16);
  fighter.collide(block17);
  fighter.collide(block18);
  fighter.collide(block19);
  fighter.collide(block20);
  fighter.collide(block21);
  fighter.collide(block22);
  fighter.collide(block23);
  fighter.collide(block24);
  fighter.collide(block25);
  fighter.collide(block26);
  fighter.collide(block27);
  fighter.collide(block28);
  fighter.collide(block29);
  fighter.collide(block30);
  fighter.collide(block31);
  fighter.collide(block32);
  fighter.collide(block33);
  fighter.collide(block34);
  fighter.collide(block35);
  fighter.collide(block36);
  fighter.collide(block37);
  fighter.collide(block38);
  fighter.collide(block39);
  fighter.collide(block40);
  fighter.collide(block41);
  fighter.collide(block42);
  fighter.collide(block43);
  fighter.collide(block44);
  fighter.collide(block45);
  fighter.collide(block46);
  fighter.collide(block47);
  fighter.collide(block48);
  fighter.collide(block49);
  fighter.collide(block50);
  fighter.collide(block51);
  fighter.collide(block52);
  fighter.collide(block53);
  fighter.collide(block54);
  fighter.collide(block55);

        
  
  


  drawSprites();
}

function objects1(){
 // background("black");
  //textSize(30);
 // text("Welcome to Level1",400,200);
  block1.visible=true;
  block2.visible=true;
  block3.visible=true;
  block4.visible=true;
  block5.visible=true;
  block6.visible=true;
  block7.visible=true;
  block8.visible=true;
  block9.visible=true;
  block10.visible=true;
  block11.visible=true;
  block12.visible=true;
  block13.visible=true;
  block14.visible=true;
  block15.visible=true;
  block16.visible=true;
  block17.visible=true;
  block18.visible=true;
  block19.visible=true;
  block20.visible=true;
  block21.visible=true;
  block22.visible=true;
  block23.visible=true;
  block24.visible=true;
  block25.visible=true;
  block26.visible=true;
  block27.visible=true;
  block28.visible=true;
  block29.visible=true;
  block30.visible=true;
  block31.visible=true;
  block32.visible=true;
  block33.visible=true;
  block34.visible=true;
  block35.visible=true;
  block36.visible=true;
  block37.visible=true;
  block38.visible=true;
  block39.visible=true;
  block40.visible=true;
  block41.visible=true;
  block42.visible=true;
  block43.visible=true;
  block44.visible=true;
  block45.visible=true;
  block46.visible=true;
  block47.visible=true;
  block48.visible=true;
  block49.visible=true;
  block50.visible=true;
  block51.visible=true;
  block52.visible=true;
  block53.visible=true;
  block54.visible=true;
  block55.visible=true;

  garbage1.visible=true;
  garbage2.visible=true;
  garbage3.visible=true;
  garbage4.visible=true;
  garbage5.visible=true;
  garbage6.visible=true;
  garbage7.visible=true;
  garbage8.visible=true;
  garbage9.visible=true;
  garbage10.visible=true;
  garbage11.visible=true;
  garbage12.visible=true;



  level1.visible=false;
  level2.visible=false;
  level3.visible=false;

  fighter.visible=true;
  obstacle1.visible=true;
  obstacle2.visible=true;
  obstacle3.visible=true;
  obstacle4.visible=true;
  obstacle5.visible=true;
  obstacle6.visible=true;
  obstacle7.visible=true;
  obstacle8.visible=true;

  
 
  if(keyDown(UP_ARROW)){
    fighter.y=fighter.y-4;
  }

  if(keyDown(DOWN_ARROW)){
    fighter.y=fighter.y+4;
  }

  if(keyDown(RIGHT_ARROW)){
    fighter.x=fighter.x+4;
  }
  
  if(keyDown(LEFT_ARROW)){
    fighter.x=fighter.x-4;
  }

 
  

}

function start(){
  //background("black");
    //button1=createSprite(200,400,50,50);

  block1.visible=false;
  block2.visible=false;
  block3.visible=false;
  block4.visible=false;
  block5.visible=false;
  block6.visible=false;
  block7.visible=false;
  block8.visible=false;
  block9.visible=false;
  block10.visible=false;
  block11.visible=false;
  block12.visible=false;
  block13.visible=false;
  block14.visible=false;
  block15.visible=false;
  block16.visible=false;
  block17.visible=false;
  block18.visible=false;
  block19.visible=false;
  block20.visible=false;
  block21.visible=false;
  block22.visible=false;
  block23.visible=false;
  block24.visible=false;
  block25.visible=false;
  block26.visible=false;
  block27.visible=false;
  block28.visible=false;
  block29.visible=false;
  block30.visible=false;
  block31.visible=false;
  block32.visible=false;
  block33.visible=false;
  block34.visible=false;
  block35.visible=false;
  block36.visible=false;
  block37.visible=false;
  block38.visible=false;
  block39.visible=false;
  block40.visible=false;
  block41.visible=false;
  block42.visible=false;
  block43.visible=false;
  block44.visible=false;
  block45.visible=false;
  block46.visible=false;
  block47.visible=false;
  block48.visible=false;
  block49.visible=false;
  block50.visible=false;
  block51.visible=false;
  block52.visible=false;
  block53.visible=false;
  block54.visible=false;
  block55.visible=false;

  garbage1.visible=false;
  garbage2.visible=false;
  garbage3.visible=false;
  garbage4.visible=false;
  garbage5.visible=false;
  garbage6.visible=false;
  garbage7.visible=false;
  garbage8.visible=false;
  garbage9.visible=false;
  garbage10.visible=false;
  garbage11.visible=false;
  garbage12.visible=false;

  level1.visible=true;
  level2.visible=true;
  level3.visible=true;


  fighter.visible=false;
  obstacle1.visible=false;
  obstacle2.visible=false;
  obstacle3.visible=false;
  obstacle4.visible=false;
  obstacle5.visible=false;
  obstacle6.visible=false;
  obstacle7.visible=false;
  obstacle8.visible=false;

  if(mousePressedOver(level1) == true){
    gamestate="play";
  }

}



function lose(){
 
  
  
   obstacle1.velocityY=0;
   obstacle2.velocityX=0;
   obstacle3.velocityX=0;
   obstacle4.velocityX=0;
   obstacle5.velocityY=0;
   obstacle6.velocityX=0;
   obstacle7.velocityX=0;
   obstacle8.velocityY=0;
   
   fighter.x=15;
  fighter.y=400;

   swal(
    {
      title: `oops!!!`,
     
      imageUrl:
        "https://64.media.tumblr.com/tumblr_m6wnecNK131qzs63fo1_1280.png",
      imageSize: "150x150",
      confirmButtonText: "Play Again"
    },
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );
}