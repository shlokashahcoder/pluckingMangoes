class Stone{
    constructor(x,y,r){
       var options = {
           isStatic: false,
           restitution: 0,   
           friction:1,
           density:1.2
       }
       this.x = x
       this.y = y
       this.r = r
       this.image = loadImage("stone.png")
       this.body = Bodies.circle(this.x,this.y,this.r,options)
       World.add(world,this.body)
    }
    display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill("red")
    imageMode(CENTER)
    ellipseMode(CENTER)
    image(this.image, 0,0,this.r*2, this.r*2)
        pop();
    }
}



/*

class Mango{
    constructor(x,y,r){
       var options = {
           isStatic: true,
           restitution: 0,   
           friction:1
       }
       this.x = x
       this.y = y
       this.r = r
       this.image = loadImage("mango.png")
       this.body = Bodies.circle(this.x,this.y,this.r,options)
       World.add(world,this.body)
    }
    display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255,0,255)
    imageMode(CENTER);
    ellipseMode(CENTER);
    image(this.image, 0,0,this.r*2, this.r*2)
    pop();
    }
}
*/

