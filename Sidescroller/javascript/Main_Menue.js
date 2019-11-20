

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
    drawMovingObjects();
    ctx.drawImage(buttonSpielstart, 560, 200);
    ctx.drawImage(buttonLevelauswahl, 560, 300);
    ctx.drawImage(kisteHauptmenue, 70, 500);
    ctx.drawImage(palmenstamm, 1385, 275);
    ctx.drawImage(rumfass, 1429, 646, 166, 300);
    ctx.drawImage(piratMenue, 1068, 264);
}


function loop() {
    draw();
   setTimeout(loop, 40);
}