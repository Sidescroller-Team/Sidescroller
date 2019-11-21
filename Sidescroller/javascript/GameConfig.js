
var game_field;
var countBlocksX;
var countBlocksY;
var blockSizeX;
var blockSizeY;

var minimalShiftChange;

var musik;
//muss wahrscheinlich auch noch dynamisch angepasst werden

function setConfigs() {
	game_field = document.getElementById("mainCan");
	countBlocksY = 18;
	countBlocksX = Math.floor(countBlocksY * 16 / 9);
	console.log(countBlocksX + " x " + countBlocksY + " blocks")

	blockSizeX = 1600 / countBlocksX;
	blockSizeY = 900 / countBlocksY;

	minimalShiftChange = blockSizeX / 20;
	//shiftChange = 0;
    musik = sessionStorage.getItem('music');
}

function addButtonListener(maske) {
    const canvas = document.querySelector('canvas');
    //Eventlistener schaut, ob einer der Buttons gedrückt wurde
    canvas.addEventListener("mousedown", function (event) {

        let factorX = (canvas.width / canvas.offsetWidth);
        let factorY = (canvas.height / canvas.offsetHeight);

        const rect = canvas.getBoundingClientRect();
        const mouseX = Math.round(event.clientX * factorX - rect.left * factorX);
        const mouseY = Math.round(event.clientY * factorY - rect.top);
        switch (maske) {
            case  "defeat":
                if (mouseX >= 9.5 * blockSizeX && mouseX <= 12.5 * blockSizeX && mouseY >= 7.5 * blockSizeY && mouseY <= 10.5 * blockSizeY) {
                    location.reload();
                }
                if (mouseX >= 18.5 * blockSizeX && mouseX <= 26 * blockSizeX && mouseY >= 7.5 * blockSizeY && mouseY <= 10.5 * blockSizeY) {
                    window.location.href = "index.html";
                }
                break;
            case "startMenu":
                if (levelAuswahlActive == false) {
                    if (mouseX >= 11.2 * blockSizeX && mouseX <= 20.8 * blockSizeX && mouseY >= 6 * blockSizeY && mouseY <= 7.5 * blockSizeY) {
                        levelAuswahlActive = true;
                    }
                    if (mouseX >= 11.2 * blockSizeX && mouseX <= 20.8 * blockSizeX && mouseY >= 4 * blockSizeY && mouseY <= 5.5 * blockSizeY) {
                        document.getElementById('pirate_music').pause();
                        window.location.href = "GameCanvas.html";
                    }
                }
                if (levelAuswahlActive == true) {
                    if (mouseX >= 25 * blockSizeX && mouseX <= 26 * blockSizeX && mouseY >= 3 * blockSizeY && mouseY <= 4 * blockSizeY) {
                        levelAuswahlActive = false;
                    }
                }
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
                break;
            case "winning":
                if (mouseX >= 9.3 * blockSizeX && mouseX <= 11.3 * blockSizeX && mouseY >= 7 * blockSizeY && mouseY <= 9 * blockSizeY) {
                    location.reload();
                }
                if (mouseX >= 9.3 * blockSizeX && mouseX <= 11.3 * blockSizeX && mouseY >= 9.5 * blockSizeY && mouseY <= 11.5 * blockSizeY) {
                    window.location.href = "index.html"
                }
                if (mouseX >= 20.2 * blockSizeX && mouseX <= 22.8 * blockSizeX && mouseY >= 7.7 * blockSizeY && mouseY <= 10.3 * blockSizeY) {
                    location.reload();
                }
                break;


    }
    }, false);
}


