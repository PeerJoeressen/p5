
function pendulum(len, wink,rot){
  var x ,y , len, rotateY, rotateX,wink,rot;

  this.x=width/2;
  this.y=height/2;
  this.len=len;
  this.wink=0;
  this.wink=wink;
  this.rot=0;
  this.rot=rot;
  this.rotateX=0;
  this.rotateY=0

  this.drawPen=function(){
    stroke(color(2,255,125,100));
    line(this.x,this.y,this.rotateX,this.rotateY);
    }
    this.setX=function(x){
      this.x=x;
    }
    this.setY=function(y) {
      this.y=y;
    }
    this.getRotateX=function(){
      return this.rotateX;
    }
    this.getRotateY=function(){
      return this.rotateY;
    }
    this.update=function(){

      this.rotateX=this.x+this.len*Math.cos(this.wink);
      this.rotateY=this.y+this.len*Math.sin(this.wink);
      this.wink=this.wink+this.rot;
    }
    this.getRot=function(){
      return this.rot;
    }
    this.setRot=function(wi){
      this.rot=wi;
      this.wink=0.1;
    }
    this.dotting=function(){
      stroke(color(255,0,0,30));
    }

}
