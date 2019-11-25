var levelRawData;
var levelRowArray;

var mouseDown = 0;
var minimalShift = 0;
var shift = 0;
var start = false;
var win = false;
var stop = false;
var editing = false;
var physicalObjectArray = [];
var enemyObjectArray = [];

var actualShiftChange;
var stop = false;



function init() {
    setConfigs();
    setConfigGameMovingObjects();
    fillImages();
	initializeEditingTools();
	addListener();
	loadLevel(level);
	if (level == 'level/bastelLevel.txt') {
		editing = true;
		stop = true;
		edit();
	}
	setPlayerData();
}


function addListener() {
	document.addEventListener('keydown', function (evt) {
		if (evt.keyCode == 39 || evt.keyCode == 68) {
			start = true;
		}
		if (evt.keyCode == 80) {
			stop = !stop;
		}
		if (evt.keyCode == 67) {
			stop = !stop;
			editing = !editing;
			edit();
		}
		if (musik == "true") {
			document.getElementById('pirate_music').volume = 0.05;
			document.getElementById('pirate_music').play();
		}
	}, false);



}


function loadLevel(levelName) {
    
	var xmlhttp = new XMLHttpRequest(); // code for IE7+, Firefox, Chrome, Opera, Safari

	xmlhttp.onreadystatechange = function () {
	
		//nachdem das Level geladen ist, beginnt das Spiel (gameloop & draw)
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			levelRawData = xmlhttp.responseText;
			let separator = "\n";
			if (levelRawData.includes("\r\n")) {
				separator = "\r\n";
			} else if (!levelRawData.includes("\n")) {
				separator = "\r";
			}
			levelRowArray = levelRawData.split(separator);
			countBlocksY = levelRowArray.length;
			createWorldObjects();
			gameLoop();
		}
	}

	xmlhttp.open("GET", levelName, true);
    xmlhttp.send();
}

function update() {

	actualShiftChange = updateShift();

	playerNotAutoshifting();
    for (var i = 0; i < physicalObjectArray.length; i++) {
		physicalObjectArray[i].updateObject(actualShiftChange);
		if (physicalObjectArray[i].left >= -800 && physicalObjectArray[i].left <= 1650) {
			physicalObjectArray[i].testCollisionPlayer(main_character);
		}
			physicalObjectArray[i].testCollisionEnemy(enemyObjectArray);
    }
    for (var i = 0; i < enemyObjectArray.length; i++) {

		if (enemyObjectArray[i].alive && enemyObjectArray[i].left > -1600) {
            enemyObjectArray[i].updateObject(actualShiftChange);
            enemyObjectArray[i].testCollisionPlayer(main_character);
        } else {
            enemyObjectArray[i].justShifting(actualShiftChange);
        }
                
    }
    if (main_character.killingBarrel) {
        main_character.alive = true;
    }
    updatePlayer();
}

