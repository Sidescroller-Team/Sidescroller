
var game_field;
var countBlocksX;
var countBlocksY;
var blockSizeX;
var blockSizeY;

var minimalShiftChange;

var musik = false;
//muss wahrscheinlich auch noch dynamisch angepasst werden

function setConfigs() {
	game_field = document.getElementById("mainCan");
	countBlocksY = 18;
	countBlocksX = Math.floor(countBlocksY * 16 / 9);
	console.log(countBlocksX + " x " + countBlocksY + " blocks")

	blockSizeX = 1600 / countBlocksX;
	blockSizeY = 900 / countBlocksY;

	minimalShiftChange = blockSizeX / 20;
	//shiftChange = 0;

    musik = sessionStorage.getItem('music');
}

