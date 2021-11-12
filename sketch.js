var PLAY = 1;
var END = 0;
var gameState = PLAY;

var ground,player;
var invisibleGround,zombie;
var zombieImg,bg,boy,skullImg,handImg,deadImg,bg2,coinImg;
var gameOverImg,restartImg;

var handGroup,coinsGroup,skullGroup;
var gameOver,restart,score;

var point,point2,bgm,growl;

function preload(){
    bg=loadImage("images/Cartoon_Forest_BG_03.png");
    boy=loadAnimation("images/PC_AttackSwing1.png");
    boy=loadAnimation("images/knight/sprite_0.png","images/knight/sprite_1.png","images/knight/sprite_2.png","images/knight/sprite_3.png","images/knight/sprite_4.png", "images/knight/sprite_5.png", "images/knight/s03.png","images/knight/s13.png")
  
   
  

    monster6Img=loadAnimation("images/monster6/s1.png","images/monster6/s2.png","images/monster6/s3.png","images/monster6/s5.png","images/monster6/s6.png","images/monster6/s7.png");
  
  
   
     

}

function setup(){
    createCanvas(800,500);
    ground = createSprite(500,-120,0,0);
    ground.scale = 1.4;
    ground.x = ground.width/2;
    ground.velocityX = -4;
    ground.addImage(bg);

    invisibleGround = createSprite(400,470,800,10);
    invisibleGround.visible = false;

    player = createSprite(250,460,20,100);
    player.addAnimation("a",boy);
    player.scale = 0.2
   // player.debug=true;
    player.setCollider("circle",0,0,500);

    invisibleGround = createSprite(400,480,800,10);
    invisibleGround.visible = false;

    zombie = createSprite(50,410,20,100);
    zombie.addAnimation("z", monster6Img);
    zombie.scale = 2;

}

function draw(){

    background("black");

    player.velocityY = player.velocityY+0.8;

    if(gameState === PLAY){
      

  

      if(ground.x<80){
        ground.x=ground.width/2;
        }
    }


    player.collide(invisibleGround);

drawSprites()
    
}

