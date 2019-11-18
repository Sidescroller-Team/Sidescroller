﻿
main_character = {
    height: 0,
    width: 0,
    y_position: 0,
    x_position: 0,
    speed: 0,
    jumpingpower: 0,
    jumping: false,
    add_jumpingpower: 0,
    alive: true
}

controller = {
    left: false,
    right: false,
    up: false,
    blockPermanentJump: false
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
   // console.log(evt.keyCode);
    switch (evt.keyCode) {
        case 37:
            controller.left = true;
            break;
        case 38:
            controller.up = true;
            break;
        case 39:
            controller.right = true;
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
    if (controller.up && main_character.jumping == false && !controller.blockPermanentJump) {
        main_character.add_jumpingpower += 25;
        main_character.jumping = true;
        controller.blockPermanentJump = true;
    }

    if (controller.left) {
        main_character.speed -= 1.6;
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

	main_character.jumpingpower -= 4; //gravity
	main_character.x_position += main_character.speed;
    main_character.y_position -= main_character.jumpingpower;
    main_character.speed *= 0.9; //friction
    main_character.jumpingpower *= 0.93; //friction

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
};

function drawPlayer() {
    if (main_character.alive) {
        if (controller.right) {
            ctx.drawImage(main_character_image, Math.floor(frame_running % 5) * 250, 0, 250, 500, main_character.x_position, main_character.y_position, main_character.width, main_character.height);
        } else if (controller.left) {
            ctx.drawImage(main_character_image, Math.floor(frame_running % 5) * 250 + 1250, 0, 250, 500, main_character.x_position, main_character.y_position, main_character.width, main_character.height);
        } else {
            ctx.drawImage(main_character_image, 500, 0, 250, 500, main_character.x_position, main_character.y_position, main_character.width, main_character.height);
        }

        if (frame_running > 4.84) {
            frame_running_change = -0.15;
        }
        if (frame_running < 0.01) {
            frame_running_change = 0.15;
        }
        frame_running += frame_running_change;

    } else {
        drawDefeatScreen()
    }
}


function playerNotAutoshifting() {
    main_character.x_position -= shiftChange;
}
