class EnemyObject extends PhysicalObject {
    constructor(img, minX, minY, width, height, speed, canJump) {
        super(img, minX, minY, width, height);
        this.speed = speed;
        this.canJump = canJump;
        this.alive = true;
        this.width = width;
        this.height = height;
        this.jumpingpower = 0;
    }

    drawEnemy() {
        if (this.speed < 0 && this.alive && start) {
            ctx.drawImage(this.img, Math.floor(frame_running % 5) * 300, 75, 300, 525, this.left, this.top, this.width, this.height);
        } else if (this.speed > 0 && this.alive && start) {
            ctx.drawImage(this.img, Math.floor(frame_running % 5) * 300 + 1500, 75, 300, 525, this.left, this.top, this.width, this.height);
        } else if (this.alive) {
            ctx.drawImage(this.img, 2 * 300, 75, 300, 525, this.left, this.top, this.width, this.height);
        }
    }

    updateObject(shiftChange) {
        this.left = this.left - shiftChange + this.speed;
        this.right = this.right - shiftChange + this.speed;
    }

    fromBottom(object) {
        object.alive = false;
    }

    fromAbove(object) {
        this.alive = false;
        object.jumpingpower = 40;
    }

    fromLeftSide(object) {
        object.alive = false;
    }

    fromRightSide(object) {
        object.alive = false;
    }
}
