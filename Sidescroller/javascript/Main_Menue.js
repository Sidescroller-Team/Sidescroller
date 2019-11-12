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
  
    startXCloudTwo = paintCloud(startXCloudTwo, startYCloudTwo, wolkenformatZwei, startXCloudTwoCopy, shiftCloudTwo);
    startXCloudOne = paintCloud(startXCloudOne, startYCloudOne, wolkenformatEins, startXCloudOneCopy, shiftCloudOne);
    startXCloudThree = paintCloud(startXCloudThree, startYCloudThree, wolkenformatDrei, startXCloudThreeCopy, shiftCloudThree);
    startXCloudFour = paintCloud(startXCloudFour, startYCloudFour, wolkenformatEins, startXCloudFourCopy, shiftCloudFour);

}

function paintCloud(startX ,startY,  cloudType, startXCopy, speed) {
    ctx.drawImage(cloudType, startX, startY);
    
    if ((startX + cloudType.width) >= 1600) {
        startXCopy = startX - 1600;
        ctx.drawImage(cloudType, startXCopy, startY);
        console.log("Wolke Copy wird gemacht");
        if (startX >= 1600) {
            startX = startXCopy;
        }
    }
    startX += speed;
    return startX;
}



function loop() {
    draw();
   setTimeout(loop, 40);
}