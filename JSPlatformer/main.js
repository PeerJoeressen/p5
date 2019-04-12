var context= document.querySelector('canvas').getContext('2d');
var player= new Player(100,100,-1);
var pointer={x:0,y:0};
var engine=new Engine(player);
var des = new Display(context,player,engine);
document.addEventListener("keydown", function(event){
    player.keyPressed(event);
});
document.addEventListener("keyup", function(event){
    player.keyReleased(event);
});

//d=100
//space=32
//a=97