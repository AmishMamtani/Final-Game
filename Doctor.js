class Doctor{
constructor(x,y,width,height){
this.body = createSprite(x,y,width,height);
this.image = loadAnimation("Images/doctor1_opt.png","Images/doctor2_opt.png","Images/doctor3_opt.png","Images/doctor4_opt.png");
this.image.height=52;
this.image.width=41;
this.body.addAnimation("running",this.image);
this.body.addImage("stand",standing);


//this.body.collide(ground.body);

}
    jump(){
        if(keyDown("space")){
            this.body.velocityY = -15;
            //console.log(this.body.velocityY);
            
        }
        this.body.velocityY = this.body.velocityY+1;   
    }

}