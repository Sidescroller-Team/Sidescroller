var canvas;
var ctx;

var countBlocksX; 
var countBlocksY;

var blockSizeX;
var blockSizeY;

function init() {
   
    setVariables();
    addListener();

    draw();
    console.log("initfinished");

}

function addListener() {
    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    })
}

function setVariables() {
    canvas = document.getElementById("mainCan");
    ctx = canvas.getContext('2d');
    countBlocksX = 32;
    countBlocksY = 24;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    blockSizeX = ctx.innerWidth / countBlocksX;
    blockSizeY = ctx.innerHeight / countBlocksY;

}



function update() {

}

function draw() {

    for (var i = 0; i < countBlocksY; i++) {
        ctx.fillStyle = "#000000";
        ctx.fillRect(blockSizeX * i, 200, 25, 25);
        console.log(i);
    }

  
}

function gameLoop() {

//    update();
    draw();

    setTimeout(gameLoop, 20);
}