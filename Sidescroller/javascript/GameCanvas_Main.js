var levelRawData;
var levelRowArray;

var backgroundSpeed = 30;
var backgroundPosition = 0;
var frame = 0;
var mouseDown = 0;
var minimalShift = 0;
var shift = 0;
var start = false;
var win = false;
var stop = false;
var editing = false;
var physicalObjectArray = [];
var enemyObjectArray = [];
var tool;
var actualShiftChange;
var stop = false;

var canvas;
var factorX;
var factorY;
var rect;
var functionCreateAndUpdateObject;
var functionUpdateBlockPosition;
var functionIncrementMouseDown;
var functionDecrementMouseDown;
var functionShiftLeft, functionShiftRight, functionKeyHandler;
var editShift = 0;
var editShiftChange = 50;

function init() {
    setConfigs();
    setConfigGameMovingObjects();
    fillImages();
	initializeEditingTools();
	addListener();
	loadLevel(level);
	if (level == 'level/bastelLevel.txt') {
	console.log("Bastellevel: " +level);
		editing = true;
		stop = true;
		edit();
	}
	setPlayerData();
}

function initializeEditingTools() {
	console.log("_initializeEditingTools")
	tool = new Tool();
	canvas = document.querySelector('canvas');
	factorX = (canvas.width / canvas.offsetWidth);
	factorY = (canvas.height / canvas.offsetHeight);
	rect = canvas.getBoundingClientRect();
	functionKeyHandler = keyHandler;
	functionShiftLeft = shiftLeft;
	functionShiftRight = shiftRight;
	functionCreateAndUpdateObject = createAndUpdateObject;
	functionUpdateBlockPosition = updateBlockPosition;
	functionDecrementMouseDown = decrementMouseDown;
	functionIncrementMouseDown = incrementMouseDown;
}
function keyHandler(evt) {
	console.log("keyHandler: " + evt.keyCode);
	switch (evt.keyCode) {
		case 37:
		case 65:
			shiftLeft();
			break;
		case 39:
		case 68:
			shiftRight();
			break;
	}
}

function shiftLeft() {
	editShift -= editShiftChange;
	console.log("editShift" + editShift);
	updateEditShift(-editShiftChange);
}

function shiftRight() {
	editShift += editShiftChange;
	console.log("editShift" + editShift)
	updateEditShift(editShiftChange);
}

function updateEditShift(shift) {

	console.log("Schiebe: " +shift)
	for (var i = 0; i < physicalObjectArray.length; i++) {
		physicalObjectArray[i].updateObject(shift);
	}
	for (var i = 0; i < enemyObjectArray.length; i++) {
			enemyObjectArray[i].justShifting(shift);
	}
	
}

function createObject() {
	console.log("_createObject")
	let obj = tool.blocks[tool.tool];
	obj.left = tool.mouseX;
	obj.top = tool.mouseY;
	switch (obj.constructor.name) {
		case "PhysicalObject":
			physicalObjectArray.push(new PhysicalObject(obj.img, obj.left, obj.top, blockSizeX, blockSizeY));
			console.log("created: physicalObjects");
			break;
		case "Deleter":
			console.log("Fuck")
			obj.searchAndDestroy();
			break;
		case "SpikesObject":
			physicalObjectArray.push(new SpikesObject(obj.img, obj.left, obj.top, blockSizeX, blockSizeY));
			console.log("created: SpikesObjects");
			break;
		case 'MilkBarrelObject':
			enemyObjectArray.push(new MilkBarrelObject(milch_fass_image, obj.left, obj.top - 2 * blockSizeY, blockSizeX * 2, blockSizeY * 3, -5, true));
			break;
		case "CrabObject":
			enemyObjectArray.push(new CrabObject(crab_image, obj.left, obj.top - blockSizeY, blockSizeX * 3, blockSizeY * 2, -5));
			break;
		case "GoalObject":
			physicalObjectArray.push(new GoalObject(obj.img, obj.left, 0, 10 * blockSizeX, blockSizeY * 17));
			break;
	}
}

function createAndUpdateObject() {
	let obj = tool.blocks[tool.tool];
	obj.left = tool.mouseX;
	obj.top = tool.mouseY;
	obj.right = obj.left + blockSizeX;
	obj.bottom = obj.top + blockSizeY;
	createObject();
}

function updateBlockPosition() {

	let oldX = tool.mouseX;
	let oldY = tool.mouseY;
	tool.mouseX = Math.round(event.clientX * factorX - rect.left * factorX - blockSizeX / 2);
	tool.mouseY = Math.round(event.clientY * factorY - rect.top - blockSizeY / 2);
	tool.mouseX = Math.floor((tool.mouseX + blockSizeX / 2) / blockSizeX) * blockSizeX - (shift % 50);
	tool.mouseY = Math.floor((tool.mouseY + blockSizeY / 2) / blockSizeY) * blockSizeY;

	if (mouseDown > 0 && (oldX != tool.mouseX || oldY != tool.mouseY)) {
		createObject();
	}
}

