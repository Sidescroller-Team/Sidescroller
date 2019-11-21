﻿

function init() {
    setConfigs();
    fillImages();
    console.log("images loaded");

    document.addEventListener("click", function (event) {

        var canvas_size = document.getElementById("mainCan").getBoundingClientRect();
        var mouseX = event.clientX - canvas_size.left;
        var mouseY = event.clientY - canvas_size.top;

        if (mouseX >= 1100 && mouseX <= 1200 && mouseY >= 700 && mouseY <= 800) {
            if (musik) {
                musik = false;
                document.getElementById('pirate_music').pause;
            } else {
                musik = true;
                document.getElementById('pirate_music').volume = 0.3;
                document.getElementById('pirate_music').play();
            }
        }
    }, false);

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
    if (musik) {
        ctx.drawImage(musik_an, 1100, 700);
    } 
    if (!musik) {
        ctx.drawImage(musik_aus, 1100, 700);
    }
}


function loop() {
    draw();
   setTimeout(loop, 40);
}