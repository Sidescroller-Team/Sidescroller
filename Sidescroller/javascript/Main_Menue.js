/// <reference path="gamecanvas_main.js" />
var levelAuswahlActive= false;

function init() {
    setConfigs();
    setConfigMenuMovingObjects();
    fillImages();
    console.log("images loaded");
    addButtonListener("startMenu");
    addListeners();

    musik = "false";
    loadMainMenue();
}

function addListeners() {


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
    drawMovingObjects();
    ctx.drawImage(buttonSpielstart, 11.2 * blockSizeX, 4 * blockSizeY, 9.6 * blockSizeX, 1.5 * blockSizeY);
    ctx.drawImage(buttonLevelauswahl, 11.2 * blockSizeX, 6 * blockSizeY, 9.6 * blockSizeX, 1.5 * blockSizeY);
    ctx.drawImage(kisteHauptmenue, 1.4 * blockSizeX, 10 * blockSizeY, 9.8 * blockSizeX, 6.2 * blockSizeY);
    ctx.drawImage(palmenstamm, 25 * blockSizeX, 2 * blockSizeY);
    ctx.drawImage(rumfass, 28.6 * blockSizeX, 13 * blockSizeY, 3.4 * blockSizeX, 6 * blockSizeY);
    ctx.drawImage(piratMenue, 21.6 * blockSizeX, 5.2 * blockSizeY, 4.4 * blockSizeX, 10 * blockSizeY);
    if (musik == "true") {
        ctx.drawImage(musik_an, blockSizeX * 12, blockSizeY * 15);
    }
    if (musik == "false") {
        ctx.drawImage(musik_aus, blockSizeX * 12, blockSizeY * 15);
    }
    if (levelAuswahlActive == true) {
        drawLevelauswahl();
    }   
    
    
}

function drawLevelauswahl() {
    ctx.drawImage(grey_fog, 0, 0);
    ctx.drawImage(levelauswahl, 4 * blockSizeX, 2.5 * blockSizeY, 24 * blockSizeX,13 * blockSizeY);
    ctx.drawImage(closeButton, 27 * blockSizeX, 2.5 * blockSizeY, 1 * blockSizeX, 1 * blockSizeY);

    ctx.drawImage(closeButton, 11 * blockSizeX, 3 * blockSizeY, 3 * blockSizeX, 3 * blockSizeY);
    ctx.drawImage(closeButton, 17 * blockSizeX, 3 * blockSizeY, 3 * blockSizeX, 3 * blockSizeY);
    ctx.drawImage(closeButton, 23 * blockSizeX, 3 * blockSizeY, 3 * blockSizeX, 3 * blockSizeY);

    ctx.drawImage(closeButton, 11 * blockSizeX, 7.5 * blockSizeY, 3 * blockSizeX, 3 * blockSizeY);
    ctx.drawImage(closeButton, 17 * blockSizeX, 7.5 * blockSizeY, 3 * blockSizeX, 3 * blockSizeY);
    ctx.drawImage(closeButton, 23 * blockSizeX, 7.5 * blockSizeY, 3 * blockSizeX, 3 * blockSizeY);

    ctx.drawImage(closeButton, 11 * blockSizeX, 12 * blockSizeY, 3 * blockSizeX, 3 * blockSizeY);
    ctx.drawImage(closeButton, 17 * blockSizeX, 12 * blockSizeY, 3 * blockSizeX, 3 * blockSizeY);
    ctx.drawImage(closeButton, 23 * blockSizeX, 12 * blockSizeY, 3 * blockSizeX, 3 * blockSizeY);

}

function loop() {
    draw();    
   setTimeout(loop, 40);
}