var shiftCloudOne = 2;
var startXCloudOne = 400;
var startYCloudOne = 35;
var startXCloudOneCopy;

var shiftCloudTwo = 4;
var startXCloudTwo = 100;
var startYCloudTwo = 100;
var startXCloudTwoCopy;

var shiftCloudThree = 3;
var startXCloudThree = 900;
var startYCloudThree = 50;
var startXCloudThreeCopy;

var shiftCloudFour = 4;
var startXCloudFour = 600;
var startYCloudFour = 100;
var startXCloudFourCopy;


function init() {
    setConfigs();
    fillImages();
    console.log("images loaded");
    
    loadMainMenue();
}

function loadMainMenue() {
            console.log("load");
             loop();
            
}

function draw() {
    ctx.clearRect(0, 0, 1000, 200);
    console.log("draw");
    ctx.drawImage(mainMenue, 0, 0);
    drawClouds();

    
   
}

function drawClouds() {
    startXCloudOne = paintMovingObject(startXCloudOne, startYCloudOne, wolkenformatZwei, startXCloudOneCopy, shiftCloudOne);
    startXCloudTwo = paintMovingObject(startXCloudTwo, startYCloudTwo, wolkenformatEins, startXCloudTwoCopy, shiftCloudTwo);
    startXCloudThree = paintMovingObject(startXCloudThree, startYCloudThree, wolkenformatDrei, startXCloudThreeCopy, shiftCloudThree);
    startXCloudFour = paintMovingObject(startXCloudFour, startYCloudFour, wolkenformatEins, startXCloudFourCopy, shiftCloudFour);

}





function loop() {
    draw();
   setTimeout(loop, 40);
}