
 
 var b;
 var prize;
 
function setup(){
  var height=600;
 var width=800;
  prize=[random(0,height),
                random(0,height),random(0,height),
                random(0,height),random(0,height),
                random(0,height),random(0,height),
                random(0,height)] ;
  frameRate(250);
  createCanvas(width,height);
  b=new bank();
  for(var o=0;o<prize.length;o++){
   console.log(prize[o]);
  
  }
 
}

function draw(){
  background(51);
    update();
    //topBottomCollision();  
  var p=0;
  for(var i =0;i<prize.length;i++){    
   fill(color(210,210,210));
   rect(p,height,100,-prize[i]);
   fill(color(0,200,0));

   text("Owning: "+b.shares[i],p+30,height/20);
   text("Sell",p+40,height-height*0.25);
   
   fill(color(200,0,0));
   text("Buy",p+40,height/2/2);
   text(Math.round(prize[i])+"\€",p+40,height/2);

   
   
   fill(color(200,0,0));
   text("Money: "+Math.round(b.money)+" \€",5,15);
   p+=100;   
  }
  
}
function mouseClicked(){
  if(mouseY<height/2){
   if(mouseX<100){
     b.buyShare(prize[0],0);
   }else if(mouseX<200){
     b.buyShare(prize[1],1);
   }else if(mouseX<300){
     b.buyShare(prize[2],2);
   }else if(mouseX<400){
     b.buyShare(prize[3],3);
   }else if(mouseX<500){
     b.buyShare(prize[4],4);
   }else if(mouseX<600){
     b.buyShare(prize[5],5);
   }else if(mouseX<700){
     b.buyShare(prize[6],6);
   }else if(mouseX<800){
     b.buyShare(prize[7],7);
   }}
   if(mouseY>height/2){
     if(mouseX<100){
     b.sellShare(prize[0],0);
   }else if(mouseX<200){
     b.sellShare(prize[1],1);
   }else if(mouseX<300){
     b.sellShare(prize[2],2);
   }else if(mouseX<400){
     b.sellShare(prize[3],3);
   }else if(mouseX<500){
     b.sellShare(prize[4],4);
   }else if(mouseX<600){
     b.sellShare(prize[5],5);
   }else if(mouseX<700){
     b.sellShare(prize[6],6);
   }else if(mouseX<800){
     b.sellShare(prize[7],7);
   }
   }
}
function update(){
    var add = [randomGaussian()*2,
      randomGaussian()*2,
      randomGaussian()*2,
        randomGaussian()*2,
        randomGaussian()*2,
        randomGaussian()*2,
        randomGaussian()*2,
        randomGaussian()*2];
        prize[0]=prize[0]+add[0];
        prize[1]=prize[1]+add[1];
        prize[2]=prize[2]+add[2];
        prize[3]=prize[3]+add[3];
        prize[4]=prize[4]+add[4];
        prize[5]=prize[5]+add[5];
        prize[6]=prize[6]+add[6];        
        prize[7]=prize[7]+add[7];
  }
  

function gaussianRand(){
  var x1, x2, rad, y1;
  do {
    x1 = 2 * random() - 1;
    x2 = 2 * random() - 1;
    rad = x1 * x1 + x2 * x2;
  } while(rad >= 1 || rad == 0);
  var c = Math.sqrt(-2 * Math.log(rad) / rad);
  return x1 * c;
}


  function topBottomCollision(){        
        prize[0]=constrain(prize[0],0,height);
        prize[1]=constrain(prize[1],0,height);
        prize[2]=constrain(prize[2],0,height);
        prize[3]=constrain(prize[3],0,height);
        prize[4]=constrain(prize[4],0,height);
        prize[5]=constrain(prize[5],0,height);
        prize[6]=constrain(prize[6],0,height);
        prize[7]=constrain(prize[7],0,height);
  }