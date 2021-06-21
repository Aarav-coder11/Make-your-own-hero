var canvas = new fabric.Canvas('myCanvas');
var Block_W = 30;
var Block_H = 30;
var playerX = 10;
var playerY = 10;
var player_Obj = "";
var block_obj = "";
function player_upd(){
    fabric.Image.fromURL("player.png", function(o_img){
        playerObj = o_img;
        playerObj.scaleToWidth(150);
        playerObj.scaleToHeight(120);
        playerObj.set ({top: playerY, left: playerX});
        canvas.add(player_Obj);
    })
}
player_upd();
function new_img(get_img){
    fabric.Image.fromURL(get_img, function(o_img){
        block_obj = o_img;
        block_obj.scaleToWidth(Block_W);
        block_obj.scaleToHeight(Block_H);
        block_obj.set({top: playerY, left: playerX});
        canvas.add(block_obj);
    })
}
window.addEventListener("keydown" ,my_keydown);
function my_keydown(e){
    console.log(my_keydown())
    keyPress = e.keyCode;
    if(keyPress == "67"){
        new_img("captain_america_left_hand.png")
    }
    if(keyPress == "72"){
        new_img("hulk_face.png")
    }
    if(keyPress == "78"){
        new_img("hulk_left_hand.png")
    }
    if(keyPress == "79"){
        new_img("hulk_right_hand.png")
    }
    if(keyPress == "80"){
        new_img("hulkd_body.png")
    }
    if(keyPress == "81"){
        new_img("hulk_legs.png")
    }
    if(keyPress == "73"){
        new_img("ironman_face.png")
    }
    if(keyPress == "74"){
        new_img("ironman_left_hand.png")
    }
    if(keyPress == "75"){
        new_img("ironman_right_hand.png")
    }
    if(keyPress == "76"){
        new_img("ironman_body.png")
    }
    if(keyPress == "77"){
        new_img("ironman_legs.png")
    }
    if(keyPress == "83"){
        new_img("spiderman_face.png")
    }
    if(keyPress == "82"){
        new_img("spiderman_left_hand.png")
    }
    if(keyPress == "81"){
        new_img("spiderman_right_hand.png")
    }
    if(keyPress == "80"){
        new_img("spiderman_body.png")
    }
    if(keyPress == "79"){
        new_img("spiderman_legs.png")
    }
    if(keyPress == "84"){
        new_img("thor_face.png")
    }
    if(keyPress == "85"){
        new_img("thor_left_hand.png")
    }
    if(keyPress == "86"){
        new_img("thor_right_hand.png")
    }
    if(e.shiftKey == true && keyPress == "38"){
        Block_H = Block_H + 5;
        document.getElementById("Height").innerHTML = Block_H;
    }
    if(e.shiftKey == true && keyPress == "40"){
        Block_H = Block_H - 5;
        document.getElementById("Height").innerHTML = Block_H;
    }
    if(e.shiftKey == true && keyPress == "37"){
        Block_W = Block_W - 5;
        document.getElementById("Width").innerHTML = Block_W;
    }
    if(e.shiftKey == true && keyPress == "39"){
        Block_W = Block_W + 5;
        document.getElementById("Width").innerHTML = Block_W;
    }
    if(keyPress == "38"){
        canvas.remove(playerObj);
        playerY = playerY - 10;
        player_upd();
    }
    if(keyPress == "40"){
        canvas.remove(playerObj);
        playerY = playerY + 10;
        player_upd();
    }
    if(keyPress == "37"){
        canvas.remove(playerObj);
        playerX = playerX - 10;
        player_upd();
    }
    if(keyPress == "39"){
        canvas.remove(playerObj);
        playerX = playerX + 10;
        player_upd();
    }
}   