var shiftCloudOne = 0.6;
var startXCloudOne = 600;
var startYCloudOne = 35;

var shiftCloudTwo = 0.4;
var startXCloudTwo = 100;
var startYCloudTwo = 100;

var shiftCloudThree = 0.8;
var startXCloudThree = 900;
var startYCloudThree = 50;

var shiftCloudFour =1;
var startXCloudFour = 400;
var startYCloudFour = 100;


var xWaveOne = 100;
var xWaveTwo = 300;
var xWaveThree = 750;
var xWaveFour = 600;
var xWaveFive = 1200;
var xWaveSix = 1050;
var xWaveSeven = 1350;
var xWaveEight = 150;
//var xWaveNine = 50;
//var xWaveTen = 500;
//var xWaveEleven = 650;
//var xWaveTwelve = 900;
//var xWaveThirdteen = 400;
var xSchiff = 500;

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
    xWaveOne = paintMovingObject(xWaveOne, 675, welle, 0.6);
    xWaveTwo = paintMovingObject(xWaveTwo, 690, welle, 0.55);
    xWaveThree = paintMovingObject(xWaveThree, 700, welle, 0.65);
    xWaveFour = paintMovingObject(xWaveFour, 710, welle, 0.5);
    xSchiff = paintMovingObject(xSchiff, 550, schiff, 0.35);
    //ctx.drawImage(schiff, 500, 550);
    xWaveFive = paintMovingObject(xWaveFive, 750, welle, 0.7);
    xWaveSix = paintMovingObject(xWaveSix, 777, welle, 0.6);
    xWaveSeven = paintMovingObject(xWaveSeven, 800, welle, 0.65);
    xWaveEight = paintMovingObject(xWaveEight, 820, welle, 0.62);
   //xWaveNine = paintMovingObject(xWaveNine, 690, welle,  1.8);
   // xWaveTen = paintMovingObject(xWaveTen, 730, welle,  2);
   // xWaveEleven = paintMovingObject(xWaveEleven, 777, welle,  2.1);
   // xWaveTwelve = paintMovingObject(xWaveTwelve, 820, welle,  2);
   // xWaveThirdteen = paintMovingObject(xWaveThirdteen, 710, welle,  2.2);
}