function incrementMouseDown() {
	++mouseDown;
}
function decrementMouseDown() {
	--mouseDown;
}
function addListener() {
	window.addEventListener('resize', function () {
		//@TODO
		//aktuell Welt und Größen statisch, erfolgt später
		//canvas.width = window.innerWidth;
		//canvas.height = window.innerHeight;

	})
	document.addEventListener('keydown', function (evt) {
		//console.log(evt.keyCode)

		if (evt.keyCode == 39 || evt.keyCode == 68) {
			start = true;
		}
		if (evt.keyCode == 80) {
			stop = !stop;
		}
		if (evt.keyCode == 67) {
			stop = !stop;
			editing = !editing;
			console.log(editing)
			edit();
		}
		if (musik == "true") {
			document.getElementById('pirate_music').volume = 0.05;
			document.getElementById('pirate_music').play();
		}
	}, false);



}
function edit() {
	tool = new Tool();
	if (editing) {
		tool = new Tool();
		canvas.style.cursor = "none";
		console.log("add Editing Listener")
		console.log(functionKeyHandler, canvas, "keydown");
		document.removeEventListener("keyup", functionKeyUp);
		document.removeEventListener("keydown", functionKeyDown);
		document.addEventListener("keydown", functionKeyHandler);
		canvas.addEventListener("mousedown", functionIncrementMouseDown);
		canvas.addEventListener("mouseup", functionDecrementMouseDown);
		canvas.addEventListener("mousemove", functionUpdateBlockPosition);
		canvas.addEventListener("mousedown", functionCreateAndUpdateObject);
		window.addEventListener("wheel", event => {
			tool.changeTool(event);
		}, false);
	} else {
		canvas.style.cursor = 'default';
		console.log("remove Editing Listener")
		document.removeEventListener("keydown", keyHandler);
		document.addEventListener("keyup", functionKeyUp);
		document.addEventListener("keydown", functionKeyDown);
		canvas.removeEventListener("mousedown", functionIncrementMouseDown);
		canvas.removeEventListener("mouseup", functionDecrementMouseDown);
		canvas.removeEventListener("mousedown", functionCreateAndUpdateObject);
		canvas.removeEventListener("mousemove", functionUpdateBlockPosition);
		console.log("Shift", shift, "editShift", editShift);
		shift = 0;
		updateEditShift(-editShift + 50);
		editShift = 0;
		setPlayerData();
		tool = undefinded;
	}
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
			let separator = "\n";
			if (levelRawData.includes("\r\n")) {
				separator = "\r\n";
			} else if (!levelRawData.includes("\n")) {
				separator = "\r";
			}
			levelRowArray = levelRawData.split(separator);
			countBlocksY = levelRowArray.length;
			console.log("levelRowArray:" + levelRowArray.length);
			console.log("level loaded");
			createWorldObjects();
			gameLoop();
		}
	}

	xmlhttp.open("GET", levelName, true);
    xmlhttp.send();
}

function update() {

	actualShiftChange = updateShift();

	//console.log(shift,main_character.x_position);
	playerNotAutoshifting();
    for (var i = 0; i < physicalObjectArray.length; i++) {
       /* if (counter++ == 0) {
            console.log("x " + main_character.x_position + " y " + main_character.width)
        }*/
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
	//console.log("updateShift");
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

    ctx.drawImage(background, backgroundPosition, 0);
	drawMovingObjects();

	for (var i = 0; i < physicalObjectArray.length; i++) {
		//console.log(i)
		ctx.drawImage(physicalObjectArray[i].img, physicalObjectArray[i].left, physicalObjectArray[i].top, physicalObjectArray[i].right - physicalObjectArray[i].left, physicalObjectArray[i].bottom - physicalObjectArray[i].top);
	
    }
    for (var i = 0; i < enemyObjectArray.length; i++) {
        enemyObjectArray[i].draw();
    }
    //damit der Pirat nicht gemalt wird wenn man gewonne hat
    if (win) {
        drawWinningScreen();
	} else {
		if (!editing) {
			drawPlayer();
		} else {
	tool.blocks[tool.tool].draw();

		}
	}
		}
/* @TODO
 * Die Welt wird akutell komplett gezeichnet, also über das Canvas hinaus
 * sichtbar ist alles was sich innerhalb von 0 <= x <= 1600 && 0 <= y <= 900 befindet 
 * die Variable shift wird bei jedem drücken der links-rechts tasten größer / kleiner um die Welt zu verschieben
 */
function createWorldObjects() {
	console.log("start creating world")
	console.log(levelRowArray.length);
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
				case 'b':
					physicalObjectArray.push(new PhysicalObject(earthBlock, x * blockSizeX, y * blockSizeY, blockSizeX, blockSizeY));
					break;
				case 'f':
					physicalObjectArray.push(new PhysicalObject(grassBlock, x * blockSizeX, y * blockSizeY, blockSizeX, blockSizeY));	
                    break;
                case 'l':
                    physicalObjectArray.push(new PhysicalObject(lava, x * blockSizeX, y * blockSizeY, blockSizeX, blockSizeY));
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
	console.log("end creating world");
	console.log(physicalObjectArray.length + " Objects created");
}

function gameLoop() {
	if (start && !stop) {
			update();
	}
	if (editing) {
		tool.updateTool();		
	}
	draw();

	//timeout muss man wahrscheinlich noch bearbeiten.....
    if (main_character.alive && !win) {
        setTimeout(gameLoop, 20);
    }
    
}