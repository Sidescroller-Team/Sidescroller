var shiftCloudOne = 1.6;
var startXCloudOne = 400;
var startYCloudOne = 35;

var shiftCloudTwo = 2;
var startXCloudTwo = 100;
var startYCloudTwo = 100;

var shiftCloudThree = 1.4;
var startXCloudThree = 900;
var startYCloudThree = 50;

var shiftCloudFour = 1.3;
var startXCloudFour = 600;
var startYCloudFour = 100;

var xWaveOne = 100;
var xWaveTwo = 300;
var xWaveThree = 500;
var xWaveFour = 700;
var xWaveFive = 1200;
var xWaveSix = 850;
var xWaveSeven = 1400;

var xSchiff= 400

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
    xWaveOne = paintMovingObject(xWaveOne, 380, welle, 1.6);
    xWaveTwo = paintMovingObject(xWaveTwo, 400, welle,1.7);
    xWaveThree = paintMovingObject(xWaveThree, 430, welle, 1.4);
    xWaveFour = paintMovingObject(xWaveFour, 460, welle, 1.3);
    xSchiff = paintMovingObject(xSchiff, 310, schiff, 1);
    xWaveFive = paintMovingObject(xWaveFive, 490, welle, 1.5);
    xWaveSix = paintMovingObject(xWaveSix, 520, welle, 1.2);
    xWaveSeven = paintMovingObject(xWaveSeven, 550, welle, 1.1);
}