class Block {
    constructor(x,y,width,height,color) {
      var options = {
          isStatic: false          
          
        }
     
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.color = color;
     
      World.add(world, this.body);
    
    }

    display() {
      
      fill(this.color);
      if(!this.Visibilty) {
        this.Visibilty = 255;
      }
      
      var pos =this.body.position;
      if (this.body.speed < 12) {      
        rectMode(CENTER);
        fill(this.color);
        rect(pos.x, pos.y, this.width, this.height);
      }
      else {
        World.remove(world,this.body)
        push();
        this.Visibilty = this.Visibilty - 6;
        tint(255,this.Visibilty);
        pop();
      }
      
    }
      score(){
       
        if (this.Visibilty < 0 && this.Visibilty > -105){
          score = score + 1;
          
        }
      }   
}




    
