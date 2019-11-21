function drawDefeatScreen() {

    ctx.drawImage(grey_fog, 0, 0);
    ctx.drawImage(death_pirate_image, main_character.x_position - blockSizeX * 3, main_character.y_position + blockSizeY * 2 + blockSizeY / 2, main_character.width * 2, main_character.height / 2);

    //zeichnet die Elemente
    ctx.drawImage(defeatScreen, 8 * blockSizeX, 4 * blockSizeY, 16 * blockSizeX, 9 * blockSizeY);
    ctx.drawImage(reloadImage, 9.5 * blockSizeX, 7.5 * blockSizeY, 3 * blockSizeX, 3 * blockSizeY);
    ctx.drawImage(homeImage, 18.5 * blockSizeX, 7.5 * blockSizeY, 3 * blockSizeX, 3 * blockSizeY);

    //Eventlistener schaut, ob einer der Buttons gedrückt wurde
    game_field.addEventListener("click", function (event) {
        var game_field_size = game_field.getBoundingClientRect();
        var mouseX = event.clientX - game_field_size.left;
        var mouseY = event.clientY - game_field_size.top;

        if (mouseX >= 9.5 * blockSizeX && mouseX <= 12.5 * blockSizeX && mouseY >= 7.5 * blockSizeY && mouseY <= 10.5 * blockSizeY) {
            location.reload();
        }
        if (mouseX >= 18.5 * blockSizeX && mouseX <= 26 * blockSizeX && mouseY >= 7.5 * blockSizeY && mouseY <= 10.5 * blockSizeY) {
            window.location.href = "index.html";
        }

    }, false);

    document.addEventListener('keydown', function (evt) {
        console.log(evt.keyCode);
        switch (evt.keyCode) {
            case 13:
                window.location.href = "index.html";
                break;
            case 32:
                location.reload();
                break;
        }
    }, false);
    if (musik == "true") {
        document.getElementById('death_sound').volume = 0.3;
        document.getElementById('death_sound').play();
    }
}

function drawWinningScreen() {
    ctx.drawImage(winScreen, 8 * blockSizeX, 4 * blockSizeY, 16 * blockSizeX, 9 * blockSizeY);
    ctx.drawImage(reloadImageWin, 9.3 * blockSizeX, 7 * blockSizeY, 2 * blockSizeX, 2 * blockSizeY);
    ctx.drawImage(homeImageWin, 9.3 * blockSizeX, 9.5 * blockSizeY, 2 * blockSizeX, 2 * blockSizeY);
    ctx.drawImage(nextLevelImage, 20.2 * blockSizeX, 7.7 * blockSizeY, 2.6 * blockSizeX, 2.6 * blockSizeY);

    game_field.addEventListener("click", function (event) {
        var game_field_size = game_field.getBoundingClientRect();
        var mouseX = event.clientX - game_field_size.left;
        var mouseY = event.clientY - game_field_size.top;

        if (mouseX >= 9.3 * blockSizeX && mouseX <= 11.3 * blockSizeX && mouseY >= 7 * blockSizeY && mouseY <= 9 * blockSizeY) {
            location.reload();
        }
        if (mouseX >= 9.3 * blockSizeX && mouseX <= 11.3 * blockSizeX && mouseY >= 9.5 * blockSizeY && mouseY <= 11.5 * blockSizeY) {
            window.location.href = "index.html"
        }
        if (mouseX >= 20.2 * blockSizeX && mouseX <= 22.8 * blockSizeX && mouseY >= 7.7 * blockSizeY && mouseY <= 10.3 * blockSizeY) {
            location.reload();
        }
    }, false);

    document.addEventListener('keydown', function (evt) {
        console.log(evt.keyCode);
        switch (evt.keyCode) {
            case 13:
                window.location.href = "index.html";
                break;
            case 32:
                location.reload();
                break;
            case 78: //muss noch geändert werden nach Levelauswahl
                location.reload();
        }
    }, false);
    if (musik == "true") {
        document.getElementById('win_sound').volume = 0.3;
        document.getElementById('win_sound').play();
    }
}