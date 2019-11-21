

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
	normalGravity: 3,
	gravity: 3,

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

//setzt die Position des Spielers, da nicht im Object mit Variablen definiert werden darf
function setPlayerData() {
    main_character.height = 4 * blockSizeY;
    main_character.width = 2 * blockSizeX;
    main_character.y_position = countBlocksY * blockSizeY - 5 * blockSizeY;
    main_character.x_position = 5 * blockSizeX;
}

//wenn eine Taste gedrückt wird, wird geprüft, welche
document.addEventListener('keydown', function (evt) {

    switch (evt.keyCode) {
		case 37:
			controller.left = true;
			controller.forward = false;
			break;
		case 38:
			controller.up = true;
			break;
        case 39:
			controller.right = true;
			controller.forward = true;
            break;
    }
}, false);

//Drücken wird aufgehoben
document.addEventListener('keyup', function (evt) {
	
	switch (evt.keyCode) {

		case 37:
			evt.preventDefault();
            controller.left = false;
            break;
        case 38:
			evt.preventDefault();
            controller.up = false;
            controller.blockPermanentJump = false;
            break;
        case 39:
			evt.preventDefault();
            controller.right = false;
            break;
    }
}, false);

//Bewegung der Figur
function updatePlayer() {

	if (jumpingOnRightWall()) {
		main_character.jumpingpower = 25
		console.log(main_character.jumpingpower, main_character.add_jumpingpower);
		main_character.speed -= 34;
		main_character.jumping = true;
		controller.blockPermanentJump = true;
		controller.forward = false;

	} if (jumpingOnLeftWall()) {
        main_character.jumpingpower = 25;
		main_character.speed += 34;
		main_character.jumping = true;
		controller.blockPermanentJump = true;
		controller.forward = true;
	}
    if (controller.up && main_character.jumping == false && !controller.blockPermanentJump) {
        main_character.add_jumpingpower += 22;
        main_character.jumping = true;
        controller.blockPermanentJump = true;
        //document.getElementById('jump_sound').volume = 0.3;
        //document.getElementById('jump_sound').play();
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

	main_character.speed *= 0.9; //friction
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
	main_character.fallingRight = false
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

        if (frame_running > 4.84) {
            frame_running_change = -0.3;
        }
        if (frame_running < 0.01) {
            frame_running_change = 0.3;
        }
        frame_running += frame_running_change;

    } else {
        drawDefeatScreen()
    }
}


function playerNotAutoshifting() {
	//shiftChange = main_character.speed;
    main_character.x_position -= shiftChange;
	}
