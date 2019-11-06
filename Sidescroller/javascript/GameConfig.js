
var game_field;
var countBlocksX;
var countBlocksY;
var blockSizeX;
var blockSizeY;


//muss wahrscheinlich auch noch dynamisch angepasst werden

function setConfigs() {
    game_field = document.getElementById("mainCan");

    countBlocksX = 32
	countBlocksY = 18;

	/*Bitte nicht hierüber machen sondern im html oder css,
	 * sonst wird die dort angegebene Größe nur verzerrt.
    game_field.width = 1000;
    game_field.height = 200;*/
    blockSizeX = 50;
    blockSizeY = 50;
}

