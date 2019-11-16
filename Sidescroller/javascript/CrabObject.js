class CrabObject extends EnemyObject {
    constructor(img, minX, minY, width, height, speed) {
        super(img, minX, minY, width, height, speed);
    }

    draw() {
        if (this.speed !== 0 && this.alive && start) {
            ctx.drawImage(this.img, Math.floor(frame_running % 2) * 300, 0, 300, 200, this.left, this.top, this.width, this.height);
        } else if (this.alive) {
            ctx.drawImage(this.img, 300, 0, 300, 200, this.left, this.top, this.width, this.height);
        }
    }
}