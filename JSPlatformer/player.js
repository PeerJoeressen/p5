const Player = function(x,y,d){
    this.x=x;this.y=y;this.d=d;
    this.frameX=6;
    this.frameY=0;
    this.vx=0; this.vy=0;    

    this.keyPressed=function(e) {
        var key = e.keyCode;

		if (key == 32) {
            if(this.vy>5.5){
            this.vy-=20;}
		}

		if (key == 68) {
			this.vx=2;
		}

		if (key == 65) {
            this.vx=-2;
		}
	};

	this.keyReleased=function(e) {

		var key = e.keyCode;
        if (key == 32) {
           // this.vy=0;
		}

		if (key == 68) {
			this.vx=0;
		}

		if (key == 65) {
            this.vx=0;
		}
	};


};
Player.prototype={
    updatePosition: function(){
        this.x+=this.vx;
        this.y+=this.vy;
        this.vy*=0.85;

    }

};