
main_character = {
    height: 2 * blockSizeY,
    width: 1 * blockSizeX,
    y_position: 1 * blockSizeY,
    x_position: 10 * blockSizeX,
    x_pace: 0,
    y_pace: 0,

}

var shift = 0;

document.addEventListener('keydown', function (evt) {
    console.log(evt.keyCode);
    switch (evt.keyCode) {

        case 37:
            console.log("Pfeiltaste nach links");
            shift += speed;
            backgroundPosition -= backgroundSpeed;
            return false;
            break;
        case 39:
            console.log("Pfeiltaste nach rechts");
            shift -= speed;
            backgroundPosition += backgroundSpeed;
            return false;
            break;
    }
})