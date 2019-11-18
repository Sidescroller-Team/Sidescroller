class MilkBarrelObject extends EnemyObject {
    constructor(img, minX, minY, width, height, speed, canJump) {
        super(img, minX, minY, width, height, speed);
        this.canJump = canJump;
        this.jumpingpower = 0;
    }

    draw() {
        if (this.speed < 0 && this.alive && start) {
            ctx.drawImage(this.img, Math.floor(frame_running % 5) * 300, 75, 300, 525, this.left, this.top, this.width, this.height);
        } else if (this.speed > 0 && this.alive && start) {
            ctx.drawImage(this.img, Math.floor(frame_running % 5) * 300 + 1500, 75, 300, 525, this.left, this.top, this.width, this.height);
        } else if (this.alive) {
            ctx.drawImage(this.img, 2 * 300, 75, 300, 525, this.left, this.top, this.width, this.height);
        }
        if (!this.alive && this.speed <= 0) {
            ctx.drawImage(plattes_milch_fass, 0, 0, 300, 70, this.left, this.bottom - blockSizeY, this.width, 70);
        } else if (!this.alive) {
            ctx.drawImage(plattes_milch_fass, 300, 0, 300, 70, this.left, this.bottom - blockSizeY, this.width, 70);
        }

    }

    fromAbove(object) {
        this.alive = false;
        object.jumpingpower = 45;
    }
}
