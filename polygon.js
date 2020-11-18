class Polygon{
    constructor(x,y,diameter){
       var options ={
           isStatic:false,
           'restitution': 0.2, 
           'friction': 0.4, 
           'density': 0.2
       }

       this.body = Bodies.circle(x,y,diameter,options);
       this.x = x;
       this.y = y;
       this.diameter = diameter;
       World.add(world, this.body);
   }

   display(){
       var pos = this.body.position;
       push();
       translate(pos.x,pos.y);

       rectMode(CENTER);

       fill("yellow");
       ellipse(0,0, this.diameter,this.diameter);
       pop();
   }
}
