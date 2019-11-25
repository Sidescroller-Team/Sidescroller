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
var xWaveEight;

var xSchiff;


function setConfigGameMovingObjects(){
    speedFactor = 0.02 * blockSizeX;

    shiftCloudOne = 0.6 * speedFactor;
    startXCloudOne = 12 * blockSizeX;
    startYCloudOne = 0.7 * blockSizeY;

    shiftCloudTwo = 0.4 * speedFactor;
    startXCloudTwo = 2 * blockSizeX;
    startYCloudTwo = 2 * blockSizeY;

    shiftCloudThree = 0.8 * speedFactor;
    startXCloudThree = 18 * blockSizeX;
    startYCloudThree = 1 * blockSizeY;

    shiftCloudFour = 1 * speedFactor;
    startXCloudFour = 8 * blockSizeX;
    startYCloudFour = 2 * blockSizeY;


    xWaveOne = 2 * blockSizeX;
    xWaveTwo = 6 * blockSizeX;
    xWaveThree = 15 * blockSizeX;
    xWaveFour = 12 * blockSizeX;
    xWaveFive = 24 * blockSizeX;
    xWaveSix = 21 * blockSizeX;
    xWaveSeven = 27 * blockSizeX;
    xWaveEight = 3 * blockSizeX;
   
    xSchiff = 10 * blockSizeX;

}
function drawMovingObjects() {
    drawClouds();
    drawWaves();
}

function drawClouds() {
    startXCloudOne = paintMovingObject(startXCloudOne, startYCloudOne, wolkenformatZwei,  shiftCloudOne);
    startXCloudTwo = paintMovingObject(startXCloudTwo, startYCloudTwo, wolkenformatZwei,  shiftCloudTwo);
    startXCloudThree = paintMovingObject(startXCloudThree, startYCloudThree, wolkenformatDrei,  shiftCloudThree);
    startXCloudFour = paintMovingObject(startXCloudFour, startYCloudFour, wolkenformatEins,  shiftCloudFour);
}

function drawWaves() {
    xWaveOne = paintMovingObject(xWaveOne, 13.7 * blockSizeY, welle, 0.6 * speedFactor);
    xWaveTwo = paintMovingObject(xWaveTwo, 13.8 * blockSizeY, welle, 0.55 * speedFactor);
    xWaveThree = paintMovingObject(xWaveThree, 14 * blockSizeY, welle, 0.65 * speedFactor);
    xWaveFour = paintMovingObject(xWaveFour, 14.2 * blockSizeY, welle, 0.5 * speedFactor);
    xSchiff = paintMovingObject(xSchiff, 11 * blockSizeY, schiff, 0.35 * speedFactor);
    xWaveFive = paintMovingObject(xWaveFive, 15 * blockSizeY, welle, 0.7 * speedFactor);
    xWaveSix = paintMovingObject(xWaveSix, 15.6 * blockSizeY, welle, 0.6 * speedFactor);
    xWaveSeven = paintMovingObject(xWaveSeven, 16 * blockSizeY, welle, 0.65 * speedFactor);
    xWaveEight = paintMovingObject(xWaveEight, 16.4 * blockSizeY, welle, 0.62 * speedFactor);
}