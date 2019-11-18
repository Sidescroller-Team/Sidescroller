﻿class EnemyObject extends PhysicalObject {
    constructor(img, minX, minY, width, height, speed) {
        super(img, minX, minY, width, height);
        this.speed = speed;
        this.alive = true;
        this.width = width;
        this.height = height;
    }

    draw() {
        ctx.drawImage(this.image, this.left, this.top, this.right - this.left, this.bottom - this.top);
    }

    updateObject(shiftChange) {
        this.left = this.left - shiftChange + this.speed;
        this.right = this.right - shiftChange + this.speed;
    }

    justShifting(shiftChange) {
        this.left = this.left - shiftChange;
        this.right = this.right - shiftChange;
    }

    fromBottom(object) {
        object.alive = false;
    }

    fromAbove(object) {
        object.alive = false;
    }

    fromLeftSide(object) {
        object.alive = false;
    }

    fromRightSide(object) {
        object.alive = false;
    }
}
