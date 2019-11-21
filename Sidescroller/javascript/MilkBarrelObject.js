class MilkBarrelObject extends EnemyObject {
    constructor(img, minX, minY, width, height, speed, canJump) {
        super(img, minX, minY, width, height, speed);
        this.canJump = canJump;
        this.add_jumpingpower = 0;
        this.jumping = false;
        this.randomJump = 0;
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

    testCollisionPlayer(object) {
        let objectLeft = object.x_position;
        let objectTop = object.y_position;
        let objectRight = object.x_position + object.width;
        let objectBottom = object.y_position + object.height;
        if (this.left + 15 <= objectRight && this.right - 15 >= objectLeft && this.top - objectBottom < 0 && this.top - objectBottom > - 50 && object.jumpingpower <= 0) { //oben
            this.fromAbove(object);
            return;
        }
        else if (this.left <= objectRight && this.right >= objectLeft && this.bottom <= objectTop + object.jumpingpower + 5 && this.bottom - objectTop > - object.jumpingpower) {
            this.fromBottom(object);
            return;
        }
        if (this.right >= objectLeft + 38 && this.right < objectRight && ((this.top + 15 <= objectBottom && this.bottom >= objectBottom) || (this.bottom <= objectBottom && this.top >= objectBottom) || (this.bottom <= objectBottom && this.top >= objectTop))) { //rechts
            this.fromRightSide(object);
            return;
        }
        
        if (this.left <= objectRight - 30 && this.left > objectLeft && ((this.top + 15 <= objectBottom && this.bottom >= objectBottom) || (this.bottom <= objectBottom && this.top >= objectBottom) || (this.bottom <= objectBottom && this.top >= objectTop))) { //links
            this.fromLeftSide(object);
            return;
        }
    }

    updateObject(shiftChange) {

        this.randomJump = (Math.random() * 30);
        if (this.canJump && this.randomJump <= 1) {
            if (!this.jumping) {
                this.add_jumpingpower += 15;
                this.jumping = true;
            }   
        }
        if (this.add_jumpingpower > 0) {
            this.add_jumpingpower -= 2.5;
        }
        if (this.add_jumpingpower < 0) {
            this.add_jumpingpower = 0;
        }
        this.jumpingpower += this.add_jumpingpower;
        this.jumpingpower -= this.gravity;
        this.top -= this.jumpingpower;
        this.bottom -= this.jumpingpower;
        this.jumpingpower *= 0.92;

        this.left = this.left - shiftChange + this.speed;
        this.right = this.right - shiftChange + this.speed;
    }

    fromAbove(object) {
        this.alive = false;
        object.jumpingpower = 45;
        if (musik == "true") {
            document.getElementById('kill_sound').volume = 0.3;
            document.getElementById('kill_sound').play();
        }
    }
}
