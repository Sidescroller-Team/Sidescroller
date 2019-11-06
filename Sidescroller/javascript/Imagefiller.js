var ctx;

var grassBlock;
var earthBlock;
var lava;
var background;

function fillImages() {
    ctx = game_field.getContext('2d');

    //alle blockelemente sind png mit 20x20px
    grassBlock = new Image();
    background = new Image();
    lava = new Image();
    earthBlock = new Image();

    earthBlock.src = '../images/erdblock.png';
    grassBlock.src = '../images/block.png';
    lava.src = '../images/lava.png';
    background.src = '../images/heavenlarge.png';
}