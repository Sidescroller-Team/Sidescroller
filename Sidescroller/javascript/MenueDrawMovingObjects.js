var shiftCloudOne = 2;
var startXCloudOne = 400;
var startYCloudOne = 35;

var shiftCloudTwo = 4;
var startXCloudTwo = 100;
var startYCloudTwo = 100;

var shiftCloudThree = 3;
var startXCloudThree = 900;
var startYCloudThree = 50;

var shiftCloudFour = 4;
var startXCloudFour = 600;
var startYCloudFour = 100;

var xWaveOne = 100;
var xWaveTwo = 300;
var xWaveThree = 800;
var xWaveFour = 700;
var xWaveFive = 1200;
var xWaveSix = 950;
var xWaveSeven = 1350;

function drawMovingObjects() {
    drawClouds();
   // drawWaves();
}

function drawClouds() {
    startXCloudOne = paintMovingObject(startXCloudOne, startYCloudOne, wolkenformatZwei, shiftCloudOne);
    startXCloudTwo = paintMovingObject(startXCloudTwo, startYCloudTwo, wolkenformatEins, shiftCloudTwo);
    startXCloudThree = paintMovingObject(startXCloudThree, startYCloudThree, wolkenformatDrei, shiftCloudThree);
    startXCloudFour = paintMovingObject(startXCloudFour, startYCloudFour, wolkenformatEins, shiftCloudFour);

}

function drawWaves() {
    xWaveOne = paintMovingObject(xWaveOne, 820, welle, 2);
    xWaveTwo = paintMovingObject(xWaveTwo, 750, welle, 2.2);
    xWaveThree = paintMovingObject(xWaveThree, 800, welle, 2.3);
    xWaveFour = paintMovingObject(xWaveFour, 700, welle, 1.9);
    xWaveFive = paintMovingObject(xWaveFive, 675, welle, 1.7);
    xWaveSix = paintMovingObject(xWaveSix, 690, welle, 1.8);
    xWaveSeven = paintMovingObject(xWaveSeven, 777, welle, 2.1);
}