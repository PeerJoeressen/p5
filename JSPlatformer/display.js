const Display = function(context,player,engine){
        console.log('Yes');
        var width =document.documentElement.clientWidth;
        var height=document.documentElement.clientHeight;
        var tileSize=16;var rows=16;var columns=16;
        var tile_sheet=new Image();
        var buffer = document.createElement("canvas").getContext('2d');
        var map =[0,1,2,2,2,2,0,1,2,0,1,2,0,1,2,2,
                  2,2,0,1,2,2,2,2,0,1,2,0,1,2,0,1,
                  2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
                  2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
                  2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
                  2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
                  2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
                  2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
                  2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
                  2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
                  2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
                  2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
                  2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
                  2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
                  2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
                  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

        var mapY =[  10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,
                   10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,
                   10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,
                   10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,
                   10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,
                   10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,
                   10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,
                   10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,
                   10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,
                   10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,
                   10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,
                   10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,
                   10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,
                   10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,
                   10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,
                    15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15];

        function loop () {
            window.requestAnimationFrame(loop); 
            height=document.documentElement.clientHeight;
            width=document.documentElement.clientWidth;
            context.fillStyle = '#808080';
            context.fillRect(0, 0, context.canvas.width, context.canvas.height);
            var min_size=height<width?height:width;
            context.canvas.height=min_size;
            context.canvas.width=min_size;      
            for(let index = map.length;index>-1;--index) {
                let valueX=map[index];
                let valueY=mapY[index];
                let tile_x = (index%columns)*tileSize;
                let tile_y = Math.floor(index/columns)*tileSize;
                buffer.drawImage(tile_sheet, valueX * tileSize,valueY*tileSize,tileSize,tileSize,tile_x,tile_y,tileSize,tileSize);

            }
            engine.loop();
            buffer.drawImage(tile_sheet,player.frameX*tileSize,player.frameY*tileSize,tileSize,tileSize,player.x,player.y,tileSize,tileSize);
            context.drawImage(buffer.canvas,0,0,buffer.canvas.width, buffer.canvas.height,0,0, context.canvas.width,context.canvas.height);
        };
        buffer.canvas.height=tileSize*rows;
        buffer.canvas.width=tileSize*columns;
        buffer.imageSmoothingEnabled=false;

        tile_sheet.addEventListener("load", (event) => {loop();});
        tile_sheet.src='resources\\Basic_Platformer_SpriteSheet.png';

    }

