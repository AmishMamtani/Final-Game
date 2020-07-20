class Collect{
    constructor(x,y,width,height){
    }
    spawnMask1(){
        if(frameCount%500===0){
            this.body=createSprite(random(600,1200),random(500,700),50,50);
            this.image = loadImage("Images/Mask.png")
            this.body.addImage("mask",this.image);
            this.body.scale=0.15;
            this.body.velocityX=Math.round(random(-4,-6));
            //console.log(this.body.velocityX)
            maskGroup1.add(this.body);
            
        }
    }
    spawnMask2(){
        if(frameCount%400===0){
            this.body=createSprite(random(600,1200),random(500,700),50,50);
            this.image = loadImage("Images/Mask.png")
            this.body.addImage("mask",this.image);
            this.body.scale=0.15;
            this.body.velocityX=Math.round(random(-4,-6));
            //console.log(this.body.velocityX)
            maskGroup2.add(this.body);
            
        }
    }
    spawnMask3(){
        if(frameCount%600===0){
            this.body=createSprite(random(600,1200),random(500,700),50,50);
            this.image = loadImage("Images/Mask.png")
            this.body.addImage("mask",this.image);
            this.body.scale=0.15;
            this.body.velocityX=Math.round(random(-4,-6));
            //console.log(this.body.velocityX)
            maskGroup3.add(this.body);
            
        }
    }
    spawnSanitizer(){
        if(frameCount%500===0){
            this.body=createSprite(1200,random(600,750),50,50);
            this.image = loadImage("Images/sani.png")
            this.body.addImage("sanitizer",this.image);
            this.body.velocityX=Math.round(random(-4,-6));
            this.body.scale=0.2;
            sanitizerGroup.add(this.body);
        }
     }
     collectMask1(){
         if(maskGroup1.isTouching(doctor.body)){
             collect.play();
            maskGroup1.setLifetimeEach(0);
            score = score+1;
        }
     }
     collectMask2(){
        if(maskGroup2.isTouching(doctor.body)){
            collect.play();
           maskGroup2.setLifetimeEach(0);
           score = score+1;
       }
    }
    collectMask3(){
        if(maskGroup3.isTouching(doctor.body)){
            collect.play();
           maskGroup3.setLifetimeEach(0);
           score = score+1;
       }
    }
     collectSanitizer(){
         if(sanitizerGroup.isTouching(doctor.body)){
            collect.play();
             sanitizerGroup.setLifetimeEach(0);
             score = score+2;
         }
     }
}