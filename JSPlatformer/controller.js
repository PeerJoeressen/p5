const Controller = function(){
    this.left = new Controller.ButtonInupt();
    this.right = new Controller.ButtonInput();
    this.up = new Controller.ButtonInupt();

    this.keyDownUp = function(type, key_code){
        var down = (type == "keydown") ? true : false;
        
        switch(key_code){
            case 37: this.left.getInput(down); break;
            case 38: this.up.getInput(down); break;
            case 39: this.down.getInput(down);
            
        }

    };


};