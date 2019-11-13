// Damit dies wirklich funnktioniert, muss StartX beim Aufruf durch eine Variable erfolgen. 
// Dieser Variablen muss auch jedes mal das Ergebnis dieser Funktion zugewiesen werden. Siehe Bsp. unten.
//  startXCloudTwo = paintMovingObject(startXCloudTwo, startYCloudTwo, wolkenformatZwei, startXCloudTwoCopy, shiftCloudTwo);
// Falls die Breite des Canvas noch geändert wird, muss dies hier angepasst werden (ctx.width funktioniert nicht !!!)
function paintMovingObject(startX, startY, objectImage, startXCopy, speed) {
    ctx.drawImage(objectImage, startX, startY);

    if ((startX + objectImage.width) >= 1600) {
        startXCopy = startX - 1600;
        ctx.drawImage(objectImage, startXCopy, startY);
        if (startX >= 1600) {
            startX = startXCopy;
        }
    }
    startX += speed;
    return startX;
}