'use strict';

var levelRawData;
var levelRowArray;

var backgroundSpeed = -1;
var backgroundPosition = -100;
var frame = 0;

var shift = 0;

function init() {
    setConfigs();
    fillImages();
	addListener();
    loadLevel('../level/levelOne.txt');
    setPlayerData();
}

function addListener() {
	window.addEventListener('resize', function () {
		//@TODO
		//aktuell Welt und Größen statisch, erfolgt später
        //canvas.width = window.innerWidth;
        //canvas.height = window.innerHeight;
		
	})
}


function loadLevel(levelName) {
	console.log("loadLevel")
	var xmlhttp = new XMLHttpRequest(); // code for IE7+, Firefox, Chrome, Opera, Safari

	xmlhttp.onreadystatechange = function () {
		console.log("state: " + xmlhttp.readyState + " status: " + xmlhttp.status);

		
		//nachdem das Level geladen ist, beginnt das Spiel (gameloop & draw)
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			levelRawData = xmlhttp.responseText;
			console.log(levelRawData);
			levelRowArray = levelRawData.split("\r\n");
			console.log("level loaded");
			draw();
			gameLoop();
		}
	}

	xmlhttp.open("GET", levelName, true);
	xmlhttp.send();
}



function update() {
	frame += 0.1;
}
/* @TODO
 * Die Welt wird akutell komplett gezeichnet, also über das Canvas hinaus
 * sichtbar ist alles was sich innerhalb von 0 <= x <= 1600 && 0 <= y <= 900 befindet 
 * die Variable shift wird bei jedem drücken der links-rechts tasten größer / kleiner um die Welt zu verschieben
 */
function draw() {
	ctx.clearRect(0, 0, 1000, 200);
	ctx.drawImage(background, backgroundPosition, 0);
	for (var y = 0; y < levelRowArray.length; y++) {
		for (var x = 0; x < levelRowArray[y].length; x++) {
			
			switch (levelRowArray[y].charAt(x)) { 
				case 'b':
					//ctx.fillStyle = "#000000";
					//ctx.fillRect(j * blockSizeX + verschiebungDerWelt, i * blockSizeY, blockSizeX, blockSizeY);
					ctx.drawImage(earthBlock, x * blockSizeX + shift, y * blockSizeY);
					break;
				case 'f':
                    ctx.drawImage(grassBlock, x * blockSizeX + shift, y * blockSizeY);
					break;
				case 'l':
                    ctx.drawImage(lava, x * blockSizeX + shift, y * blockSizeY);
				default: break;
			}
				
            ctx.drawImage(quadrat, x * blockSizeX + shift, y * blockSizeY);
			
		}
    }
    shift -= shiftChange;
    playerNotAutoshifting();
}

function gameLoop() {

    update();
    draw();
    player_loop();
	//timeout muss man wahrscheinlich noch bearbeiten.....
    setTimeout(gameLoop, 1);
}