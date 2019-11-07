
main_character = {
    height: 0,
    width: 0,
    y_position: 0,
    x_position: 0,
    speed: 0,
    jumpingpower: 0,
    jumping: false
}

controller = {
    left: false,
    right: false,
    up: false,
}

var shift = 0;

function setPlayerData() {
    main_character.height = -2 * blockSizeY;
    main_character.width = -1 * blockSizeX;
    main_character.y_position = countBlocksY * blockSizeY - 1 * blockSizeY;
    main_character.x_position = 5 * blockSizeX;
}

document.addEventListener('keydown', function (evt) {
    console.log(evt.keyCode);
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

document.addEventListener('keyup', function (evt) {
    switch (evt.keyCode) {
        case 37:
            controller.left = false;
            break;
        case 38:
            controller.up = false;
            break;
        case 39:
            controller.right = false;
            break;
    }
}, false);

function player_loop() {
    if (controller.up && main_character.jumping == false) {
        main_character.jumpingpower += 50;
        main_character.jumping = true;
    }

    if (controller.left) {
        main_character.speed -= 0.8;
    }

    if (controller.right) {
        main_character.speed += 0.8
    }

    main_character.jumpingpower -= 1.2; //gravity
    main_character.x_position += main_character.speed;
    main_character.y_position -= main_character.jumpingpower;
    main_character.speed *= 0.9; //friction
    main_character.jumpingpower *= 0.9; //friction

    if (main_character.y_position > game_field.height - blockSizeY) {
        main_character.jumping = false;
        main_character.y_position = game_field.height - blockSizeY;
        main_character.jumpingpower = 0;
    }

    if (main_character.x_position < blockSizeX) {
        main_character.speed = 0;
        main_character.x_position = blockSizeX;
    }
    draw_player();
};

function draw_player() {
    ctx.fillStyle = "#ff0000";
    ctx.beginPath();
    ctx.rect(main_character.x_position, main_character.y_position, main_character.width, main_character.height);
    ctx.fill();
};

