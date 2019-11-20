class GoalObject extends PhysicalObject {
    constructor(img, minX, minY, width, height) {
        super(img, minX, minY, width, height);
    }

    testCollisionPlayer(object) {
        let objectLeft = object.x_position + 20;
        let objectTop = object.y_position;
        let objectRight = object.x_position + object.width - 20;
        let objectBottom = object.y_position + object.height;

        if (this.right >= objectLeft && this.right < objectRight) { //links  
            this.fromLeftSide();
        }
        else if (this.left <= objectRight && this.left > objectLeft) { //rechts
            this.fromRightSide();
        }
    }

    fromLeftSide() {
        win = true;
    }
    fromRightSide() {
        win = true;
    }
}