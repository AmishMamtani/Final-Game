var ground;
var gameState="play";
var doctor;
var impact;
var bg,backGround;
var obstacle1,collect1;
var score=0;
var coronaGroup,maskGroup1,maskGroup2,maskGroup3,sanitizerGroup;
var hpValue=7,hp;
var hp1,hp2,hp3,hp4,hp5,hp6,hp7;
var deductLimit=1;
var collect;
var endSound;
function preload(){
collect = loadSound("Sounds/Pickup.mp3");
endSound = loadSound("Sounds/Game Ended.mp3")
impact = loadSound("Sounds/Impact.wav");
standing = loadImage("Images/doctor2_opt.png");

bg = loadImage("Images/BG.png");
hp1=loadImage("Images/HP.png");
hp2=loadImage("Images/hp1.png");
hp3=loadImage("Images/hp2.png");
hp4=loadImage("Images/hp3.png");
hp5=loadImage("Images/hp4.png");
hp6=loadImage("Images/hp5.png");
hp7=loadImage("Images/hp6.png");
}
function setup(){
    createCanvas(1200,800);
    backGround = createSprite(6000,400,12000,800);
    ground = new Ground(600,780,1200,20);
    doctor = new Doctor(100,700,40,100);
    obstacle1 = new Obstacle(600,400,100,100);
    hp=createSprite(width-250,80,50,50);
    hp.addImage("hp7",hp7);
    hp.addImage("hp6",hp6);
    hp.addImage("hp5",hp5);
    hp.addImage("hp4",hp4);
    hp.addImage("hp3",hp3);
    hp.addImage("hp2",hp2);
    hp.addImage("hp1",hp1)
    hp.scale=0.3;
    //mask1 = new Collect();
    collect1 = new Collect();
    coronaGroup = new Group();
    maskGroup1 = new Group();
    maskGroup2 = new Group();
    maskGroup3 = new Group();
    sanitizerGroup = new Group();
}
function draw(){
    background(0)
    if(gameState==="play"){
        backGround.velocityX=-2;
        if(backGround.x===-4800){
            backGround.x=6000;
        }
            ground.reset();
    doctor.jump();
    collect1.spawnMask1();
    collect1.spawnMask2();
    collect1.spawnMask3();
    collect1.collectMask1();
    collect1.collectMask2();
    collect1.collectMask3();
    collect1.spawnSanitizer();
    collect1.collectSanitizer();
    obstacle1.spawn();
    obstacle1.deduct();
    doctor.body.collide(ground.body);   
    }
    backGround.addImage("background",bg);
    backGround.scale = 1.6;
    //backGround.addImage("background",bg);
    //backGround.scale = 1.6;
   
    
    
    //doctor.depth = backGround.depth+1;
    //ground.depth = backGround.depth+1;
    //doctor.body.collide(ground.body);
    //doctor.body.bounceOff(ground.body);
    
   // obstacle1.deduct();
    /*if(deductLimit===1){
        hpValue=hpValue-1;
        deductLimit=0;
    }
    console.log(hpValue);
    switch(hpValue){
        case 6:
            hp.changeImage(hp6);
            break;
        case 5:
            hp.changeImage(hp5);
            break;
        case 4:
            hp.changeImage(hp4);
            break;
        case 3:
            hp.changeImage(hp3);
            break;
        case 2:
            hp.changeImage(hp2);
            break;
        case 1:
            hp.changeImage(hp1);
}*/

    drawSprites();
    fill (255);
    textSize(25);
    text("SCORE: "+score,width-300,50);
    family = Math.round(score/4);
    masterVolume(0.2);

    if(gameState==="end"){
       // fill(0);
        textSize(70);
        text("Game Over",460,400);
        ground.body.velocityX=0;
        backGround.velocityX=0;
        doctor.body.changeImage("stand",standing);
        doctor.body.collide(ground.body);
        doctor.body.velcoityY=0;
        textSize(30);
        text("You Got Infected 😞",510,430);
        text("But you saved "+family+" families 😄",480,460);
    }
    
    
}