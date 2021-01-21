class Base{
    //properties
    constructor(x,y,width,height,angle){
        //passing several options in the body
        var options = {
        restitution:0.8,
        friction:1,
        density:1   
        }
        //creating a general body from Matter Bodies class
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        //to load the image
        this.image = loadImage("sprites/base.png");
        //adding the body with its world to the main World class
        World.add(world,this.body);
    }

    //functions
    display(){
     //namespacing
     var pos = this.body.position;
     var angle = this.body.angle;   
     //to push changes from this point
     push();
     translate(pos.x,pos.y);
     rotate(angle);
     imageMode(CENTER);
     image(this.image,0,0,this.width,this.height);
     pop();

    }
}