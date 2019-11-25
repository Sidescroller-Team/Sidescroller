let mouseDown = 0;
let tool;
let canvas;
let factorX;
let factorY;
let rect;
let functionCreateAndUpdateObject;
let functionUpdateBlockPosition;
let functionIncrementMouseDown;
let functionDecrementMouseDown;
let functionShiftLeft, functionShiftRight, functionKeyHandler;
let editShift = 0;
let editShiftChange = 50;


function initializeEditingTools() {
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
	window.addEventListener("resize", function () {
		factorX = (canvas.width / canvas.offsetWidth);
		factorY = (canvas.height / canvas.offsetHeight);
	})
}
function keyHandler(evt) {
	switch (evt.keyCode) {
		case 37:
		case 65:
			evt.preventDefault();
			shiftLeft();
			break;
		case 39:
		case 68:
			evt.preventDefault();
			shiftRight();
			break;
	}
}

function shiftLeft() {
	editShift -= editShiftChange;
	updateEditShift(-editShiftChange);
}

function shiftRight() {
	editShift += editShiftChange;
	updateEditShift(editShiftChange);
}

function updateEditShift(shift) {
	for (let i = 0; i < physicalObjectArray.length; i++) {
		physicalObjectArray[i].updateObject(shift);
	}
	for (let i = 0; i < enemyObjectArray.length; i++) {
		enemyObjectArray[i].justShifting(shift);
	}
}

function createObject() {
	let obj = tool.blocks[tool.tool];
	obj.left = tool.mouseX;
	obj.top = tool.mouseY;
	switch (obj.constructor.name) {
		case "PhysicalObject":
			physicalObjectArray.push(new PhysicalObject(obj.img, obj.left, obj.top, blockSizeX, blockSizeY));
			break;
		case "Deleter":
			obj.searchAndDestroy();
			break;
		case "SpikesObject":
			physicalObjectArray.push(new SpikesObject(obj.img, obj.left, obj.top, blockSizeX, blockSizeY));
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

function edit() {
	tool = new Tool();
	if (editing) {
		tool = new Tool();
		canvas.style.cursor = "none";
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
		document.removeEventListener("keydown", keyHandler);
		document.addEventListener("keyup", functionKeyUp);
		document.addEventListener("keydown", functionKeyDown);
		canvas.removeEventListener("mousedown", functionIncrementMouseDown);
		canvas.removeEventListener("mouseup", functionDecrementMouseDown);
		canvas.removeEventListener("mousedown", functionCreateAndUpdateObject);
		canvas.removeEventListener("mousemove", functionUpdateBlockPosition);
		shift = 0;
		updateEditShift(-editShift);
		editShift = 0;
		setPlayerData();

	}
}