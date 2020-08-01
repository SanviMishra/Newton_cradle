class Bob{

    constructor(x, y,radius){
        var options ={
            isStatic:false,
            restitution:0.3,
            friction:0.1,
            density:1.2
        }

       // this.body=Bodies.circle(x, y,radius,options);
        this.body=Bodies.circle(x, y,radius/2,options);
        this.radius=radius;
        this.ball=loadImage("paper.png");
         
        World.add(world,this.body);
    }
   /* display(){
        image(this.ball,250,500,70);
       
        //paper using ellipse instruction
      //ellipse(this.body.position.x,this.body.y,this.radius);
      //ellipseMode(RADIUS);
      // ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }*/
    display(){ 
        
        var pos = this.body.position; 
        fill("yellow");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
     }


}