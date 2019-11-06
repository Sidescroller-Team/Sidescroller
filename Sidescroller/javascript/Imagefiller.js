var ctx;

var grassBlock;
var earthBlock;
var lava;
var background;

//nur ein rahmen um die einzelnen quadrate
var quadrat;

function fillImages() {
    ctx = game_field.getContext('2d');

    //alle blockelemente sind png mit 20x20px
	// und sollen elemente im raster 50x50px werden
    grassBlock = new Image();
    background = new Image();
    lava = new Image();
	earthBlock = new Image();
	quadrat = new Image();

    earthBlock.src = '../images/erdblock.png';
    grassBlock.src = '../images/block.png';
    lava.src = '../images/lava.png';
	background.src = '../images/heavenlarge.png';
	quadrat.src = '../images/rahmen.png';
}