function updateShift() {
	let pos = main_character.x_position;
	let playerSpeed = main_character.speed;
	if (pos >= 250) {
		let possibleShiftChange = Math.round(1 / (750 - 250) * (pos - 250) * playerSpeed);
		if (minimalShift - pos < shift) {
			//falls der Spieler gegen Bloecke laueft
			if (playerSpeed == 1.08 || playerSpeed == -1.08) {
			return 0;
		}
			shift += possibleShiftChange;
			minimalShift += minimalShiftChange;
			return possibleShiftChange;
		}
	}
	shift += minimalShiftChange;
	minimalShift += minimalShiftChange;
	return minimalShiftChange;

}
function draw() {

    ctx.drawImage(background, 0, 0);
	drawMovingObjects();

	for (var i = 0; i < physicalObjectArray.length; i++) {
		ctx.drawImage(physicalObjectArray[i].img, physicalObjectArray[i].left, physicalObjectArray[i].top, physicalObjectArray[i].right - physicalObjectArray[i].left, physicalObjectArray[i].bottom - physicalObjectArray[i].top);
    }
    for (var i = 0; i < enemyObjectArray.length; i++) {
        enemyObjectArray[i].draw();
    }
    if (stop && !editing) {
        ctx.drawImage(pausePicture, 28 * blockSizeX, 0, 4 * blockSizeX, 1 * blockSizeY);
    }
    //damit der Pirat nicht gemalt wird wenn man gewonne hat
    if (win) {
        drawWinningScreen();
	} else {
		if (!editing) {
			drawPlayer();
		} else {
            tool.blocks[tool.tool].draw();
            ctx.drawImage(editPicture, 28 * blockSizeX, 0, 4 * blockSizeX, 1 * blockSizeY);

		}
    }
    ctx.drawImage(levelLayout, 11 * blockSizeX, 0 * blockSizeY, 3.5 * blockSizeX, 1 * blockSizeY);
    switch (level) {
        case "level/easyNiklasG.txt":
            ctx.drawImage(level1Button, 15 * blockSizeX, 0 * blockSizeY, 1 * blockSizeX, 1 * blockSizeY);
            break;
        case "level/easyNiklasK.txt":
            ctx.drawImage(level2Button, 15 * blockSizeX, 0 * blockSizeY, 1 * blockSizeX, 1 * blockSizeY);
            break;
        case "level/easyTimo.txt":
            ctx.drawImage(level3Button, 15 * blockSizeX, 0 * blockSizeY, 1 * blockSizeX, 1 * blockSizeY);
            break;
        case "level/mediumNiklasG.txt":
            ctx.drawImage(level4Button, 15 * blockSizeX, 0 * blockSizeY, 1 * blockSizeX, 1 * blockSizeY);
            break;
        case "level/mediumNiklasK.txt":
            ctx.drawImage(level5Button, 15 * blockSizeX, 0 * blockSizeY, 1 * blockSizeX, 1 * blockSizeY);
            break;
        case "level/mediumTimo.txt":
            ctx.drawImage(level6Button, 15 * blockSizeX, 0 * blockSizeY, 1 * blockSizeX, 1 * blockSizeY);
            break;
        case "level/hardNiklasG.txt":
            ctx.drawImage(level7Button, 15 * blockSizeX, 0 * blockSizeY, 1 * blockSizeX, 1 * blockSizeY);
            break;
        case "level/hardNiklasK.txt":
            ctx.drawImage(level8Button, 15 * blockSizeX, 0 * blockSizeY, 1 * blockSizeX, 1 * blockSizeY);
            break;
        case "level/hardTimo.txt":
            ctx.drawImage(level9Button, 15 * blockSizeX, 0 * blockSizeY, 1 * blockSizeX, 1 * blockSizeY);
            break;
        case "level/bastelLevel.txt":
            ctx.drawImage(editPicture, 15 * blockSizeX, 0 * blockSizeY, 3.5 * blockSizeX, 1 * blockSizeY);
            break;
      

    }
}

function createWorldObjects() {
	for (var y = 0; y < levelRowArray.length; y++) {
		for (var x = 0; x < levelRowArray[y].length; x++) {	
			switch (levelRowArray[y].charAt(x)) { 
				case '1':
					physicalObjectArray.push(new PhysicalObject(sandBlock, x * blockSizeX, y * blockSizeY, blockSizeX, blockSizeY));
					break;
				case 'y':
					physicalObjectArray.push(new PhysicalObject(yellowBlock, x * blockSizeX, y * blockSizeY, blockSizeX, blockSizeY));
					break;
				case 'e':
					physicalObjectArray.push(new PhysicalObject(endSandBlock, x * blockSizeX, y * blockSizeY, blockSizeX, blockSizeY));
					break;
                case 's':
                    physicalObjectArray.push(new SpikesObject(spikes, x * blockSizeX, y * blockSizeY, blockSizeX, blockSizeY));
                    break;
                case 'g':
                    enemyObjectArray.push(new MilkBarrelObject(milch_fass_image, x * blockSizeX, (y - 2) * blockSizeY, blockSizeX * 2, blockSizeY * 3, 0, false));
                    break;
                case 'r':
                    enemyObjectArray.push(new MilkBarrelObject(milch_fass_image, x * blockSizeX, (y - 2) * blockSizeY, blockSizeX * 2, blockSizeY * 3, -5, false));
                    break;
                case 'j':
                    enemyObjectArray.push(new MilkBarrelObject(milch_fass_image, x * blockSizeX, (y - 2) * blockSizeY, blockSizeX * 2, blockSizeY * 3, -5, true));
                    break;
                case 'c':
                    enemyObjectArray.push(new CrabObject(crab_image, x * blockSizeX, (y - 1) * blockSizeY, blockSizeX * 3, blockSizeY * 2, -5));
                    break;
                case 'z':
                    physicalObjectArray.push(new GoalObject(goalImage, x * blockSizeX, 0 * blockSizeY, 10 * blockSizeX, (y + 1) * blockSizeY));
                    break;
				default: 
					break;
			}
		}
	}   
}

function gameLoop() {
	if (start && !stop) {
		update();
	}
	if (editing) {
		tool.updateTool();		
	}
	draw();

    if (main_character.alive && !win) {
        setTimeout(gameLoop, 20);
    }
    
}