class Umbrella {
      
    constructor(){
         this.image=loadImage("images/Walking Frame/walking_1.png")
         var options = {
              isStatic : true,
              restitution : 0.5
         };
          
         this.body = Matter.Bodies.circle(100,450, 150, options);
         this.width = 150;
         this.height = 150;
         World.add(world, this.body);
    }
    display(){
         var pos = this.body.position;
         imageMode(CENTER)
         image(this.image, pos.x, pos.y,this.width,this.height);
    }
}