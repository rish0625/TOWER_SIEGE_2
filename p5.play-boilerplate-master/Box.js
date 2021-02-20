class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
    }
    display(){
        if(this.body.speed < 4.5){
          super.display(); 
        } else {
          World.remove(world, this.body);
        }
    }
  
  };