class Log extends Base {
    constructor(x, y, height, angle) {
      super(x,y,20,height);
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      
      this.image = loadImage("sprites/wood2.png");
      Matter.Body.setAngle(this.body, angle);
     
    }
    
      
  };
  