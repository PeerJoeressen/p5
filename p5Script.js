
var apple=[20,30];
var mousePoint=[10,10];
var i=0;
var gameover=false;
var gameovertime=1000;

function setup(){  
    
var width=window.innerWidth-160;
var height=window.innerHeight-60;

    createCanvas(width+50,height+50);  
    
    
}

function draw(){
    clear();
    fill(color(0,0,0));
    text("Score: "+mousePoint[0]+" Timer: "+i,10,10);
    fill(color(0,0,255));  
    ellipse(mouseX,mouseY,mousePoint[0],mousePoint[1]);
    
    fill(color(255,0,0));
    ellipse(apple[0],apple[1],15,15);
 update();
 
 if(gameover){
     fill(0);
    text("Time over Score:"+mousePoint[0],width/2,height/2);
    
    text("Click to restart",width/2,height/2+40);
    
}
   
}

function update(){
    
    if(i==gameovertime){
        gameover=true;}
    if(!gameover){
        i++;
    if(mouseX==apple[0]&&mouseY==apple[1]){
     
     console.log(true);
    }
    console.log(false);
    
    if(mouseX-(mousePoint[0]/2)<apple[0]+5&&mouseX+(mousePoint[0]/2)>apple[0]-5){
        if(mouseY-(mousePoint[0]/2)<apple[1]+5&&mouseY+(mousePoint[1]/2)>apple[1]-5){
        apple=[Math.random()*width, Math.random()*height+10];
        mousePoint=[mousePoint[0]+5,mousePoint[1]+5];
    }
    }}else{
        if(mouseIsPressed){
         restart();   
        }
        
    }
   
        
}
function restart(){
 gameover=false;
 i=0;
  mousePoint=[10,10];
}
/**function highscore(){

var str = "";
var file=new File("highscore.txt");
file.open("r");
	while (!file.eof) {
		// read each line of text
		str += file.readln() + "\n";
}
file.close
    console.log(str);
}*/









    /**if(mouseIsPressed){
        fill(0);
        
    }else{
     fill(255);   
    }
    var ran=Math.random();
    var ran2=Math.random();
    fill(color(mouseY/window.innerHeight*255,ran*255,mouseX/window.innerWidth*255));
    ellipse(ran*window.innerWidth,ran2*window.innerHeight,ran*80,ran*80);
    fill(255);
   text(Math.round(ran),ran*window.innerWidth,ran2*window.innerHeight);*/
