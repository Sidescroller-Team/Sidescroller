class SpikesObject extends PhysicalObject {
    constructor(img, minX, minY, width, height) {
        super(img, minX, minY, width, height);
    }

    testCollisionPlayer(object) {
        let objectLeft = object.x_position + 20;
        let objectTop = object.y_position;
        let objectRight = object.x_position + object.width - 20;
        let objectBottom = object.y_position + object.height;

        if (this.right >= objectLeft && this.right < objectRight && this.top >= objectTop && this.bottom <= objectBottom) { //links
            this.fromLeftSide(object);
            return;
        }
        if (this.left + 12 <= objectRight && this.right-12 >= objectLeft && this.top - objectBottom < -8 && this.top - objectBottom > - 50 && object.jumpingpower <= 0) { //oben
            this.fromAbove(object);
            return;
        }
        else if (this.left <= objectRight && this.right >= objectLeft && this.bottom <= objectTop + object.jumpingpower + 5 && this.bottom - objectTop > - object.jumpingpower) {
            this.fromBottom(object);
            return;
        }
        else if (this.left <= objectRight && this.left > objectLeft && this.top >= objectTop && this.bottom <= objectBottom) { //rechts
            this.fromRightSide(object);
            return;
        }
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