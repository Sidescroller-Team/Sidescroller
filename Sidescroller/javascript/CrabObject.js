class CrabObject extends EnemyObject {
    constructor(img, minX, minY, width, height, speed) {
        super(img, minX, minY, width, height, speed);
    }

    testCollisionPlayer(object) {
        let objectLeft = object.x_position + 30;
        let objectTop = object.y_position;
        let objectRight = object.x_position + object.width - 40;
        let objectBottom = object.y_position + object.height;

        if (this.right >= objectLeft && this.right < objectRight && ((this.top <= objectBottom && this.bottom >= objectBottom) || (this.bottom <= objectBottom && this.top >= objectBottom) || (this.bottom <= objectBottom && this.top >= objectTop))) { //links
            this.fromLeftSide(object);
            return;
        }
        if (this.left + 12 <= objectRight && this.right - 12 >= objectLeft && this.top - objectBottom < -8 && this.top - objectBottom > - 50 && object.jumpingpower <= 0) { //oben
            this.fromAbove(object);
            return;
        }
        else if (this.left <= objectRight && this.right >= objectLeft && this.bottom <= objectTop + object.jumpingpower + 5 && this.bottom - objectTop > - object.jumpingpower) {
            this.fromBottom(object);
            return;
        }
        else if (this.left <= objectRight && this.left > objectLeft && ((this.top <= objectBottom && this.bottom >= objectBottom) || (this.bottom <= objectBottom && this.top >= objectBottom) || (this.bottom <= objectBottom && this.top >= objectTop))) { //rechts
            this.fromRightSide(object);
            return;
        }
    }

    draw() {
        if (this.speed !== 0 && this.alive && start) {
            ctx.drawImage(this.img, Math.floor(frame_running % 2) * 300, 0, 300, 200, this.left, this.top, this.width, this.height);
        } else if (this.alive) {
            ctx.drawImage(this.img, 300, 0, 300, 200, this.left, this.top, this.width, this.height);
        }
    }

    
}