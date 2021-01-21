class Pig extends Base{
    constructor(x, y) {
      super(x,y,50,50);
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      
      this.image = loadImage("sprites/enemy.png");
     
    }
    
  };
  