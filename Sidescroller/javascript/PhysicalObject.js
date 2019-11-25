class PhysicalObject  {

	constructor(img, minX, minY, width, height) {
		this.img = img;
		this.left = minX;
		this.top = minY;
		this.right = minX + width;
		this.bottom = minY + height;
		this.width = width;
		this.height = height;
	}
	draw() {
		ctx.drawImage(this.img, this.left, this.top, this.width, this.height);
	}

	updateObject(shiftChange) {
		this.left -= shiftChange;
		this.right -= shiftChange;
	}

	testCollisionPlayer(object) {
		let objectLeft = object.x_position + 20 ;
		let objectTop  = object.y_position;
		let objectRight = object.x_position + object.width -20 ;
		let objectBottom = object.y_position + object.height;

		//left
		if (this.right >= objectLeft - object.speed && this.right < objectRight - object.speed && this.top >= objectTop - 10 && this.bottom <= objectBottom) { //links
			if (!controller.blockPermanentJump) {
				this.fallingLeft(object);
			} 
			this.fromLeftSide(object);
		}
		//right
		else if (this.left <= objectRight + object.speed && this.left > objectLeft - object.speed && this.top >= objectTop -10 && this.bottom <= objectBottom) { //rechts
				if (!controller.blockPermanentJump) {
					this.fallingRight(object);
				} 
				this.fromRightSide(object);
		}
		//top
		if (this.left <= objectRight - object.speed - 15 && this.right >= objectLeft + object.speed + 15 && this.top - objectBottom < 5 && this.top - objectBottom > -50 && object.jumpingpower <= 0) { //oben
            this.fromAbove(object);                                       
		}
		//bottom
		else if (this.left <= objectRight - 5 && this.right >= objectLeft + 5 && this.bottom <= objectTop + object.jumpingpower + 5 && this.bottom - objectTop > -object.jumpingpower) {
				this.fromBottom(object);
		}


	}


	fallingRight(object) {
		object.fallingLeft = false;
		object.fallingRight = true;
	}

	fallingLeft(object) {
		object.fallingLeft = true;
		object.fallingRight = false;
	}

	fromBottom(object) {
		object.add_jumpingpower = 0;
		object.y_position = object.y_position + 10;
		object.jumpingpower = 0;
	}
	fromAbove(object) {
		object.jumpingpower = 0;
		object.jumping = false;
		object.add_jumpingpower = 0;
		object.y_position = this.top - 4 * blockSizeX;
	
	}
	fromLeftSide(object) {
		object.speed = 0;
		object.x_position += 1.2;
	}
	fromRightSide(object) {
		object.speed = 0;
		object.x_position -= 1.2;
    }



    testCollisionEnemy(enemyObjectArray) {
        for (var i = 0; i < enemyObjectArray.length; i++) {
            let enemy = enemyObjectArray[i];
            if (this.left <= enemy.right && this.right >= enemy.left && this.top - enemy.bottom < 10 && this.top - enemy.bottom > -20) { //oben
                this.fromAboveEnemy(enemy);
            };
            if (this.left <= enemy.left && this.right >= enemy.left && this.bottom <= enemy.top + enemy.jumpingpower + 5 && this.bottom - enemy.top > - enemy.jumpingpower) {
                this.fromBottomEnemy(enemy);
            }
            if (this.left <= enemy.right - 10 && this.left > enemy.left + 10 && ((this.top + 15 <= enemy.bottom && this.bottom >= enemy.bottom) || (this.bottom <= enemy.bottom && this.top >= enemy.bottom) || (this.bottom <= enemy.bottom && this.top >= enemy.top))) { //rechts
                this.fromRightSideEnemy(enemy);
            } else if (this.right >= enemy.left - 10 && this.right < enemy.right + 10 && ((this.top + 15 <= enemy.bottom && this.bottom >= enemy.bottom) || (this.bottom <= enemy.bottom && this.top >= enemy.bottom) || (this.bottom <= enemy.bottom && this.top >= enemy.top))) { //links
                this.fromLeftSideEnemy(enemy);
            }          
        }
    }

    fromBottomEnemy(enemy) {
        enemy.top += 10;
        enemy.bottom += 10;
        enemy.jumpingpower = 0;
    }

    fromAboveEnemy(enemy) {
        enemy.jumpingpower = 0;
        enemy.jumping = false;
        enemy.top = this.top - enemy.height;
        enemy.bottom = this.top;
    }

    fromLeftSideEnemy(enemy) {
        enemy.speed *= -1;
        enemy.left += enemy.speed * 2;
        enemy.right += enemy.speed * 2;
    }
    fromRightSideEnemy(enemy) {
        enemy.speed *= -1;
        enemy.left += enemy.speed * 2;
        enemy.right += enemy.speed * 2;
    }
}
