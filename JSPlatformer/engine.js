const Engine = function(player){

    this.loop=function(){
        player.vy+=1;
        player.updatePosition();
        if(player.y+16>16*15) player.y=16*14;
    };

};