var t,height,width;
function setup(){
		width=600;
	height=600;

   createCanvas(width,height); 
   background(color(0,0,0));
   
  t= new randomWalker();
}

function draw(){
	
    t.render();
   t.move();
}