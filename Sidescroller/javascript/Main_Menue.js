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
    document.addEventListener('keydown', function (evt) {
        switch (evt.keyCode) {
            case 13: //Enter-Taste zum starten des ersten levels
                sessionStorage.setItem('level', 'level/easyNiklasG.txt');
                window.location.href = "GameCanvas.html";
                break;
            case 83: //S-Taste zum Aufruf der Steuerung
                window.location.href = "Steuerung.html";
                break;
            case 68: //D-Taste zum Aufruf der Datenschutzerklärung
                window.location.href = "Datenschutz.html";
                break;
            case 73: // I-Taste zum Aufruf des Impressums
                window.location.href = "Impressum.html";
                break;
            case 77: //M-Taste zum Ein- und Ausschalten der Musik
                if (musik == "true") {
                    musik = "false";
                    sessionStorage.setItem('music', musik);
                    document.getElementById('pirate_music').pause();
                } else {
                    musik = "true";
                    sessionStorage.setItem('music', musik);
                    document.getElementById('pirate_music').volume = 0.25;
                    document.getElementById('pirate_music').play();
                }
                break;
            case 76://L-Taste zum Ein- und Ausschalten der Levelauswahl
                if (!levelAuswahlActive) {
                    levelAuswahlActive = true;
                } else {
                    levelAuswahlActive = false;
                }
                break;
            case 97:// 1-Taste (Nummernblock) zum Start Level 1 (Wenn levelauuswahl Aktiv)
            case 49: // 1-Taste (Zahlenleiste) zum Start Level 1 (Wenn levelauuswahl Aktiv)
                if (levelAuswahlActive) {
                    sessionStorage.setItem('level', 'level/easyNiklasG.txt');
                    window.location.href = "GameCanvas.html";
                }
                break;
            case 98:
            case 50: //2- Taste zum Start Level 2 usw...
                if (levelAuswahlActive) {
                    sessionStorage.setItem('level', 'level/easyNiklasK.txt');
                    window.location.href = "GameCanvas.html";
                }
                break;
            case 99:
            case 51:
                if (levelAuswahlActive) {
                    sessionStorage.setItem('level', 'level/easyTimo.txt');
                    window.location.href = "GameCanvas.html";
                }
                break;
            case 100:
            case 52:
                if (levelAuswahlActive) {
                    sessionStorage.setItem('level', 'level/mediumNiklasG.txt');
                    window.location.href = "GameCanvas.html";
                }
                break;
            case 101:
            case 53:
                sessionStorage.setItem('level', 'level/mediumNiklasK.txt');
                window.location.href = "GameCanvas.html";
                break;
            case 102:
            case 54:
                if (levelAuswahlActive) {
                    sessionStorage.setItem('level', 'level/mediumTimo.txt');
                    window.location.href = "GameCanvas.html";
                }
                break;
            case 103:
            case 55:
                if (levelAuswahlActive) {
                    sessionStorage.setItem('level', 'level/hardNiklasG.txt');
                    window.location.href = "GameCanvas.html";
                }
                break;
            case 104:
            case 56:
                if (levelAuswahlActive) {
                    sessionStorage.setItem('level', 'level/hardNiklasK.txt');
                    window.location.href = "GameCanvas.html";
                }
                break;
            case 105:
            case 57:
                if (levelAuswahlActive) {
                    sessionStorage.setItem('level', 'level/hardTimo.txt');
                    window.location.href = "GameCanvas.html";
                }
                break;
            case 96:
            case 48:// NULL-Taste zum Start des Bastellevels
                if (levelAuswahlActive) {
                    sessionStorage.setItem('level', 'level/bastelLevel.txt');
                    window.location.href = "GameCanvas.html";
                }
                break;

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
    ctx.drawImage(mainMenue, 0, 0);
    drawMovingObjects();
    ctx.drawImage(buttonSpielstart, 11.2 * blockSizeX, 4 * blockSizeY, 9.6 * blockSizeX, 1.5 * blockSizeY);
    ctx.drawImage(buttonLevelauswahl, 11.2 * blockSizeX, 6 * blockSizeY, 9.6 * blockSizeX, 1.5 * blockSizeY);
    ctx.drawImage(kisteHauptmenue, 1.4 * blockSizeX, 10 * blockSizeY, 9.8 * blockSizeX, 6.2 * blockSizeY);
    ctx.drawImage(palmenstamm, 25 * blockSizeX, 2 * blockSizeY);
    ctx.drawImage(rumfass, 28.6 * blockSizeX, 13 * blockSizeY, 3.4 * blockSizeX, 6 * blockSizeY);
    ctx.drawImage(piratMenue, 21.6 * blockSizeX, 5.2 * blockSizeY, 4.4 * blockSizeX, 10 * blockSizeY);
    ctx.drawImage(steuerungButton, 1.5 * blockSizeX, 17 * blockSizeY, 3 * blockSizeX, 0.5 * blockSizeY);
    ctx.drawImage(impressumButton, 5.5 * blockSizeX, 17 * blockSizeY, 3 * blockSizeX, 0.5 * blockSizeY);
    ctx.drawImage(datenschutzButton, 9.5 * blockSizeX, 17 * blockSizeY, 3.5 * blockSizeX, 0.5 * blockSizeY);
    ctx.drawImage(logo, 6.5 * blockSizeX, 0 * blockSizeY);
    if (musik == "true") {
        ctx.drawImage(musik_an, blockSizeX * 14, blockSizeY * 15.5);
    }
    if (musik == "false") {
        ctx.drawImage(musik_aus, blockSizeX * 14, blockSizeY * 15.5);
    }
    if (levelAuswahlActive == true) {
        drawLevelauswahl();
    }   
    
    
}

function drawLevelauswahl() {
    ctx.drawImage(grey_fog, 0, 0);
    ctx.drawImage(levelauswahl, 4 * blockSizeX, 2.5 * blockSizeY, 24 * blockSizeX,13 * blockSizeY);
    ctx.drawImage(closeButton, 27 * blockSizeX, 2.5 * blockSizeY, 1 * blockSizeX, 1 * blockSizeY);

    ctx.drawImage(level1Button, 11 * blockSizeX, 3 * blockSizeY, 3 * blockSizeX, 3 * blockSizeY);
    ctx.drawImage(level2Button, 17 * blockSizeX, 3 * blockSizeY, 3 * blockSizeX, 3 * blockSizeY);
    ctx.drawImage(level3Button, 23 * blockSizeX, 3 * blockSizeY, 3 * blockSizeX, 3 * blockSizeY);

    ctx.drawImage(level4Button, 11 * blockSizeX, 7.5 * blockSizeY, 3 * blockSizeX, 3 * blockSizeY);
    ctx.drawImage(level5Button, 17 * blockSizeX, 7.5 * blockSizeY, 3 * blockSizeX, 3 * blockSizeY);
    ctx.drawImage(level6Button, 23 * blockSizeX, 7.5 * blockSizeY, 3 * blockSizeX, 3 * blockSizeY);

    ctx.drawImage(level7Button, 11 * blockSizeX, 12 * blockSizeY, 3 * blockSizeX, 3 * blockSizeY);
    ctx.drawImage(level8Button, 17 * blockSizeX, 12 * blockSizeY, 3 * blockSizeX, 3 * blockSizeY);
    ctx.drawImage(level9Button, 23 * blockSizeX, 12 * blockSizeY, 3 * blockSizeX, 3 * blockSizeY);

}

function loop() {
    draw();    
   setTimeout(loop, 40);
}