var x;
var y;
var io;
var len;
var dirx;
var diry;
var hist=[[]];

function snake(){
	 this.len=1;
	 this.x=0;
	 this.y=0; 
	 this.dirx=1;
	 this.diry=0;
	 this.len=0;
	 this.io=0;
	 hist[0][0]=[0];
	 hist[0][1]=[0];
	 hist.shift();

this.update=function (){
	
	hist.push([this.x,this.y]);
if(this.io<this.len){
	this.io=this.len;
	}else{
		hist.shift();
	}
	

	this.x+=this.dirx*10;
	this.y+=this.diry*10;
	this.x=constrain(this.x,0,width-10);
	this.y=constrain(this.y,0,height-10);

}

this.collision=function(){
	for(var o=0;o<hist.length;o++){
		if(this.x==hist[o][0]){
			if(this.y==hist[o][1]){
			gameover=1;
		}

	}
}
this.eatFood=function(){
	if(dist(this.x,this.y,food[0],food[1])<=2){
		generateFood();
		this.len++;
	}
}

this.draw= function (){
	fill(255);
	rect(this.x,this.y,10,10);
	for(var o=0;o<hist.length;o++){		
	rect(hist[o][0],hist[o][1],10,10);
	}

}

this.updateDir=function (x,y){
	this.dirx=x;
	this.diry=y;

}}}