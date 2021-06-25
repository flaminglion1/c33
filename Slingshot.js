class SlingShot{
constructor(b1,pointB){

    var options={
        bodyA:b1,
       pointB:pointB,
        stiffness:0.09,length:54
    }
this.sling1=loadImage("sprites/sling1.png");
this.sling2=loadImage("sprites/sling2.png");
this.sling3=loadImage("sprites/sling3.png");

this.chain = Constraint.create(options);
this.pointB = pointB
World.add(world,this.chain)
}
display(){
 image(this.sling1, 200, 20)
 image(this.sling2, 170, 20)
 
    if(this.chain.bodyA){
    var p1 = this.chain.bodyA.position
    var p2 = this.pointB
    push()
    stroke("#8a560d");
   if(p1.x<220){
    strokeWeight(12)
    line(p1.x-20, p1.y, p2.x-10, p2.y)
line(p1.x-20,p1.y,p2.x+30,p2.y-3)
image(this.sling3,p1.x-30,p1.y,15,30)
   }
   else{
    strokeWeight(8)
    line(p1.x+25, p1.y, p2.x-10, p2.y)
line(p1.x+25,p1.y,p2.x+30,p2.y-3)
image(this.sling3,p1.x+25,p1.y-10,15,30)
   }
pop()  
} 
}
fly(){
this.chain.bodyA=null


} 
attach(body){
    this.chain.bodyA=body
}
}

