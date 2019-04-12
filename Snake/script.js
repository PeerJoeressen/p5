var s,height,width;
var food;
var gameover;

function setup(){
	width=600;
	height=600;
	frameRate(25);
	createCanvas(width,height);
	generateFood();
	s=new snake();
	gameover=0;
}
function generateFood(){
	var x=Math.floor(Math.random()*width);
	var y=Math.floor(Math.random()*height);
	food=[x-x%10,y-y%10];
}
function drawFood(){
	fill(255,0,50);
	rect(food[0],food[1],10,10);
}


function draw(){
	background(51);
	if(gameover==0){
	s.update();	
	s.collision();
	
	s.eatFood();}else{
	text("Gameover Score: "+s.len,width/2-100,height/2);

	text("Click to restart",width/2-85,height/2+20);

}
	console.log(gameover);
	drawFood();
	s.draw();
}
function mouseClicked(){
	if(gameover==1){
		gameover=0;
		s.len=1;
	 s.x=0;
	 s.y=0; 
	 s.dirx=1;
	 s.diry=0;
	 s.len=0;
	 s.io=0;
	 hist[0][0]=[0];
	 hist[0][1]=[0];
	 for(var p=0;p<10;p++){
	 hist.shift();}

	 
	}

}

function keyPressed(){
	if(keyCode===87){
		s.updateDir(0,-1);
	}
	if(keyCode===65){
		s.updateDir(-1,0);
	}
	if(keyCode===83){
		s.updateDir(0,1);
	}
	if(keyCode===68){		
		s.updateDir(1,0);
	}
	console.log(key);
}
