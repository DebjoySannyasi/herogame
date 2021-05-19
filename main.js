var canvas=new fabric.Canvas("mycanvas");

player_x = 10;
player_y = 10;

block_img_width = 30;
block_img_height = 30;

var player_object = "";
var block_img_object = "";


function player_update(){
    fabric.Image.fromURL("Final_output.png",function(Img){
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_img_object = Img;

        block_img_object.scaleToWidth(block_img_width);
        block_img_object.scaleToHeight(block_img_height);
        block_img_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_img_object);
    });
}

window.addEventListener("keydown",my_keydown);


function my_keydown(e){
    keyPressed=e.keyCode;

    if(e.shiftKey == true && keyPressed == "80"){
        console.log("p & shift");
        block_img_width = block_img_width + 10 ;
        block_img_height = block_img_height + 10 ;
        document.getElementById("current_width").innerHTML=block_img_width ;
        document.getElementById("current_height").innerHTML=block_img_height ;
    }

    if(e.shiftKey && keyPressed == "77"){
        console.log("m & shift");
        block_img_width = block_img_width - 10 ;
        block_img_height = block_img_height - 10 ;
        document.getElementById("current_width").innerHTML=block_img_width ;
        document.getElementById("current_height").innerHTML=block_img_height ;
    }



    if (keyPressed =="38"){
        up();
    }
    if (keyPressed =="40"){
        down();
    }
    if (keyPressed =="37"){
        left();
    }
    if (keyPressed =="39"){
        right();
    }
    if (keyPressed =="76"){
        new_image("left hand.png");
        console.log("l");
    }
    if (keyPressed =="70"){
        new_image("ironman_face.png");
        console.log("f");
    }
    if (keyPressed =="82"){
        new_image("right hand.png");
        console.log("r");
    }
    if (keyPressed =="80"){
        new_image("hulk_legs.png");
        console.log("p");
    }
    if (keyPressed =="66"){
        new_image("spiderman_body.png");
        console.log("b");
    }
    if (keyPressed =="90"){
        new_image("white.png");
        console.log("z");
    }
    


    //Move Key
      

    
    function up(){
        if(player_y >=0){
            player_y =player_y-block_img_height;
            canvas.remove(player_object);
            player_update();
        }
    }
    
    function down(){
        if(player_y <=500){
            player_y =player_y+block_img_height;
            canvas.remove(player_object);
            player_update();
        }
    }
    
    function left(){
        if(player_x >0){
            player_x =player_x-block_img_width;
            canvas.remove(player_object);
            player_update();
        }
    }
    
    function right(){
        if(player_x <=850){
            player_x =player_x+block_img_width;
            canvas.remove(player_object);
            player_update();
        }
    }
}