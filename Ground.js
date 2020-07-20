class Ground{
    constructor(x,y,width,height){
    
    this.body = createSprite(x,y,width,height);
    this.body.velocityX = -5;
    this.image = loadImage("Images/ground.png")
    this.body.addImage("ground",this.image)

    }
    reset(){
        //console.log(this.body.x);
        if(this.body.x<250){
            //console.log(this.body.width/2)
            this.body.x = 600; 
        }
    }
}