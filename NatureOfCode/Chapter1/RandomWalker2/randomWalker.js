  var x,y;
function randomWalker(){
  this.x=width/2;
  this.y=height/2;

   this.render=function(){

  stroke(color(25,25,25));
  fill(color(255,0,0));
   ellipse(this.x,this.y,4,4);
  }
  this.move=function(){
  var i =Math.floor(Math.random()*4);
  console.log(i);
   if(i==0){
     this.y+=4;
   }else if(i==1){
     this.x+=4;
   }else if(i==2){
     
     this.y-=4;
   }else if(i==3){
     this.x-=4;
   }
   this.x=constrain(this.x,0,width);
   this.y=constrain(this.y,0,height);
}}