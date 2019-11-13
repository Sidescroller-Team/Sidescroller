var shiftCloudOne = 1.5;
var startXCloudOne = 600;
var startYCloudOne = 35;
var startXCloudOneCopy;

var shiftCloudTwo = 1;
var startXCloudTwo = 100;
var startYCloudTwo = 100;
var startXCloudTwoCopy;

var shiftCloudThree = 2;
var startXCloudThree = 900;
var startYCloudThree = 50;
var startXCloudThreeCopy;

var shiftCloudFour = 3;
var startXCloudFour = 400;
var startYCloudFour = 100;
var startXCloudFourCopy;

function drawClouds() {
    startXCloudOne = paintMovingObject(startXCloudOne, startYCloudOne, wolkenformatZwei, startXCloudOneCopy, shiftCloudOne);
    startXCloudTwo = paintMovingObject(startXCloudTwo, startYCloudTwo, wolkenformatZwei, startXCloudTwoCopy, shiftCloudTwo);
    startXCloudThree = paintMovingObject(startXCloudThree, startYCloudThree, wolkenformatDrei, startXCloudThreeCopy, shiftCloudThree);
    startXCloudFour = paintMovingObject(startXCloudFour, startYCloudFour, wolkenformatEins, startXCloudFourCopy, shiftCloudFour);
}