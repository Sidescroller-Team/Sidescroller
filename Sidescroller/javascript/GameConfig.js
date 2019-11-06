
var game_field;
var countBlocksX;
var countBlocksY;
var blockSizeX;
var blockSizeY;


//muss wahrscheinlich auch noch dynamisch angepasst werden

function setConfigs() {
    game_field = document.getElementById("mainCan");

    countBlocksX = 50
    countBlocksY = 10;
    game_field.width = 1000;
    game_field.height = 200;
    blockSizeX = 20;
    blockSizeY = 20;
}

