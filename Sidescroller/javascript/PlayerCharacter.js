

main_character = {
    height: 0,
    width: 0,
    y_position: 0,
    x_position: 0,
    speed: 0,
    jumpingpower: 0,
    jumping: false,
    add_jumpingpower: 0,
	alive: true,
	fallingLeft: false,
	fallingRight: false,
	normalGravity: 2.5,
	gravity: 2.5,
    killingBarrel: false
}

controller = {
    left: false,
    right: false,
    up: false,
	blockPermanentJump: false,
	forward: true
}

var frame_running = 0;
var frame_running_change = 0;
var functionKeyDown = keyDown;
var functionKeyUp = keyUp;

//setzt die Position des Spielers, da nicht im Object mit Variablen definiert werden darf
function setPlayerData() {
    main_character.height = 4 * blockSizeY;
    main_character.width = 2 * blockSizeX;
    main_character.y_position = countBlocksY * blockSizeY - 5 * blockSizeY;
    main_character.x_position = 5 * blockSizeX;
}

function keyDown(evt) {
	switch (evt.keyCode) {
		case 37:
	evt.preventDefault();
			controller.left = true;
			controller.forward = false;
			break;
		case 65:
	evt.preventDefault();
			controller.left = true;
			controller.forward = false;
			break;
		case 38:
	evt.preventDefault();
			controller.up = true;
			break;
		case 87:
	evt.preventDefault();
			controller.up = true;
			break;
		case 39:
	evt.preventDefault();
			controller.right = true;
			controller.forward = true;
			break;
		case 68:
	evt.preventDefault();
			controller.right = true;
			controller.forward = true;
			break;
	}
}
function keyUp(evt) {
	evt.preventDefault;
	switch (evt.keyCode) {
		case 37:
			controller.left = false;
			break;
		case 65:
			controller.left = false;
			break;
		case 38:
			controller.up = false;
			controller.blockPermanentJump = false;
			break;
		case 87:
			controller.up = false;
			controller.blockPermanentJump = false;
			break;
		case 39:
			controller.right = false;
			break;
		case 68:
			controller.right = false;
			break;
	}
}
//wenn eine Taste gedrückt wird, wird geprüft, welche
document.addEventListener('keydown', functionKeyDown);

//Drücken wird aufgehoben
document.addEventListener('keyup', functionKeyUp)

//Bewegung der Figur
function updatePlayer() {

	if (jumpingOnRightWall()) {
		main_character.add_jumpingpower = 22;
		main_character.speed -= 25;
		main_character.jumping = true;
		controller.blockPermanentJump = true;
		controller.forward = false;
		if (musik == "true") {
			document.getElementById('wall_jump_sound').volume = 0.3;
			document.getElementById('wall_jump_sound').play();
		}

	} if (jumpingOnLeftWall()) {
		main_character.add_jumpingpower = 22;
		main_character.speed += 25;
		controller.forward = true;
		if (musik == "true") {
			document.getElementById('wall_jump_sound').volume = 0.3;
			document.getElementById('wall_jump_sound').play();
		}
    }

    if (controller.up && main_character.jumping == false && !controller.blockPermanentJump) {
        main_character.add_jumpingpower += 22;
        main_character.jumping = true;
        controller.blockPermanentJump = true;
        if (musik == "true") {
            document.getElementById('jump_sound').volume = 0.3;
            document.getElementById('jump_sound').play();
        }
    }

    if (controller.left) {
        main_character.speed -= 1.2;
    }

    if (controller.right) {
        main_character.speed += 1.2;
    }
    if (main_character.add_jumpingpower > 0) {
        main_character.add_jumpingpower -= 3.5;
    }
    if (main_character.add_jumpingpower < 0) {
        main_character.add_jumpingpower = 0;
	}

	main_character.jumpingpower += main_character.add_jumpingpower;
	if ((main_character.fallingRight || main_character.fallingLeft) && main_character.jumpingpower <= 0) {
		main_character.gravity = 0.5;

	}
	main_character.jumpingpower -= main_character.gravity; //gravity
	main_character.x_position += main_character.speed;
	main_character.y_position -= main_character.jumpingpower;
if (main_character.jumpingpower == -2.5) {
		main_character.speed *= 0.9; //friction
	} else {
		main_character.speed *= 0.9; //friction
	}
		main_character.jumpingpower *= 0.92; //friction

	main_character.gravity = main_character.normalGravity;

    if (main_character.y_position > game_field.height) {
        main_character.alive = false;
    }

    if (main_character.x_position < 0 - blockSizeX /2) {
        main_character.speed = 0;
        main_character.x_position = blockSizeX;
        main_character.alive = false;
    }
    if (main_character.x_position > blockSizeX * 31) {
        main_character.speed = 0;
        main_character.x_position = blockSizeX * 31;
	}
	main_character.fallingLeft = false;
    main_character.fallingRight = false;
    main_character.killingBarrel = false;
};

function jumpingOnLeftWall() {
    return main_character.fallingLeft && controller.up && controller.left && main_character.jumping && !controller.blockPermanentJump;
}

function jumpingOnRightWall() {
    return main_character.fallingRight && controller.up && controller.right && main_character.jumping && !controller.blockPermanentJump;
}

function drawPlayer() {
    if (main_character.alive) {
		if (controller.right) {
			ctx.drawImage(main_character_image, Math.floor(frame_running % 5) * 250, 0, 250, 500, main_character.x_position, main_character.y_position, main_character.width, main_character.height);
		} else if (controller.left) {
			ctx.drawImage(main_character_image, Math.floor(frame_running % 5) * 250 + 1250, 0, 250, 500, main_character.x_position, main_character.y_position, main_character.width, main_character.height);
		} else if (controller.forward) {
			ctx.drawImage(main_character_image, 500, 0, 250, 500, main_character.x_position, main_character.y_position, main_character.width, main_character.height);
		}
		else {
			ctx.drawImage(main_character_image, 500 + 1250, 0, 250, 500, main_character.x_position, main_character.y_position, main_character.width, main_character.height);
		}

        if (frame_running > 4.79) {
            frame_running_change = -0.2;
        }
        if (frame_running < 0.21) {
            frame_running_change = 0.2;
        }
        frame_running += frame_running_change;

    } else {
        drawDefeatScreen()
    }
}


function playerNotAutoshifting() {
    main_character.x_position -= actualShiftChange;
	}
