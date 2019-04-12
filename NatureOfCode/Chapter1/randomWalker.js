  var x,y;
function randomWalker(){
  this.x=width/2;
  this.y=height/2;

   this.render=function(){
   fill(color(0,200,0));  
   stroke(color(200,0,0,40));
   triangle(this.x,this.y,this.x+2,this.y-2,this.x,this.y-4);
  }
  this.move=function(){
  var i =Math.floor(Math.random()*4);
  console.log(i);
   if(i==0){
     this.y+=1;
   }else if(i==1){
     this.x+=1;
   }else if(i==2){
     
     this.y-=1;
   }else if(i==3){
     this.x-=1;
   }
   this.x=constrain(this.x,0,width);
   this.y=constrain(this.y,0,height);
}}