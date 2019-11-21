/// <reference path="gamecanvas_main.js" />
var levelAuswahlActive= false;

function init() {
    setConfigs();
    setConfigMenuMovingObjects();
    fillImages();
    console.log("images loaded");
    addListeners();
    musik = "false";
    loadMainMenue();
}

function addListeners() {
    game_field.addEventListener("click", function (event) {
        var game_field_size = game_field.getBoundingClientRect();
        var mouseX = event.clientX - game_field_size.left;
        var mouseY = event.clientY - game_field_size.top;

        if (levelAuswahlActive == false) {
            if (mouseX >= 11.2 * blockSizeX && mouseX <= 20.8 * blockSizeX && mouseY >= 6 * blockSizeY && mouseY <= 7.5 * blockSizeY) {
                levelAuswahlActive = true;
                if (musik == "true") {
                    document.getElementById('evil_laugh').volume = 0.3;
                    document.getElementById('evil_laugh').play();
                }
            }
            if (mouseX >= 11.2 * blockSizeX && mouseX <= 20.8 * blockSizeX && mouseY >= 4 * blockSizeY && mouseY <= 5.5 * blockSizeY) {
                window.location.href = "GameCanvas.html";
            }
        }
        if (levelAuswahlActive == true) {
            if (mouseX >= 25 * blockSizeX && mouseX <= 26 * blockSizeX && mouseY >= 3 * blockSizeY && mouseY <= 4 * blockSizeY) {
                levelAuswahlActive = false;
            }
        }


    }, false);
    

    document.addEventListener("click", function (event) {

        var canvas_size = document.getElementById("mainCan").getBoundingClientRect();
        var mouseX = event.clientX - canvas_size.left;
        var mouseY = event.clientY - canvas_size.top;

        if (mouseX >= blockSizeX * 12 && mouseX <= blockSizeX * 14 && mouseY >= blockSizeY * 15 && mouseY <= blockSizeY * 17) {
            if (musik == "true") {
                musik = "false";
                sessionStorage.setItem('music', musik);
                document.getElementById('pirate_music').pause();
            } else {
                musik = "true";
                sessionStorage.setItem('music', musik);
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
    ctx.drawImage(buttonSpielstart, 11.2 * blockSizeX, 4 * blockSizeY, 9.6 * blockSizeX, 1.5 * blockSizeY);
    ctx.drawImage(buttonLevelauswahl, 11.2 * blockSizeX, 6 * blockSizeY, 9.6 * blockSizeX, 1.5 * blockSizeY);
    ctx.drawImage(kisteHauptmenue, 1.4 * blockSizeX, 10 * blockSizeY, 9.8 * blockSizeX, 6.2 * blockSizeY);
    ctx.drawImage(palmenstamm, 25 * blockSizeX, 2 * blockSizeY);
    ctx.drawImage(rumfass, 28.6 * blockSizeX, 13 * blockSizeY, 3.4 * blockSizeX, 6 * blockSizeY);
    ctx.drawImage(piratMenue, 21.6 * blockSizeX, 5.2 * blockSizeY, 4.4 * blockSizeX, 10 * blockSizeY);
    if (levelAuswahlActive == true) {
        drawLevelauswahl();
    }   
    if (musik == "true") {
        ctx.drawImage(musik_an, blockSizeX * 12, blockSizeY * 15);
    }
    if (musik == "false") {
        ctx.drawImage(musik_aus, blockSizeX * 12, blockSizeY * 15);
    }
    
}

function drawLevelauswahl() {
    ctx.drawImage(grey_fog, 0, 0);
    ctx.drawImage(closeButton, 25 * blockSizeX, 3 * blockSizeY, 1 * blockSizeX, 1 * blockSizeY);
}

function loop() {
    draw();    
   setTimeout(loop, 40);
}