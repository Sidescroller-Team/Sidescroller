

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
}


function loop() {
    draw();
   setTimeout(loop, 40);
}