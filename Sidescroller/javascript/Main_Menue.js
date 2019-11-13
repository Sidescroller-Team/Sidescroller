var shiftCloudOne = 4;
var startXCloudOne = 100;
var startYCloudOne = 100;
var startXCloudOneCopy;

var shiftCloudTwo = 2;
var startXCloudTwo = 400;
var startYCloudTwo = 35;
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
    //Variable ist nötig, da sonst die automatische Erstellung neuer Objekte nicht möglich ist, 
    //da nicht erkannt wird, dass sich die alten außerhalb der Range befinden
    startXCloudTwo = paintMovingObject(startXCloudTwo, startYCloudTwo, wolkenformatZwei, startXCloudTwoCopy, shiftCloudTwo);
    startXCloudOne = paintMovingObject(startXCloudOne, startYCloudOne, wolkenformatEins, startXCloudOneCopy, shiftCloudOne);
    startXCloudThree = paintMovingObject(startXCloudThree, startYCloudThree, wolkenformatDrei, startXCloudThreeCopy, shiftCloudThree);
    startXCloudFour = paintMovingObject(startXCloudFour, startYCloudFour, wolkenformatEins, startXCloudFourCopy, shiftCloudFour);

}





function loop() {
    draw();
   setTimeout(loop, 40);
}