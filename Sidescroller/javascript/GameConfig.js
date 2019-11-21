
var game_field;
var countBlocksX;
var countBlocksY;
var blockSizeX;
var blockSizeY;

var shiftChange;

var musik = false;
//muss wahrscheinlich auch noch dynamisch angepasst werden

function setConfigs() {
	game_field = document.getElementById("mainCan");
	countBlocksY = 18;
	countBlocksX = Math.floor(countBlocksY * 32 / 18);
	console.log(countBlocksX + " x " + countBlocksY + " blocks")
	/*Bitte nicht hierüber machen sondern im html oder css,
	 * sonst wird die dort angegebene Größe nur verzerrt.
    game_field.width = 1000;
    game_field.height = 200;*/

	blockSizeX = 1600 / countBlocksX;
	blockSizeY = 900 / countBlocksY;

	shiftChange = blockSizeX / 20;
	//shiftChange = 0;

    musik = sessionStorage.getItem('music');
}

