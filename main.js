var canvas = new fabric.Canvas("my_canvas");

var player_x = 10
var player_y = 10;

var block_width = 30;
var block_height = 30;

var player_image, block_image;

function player_create(){
    fabric.Image.fromURL("player.png", function(image){
        player_image = image;
        player_image.scaleToWidth(150);
        player_image.scaleToHeight(140);
        player_image.set({
            top: player_y,
            left: player_x
        })
        canvas.add(player_image);
    });
}


function object_create(object_image){
    fabric.Image.fromURL(object_image, function(image){
        block_image = image;
        block_image.scaleToWidth(block_width);
        block_image.scaleToHeight(block_height);
        block_image.set({
            top: player_y,
            left: player_x
        })
        canvas.add(block_image);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keypressed = e.keyCode;

    if(e.shiftKey == true && keypressed == '80'){
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    if(e.shiftKey == true && keypressed == '77'){
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }

    if(keypressed == '67'){
        left();
    }
    if(keypressed == '38'){
        up();
    }
    if(keypressed == '39'){
        right();
    }
    if(keypressed == '40'){
        down();
        console.log("down");
    }

    if(keypressed == '37'){
        console.log("hello");
        object_create("wall.jpg");
        player_create();
    }
}

