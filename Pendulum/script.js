var pend,pend2, input1,input2,b;
function setup(){
  createCanvas(800,800);
  frameRate(60);
  background(51);
  pend=new pendulum(50,0.1,random(-155,155));
  pend2=new pendulum(80,0.1,random(-155,155));
  input1=createInput("0","String");
  input2=createInput("0","String");
  b=createButton('change');
  b.position(85,5,64);
  fill(255,155);
  text("Werte: "+pend.getRot()+", "+pend2.getRot(),width/2-100,15);
  input1.position(5,5);
  input2.position(45,5);
  input1.size(30,10);
  input2.size(30,10);
  b.mousePressed(function(){

      pend.setRot(parseFloat(input1.value()));
      pend2.setRot(parseFloat(input2.value()));

      redraw();
      console.log(input1.value());
      console.log(input2.value());
      background(51);

      text("Werte: "+pend.getRot()+", "+pend2.getRot(),width/2-100,15);
  });
}
function mousePressed(){

}

function draw(){
  fill(color(255,0,0,5));
  pend.update();
  pend2.setX(pend.getRotateX());
  pend2.setY(pend.getRotateY());
  pend2.update();


  pend2.drawPen();
  pend2.dotting();

  pend.drawPen();

}
