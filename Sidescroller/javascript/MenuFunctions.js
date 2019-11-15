function drawDefeatScreen() {

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
            window.location.href = "../index.html"
        }

    }, false);
}