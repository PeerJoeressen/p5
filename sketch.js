var fr=60;
var mouse=[];
var player=[]
var va=[[]];
var i=0;
function setup() {
frameRate(fr);
cursor(CROSS);
createCanvas(window.innerWidth,window.innerHeight);
player=[width/2,height/2];
va[1]=[0,0,0,0]
}

function draw() {
update();
clear();
for(var u=0;u<va.length;u++){
		ellipse(va[u][0],va[u][1],2,2);
	}
if(keyIsDown(87)){
		player[1]=player[1]-5;
}
if(keyIsDown(83)){
		player[1]=player[1]+5;
}
if(keyIsDown(68)){
		player[0]=player[0]+5;
}
if(keyIsDown(65)){
		player[0]=player[0]-5;
}

fill(0,0,255);
ellipse(player[0],player[1],10,10);

if(mouseX<player[0]){
	player[2]=player[0]-10;
}else{

	player[2]=player[0]+10;

}
if(mouseY<player[1]){
	player[3]=player[1]-10;

}else{
	player[3]=player[1]+10;

}
fill(205,170,125);
line(player[0],player[1],player[2],player[3]);

fill(0);
text("Fps: "+floor(frameRate())+" Frame "+frameCount,10,10);


}

function mouseClicked(){
	va[i]=[player[0],player[1],mouseX,mouseY];

	console.log(va[i][0]+" "+va[i][1]);
	i++;

}
function update(){
	for(var u=0;u<va.length;u++){
		if(va[u][0]>va[u][2]){
			va[u][0]=va[u][0]-5
		}
		if(va[u][0]<va[u][2]){
			va[u][0]=va[u][0]+5
		}
		if(va[u][1]>va[u][3]){
			va[u][1]=va[u][1]-5
		}
		if(va[u][1]<va[u][3]){
			va[u][1]=va[u][1]+5
		}
	}
}

/**function keyPressed() {
 
  
if (key == 'w'||key == 'W')  {
		player[1]=player[1]-5;
}
if (key == 's'||key == 'S') {
		player[1]=player[1]+5;
}
if (key == 'd'||keyCode == 'D') {
		player[0]=player[0]+5;
}
if (key == 'a'||key == 'A') {
		player[0]=player[0]-5;
}
  return false; // prevent default
}*/