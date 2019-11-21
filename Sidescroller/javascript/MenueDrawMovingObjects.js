var speedFactor;

var shiftCloudOne;
var startXCloudOne;
var startYCloudOne;

var shiftCloudTwo;
var startXCloudTwo;
var startYCloudTwo;

var shiftCloudThree;
var startXCloudThree;
var startYCloudThree;

var shiftCloudFour;
var startXCloudFour;
var startYCloudFour;

var xWaveOne;
var xWaveTwo;
var xWaveThree;
var xWaveFour;
var xWaveFive;
var xWaveSix;
var xWaveSeven;

var xSchiff;


function setConfigMenuMovingObjects() {
    speedFactor = 0.01 * blockSizeX;

    shiftCloudOne = 2.4 * speedFactor;
    startXCloudOne = 8 * blockSizeX;
    startYCloudOne = 0.6 * blockSizeY;

    shiftCloudTwo = 2 * speedFactor;
    startXCloudTwo = 2 * blockSizeX;
    startYCloudTwo = 2 * blockSizeY;

    shiftCloudThree = 1.4 * speedFactor;
    startXCloudThree = 18 * blockSizeX;
    startYCloudThree = 1 * blockSizeY;

    shiftCloudFour = 2.6 * speedFactor;
    startXCloudFour = 12 * blockSizeX;
    startYCloudFour = 2 * blockSizeY;

    xWaveOne = 2 * blockSizeX;
    xWaveTwo = 3 * blockSizeX;
    xWaveThree = 10 * blockSizeX;
    xWaveFour = 14 * blockSizeX;
    xWaveFive = 24 * blockSizeX;
    xWaveSix = 17 * blockSizeX;
    xWaveSeven = 28 * blockSizeX;

    xSchiff = 8 * blockSizeX;
}


function drawMovingObjects() {
    drawClouds();
    drawWaves();
}

function drawClouds() {
    startXCloudOne = paintMovingObject(startXCloudOne, startYCloudOne, wolkenformatZwei, shiftCloudOne);
    startXCloudTwo = paintMovingObject(startXCloudTwo, startYCloudTwo, wolkenformatEins, shiftCloudTwo);
    startXCloudThree = paintMovingObject(startXCloudThree, startYCloudThree, wolkenformatDrei, shiftCloudThree);
    startXCloudFour = paintMovingObject(startXCloudFour, startYCloudFour, wolkenformatEins, shiftCloudFour);

}

function drawWaves() {
    xWaveOne = paintMovingObject(xWaveOne, 7.6 * blockSizeY, welle, 3.2 * speedFactor);
    xWaveTwo = paintMovingObject(xWaveTwo, 8* blockSizeY, welle, 3.4 * speedFactor);
    xWaveThree = paintMovingObject(xWaveThree, 8.6 * blockSizeY, welle, 2.8 * speedFactor);
    xWaveFour = paintMovingObject(xWaveFour, 9.2 * blockSizeY, welle, 2.6 * speedFactor);
    xSchiff = paintMovingObject(xSchiff, 6.2 * blockSizeY, schiff, 2 * speedFactor);
    xWaveFive = paintMovingObject(xWaveFive, 9.8 * blockSizeY, welle, 3 * speedFactor);
    xWaveSix = paintMovingObject(xWaveSix, 10.4 * blockSizeY, welle, 2.4 * speedFactor);
    xWaveSeven = paintMovingObject(xWaveSeven, 11 * blockSizeY, welle, 2.2 * speedFactor);
}