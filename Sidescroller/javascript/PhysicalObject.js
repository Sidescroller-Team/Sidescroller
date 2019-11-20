class PhysicalObject  {

	constructor(img, minX, minY, width, height) {
		this.img = img;
		this.left = minX;
		this.top = minY;
		this.right = minX + width;
		this.bottom = minY + height;
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
		if (this.right >= objectLeft && this.right < objectRight && this.top >= objectTop - 10 && this.bottom <= objectBottom) { //links
			if (!controller.blockPermanentJump) {
				this.fallingLeft(object);
			} 
			this.fromLeftSide(object);
		}
		//right
		else if (this.left <= objectRight && this.left > objectLeft && this.top >= objectTop -10 && this.bottom <= objectBottom) { //rechts
				if (!controller.blockPermanentJump) {
					this.fallingRight(object);
				} 
				this.fromRightSide(object);
		}
		//top
		if (this.left <= objectRight -5 && this.right >= objectLeft +5 && this.top - objectBottom < 5 && this.top - objectBottom > -50 && object.jumpingpower <= 0) { //oben
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
		//object.gravity = object.fallingGravity;
	}

	fallingLeft(object) {
		object.fallingLeft = true;
		object.fallingRight = false;
	//	object.gravity = object.fallingGravity;
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
            if (this.left <= enemy.right && this.left > enemy.left && this.top >= enemy.top && this.bottom <= enemy.bottom) { //rechts
                this.fromRightSideEnemy(enemy);
            } else if (this.right >= enemy.left && this.right < enemy.right && this.top >= enemy.top && this.bottom <= enemy.bottom) { //links
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
        enemy.top = this.top - enemy.height - 1;
        enemy.bottom = this.top - 1;
    }

    fromLeftSideEnemy(enemy) {
        enemy.speed *= -1;
        enemy.left += enemy.speed;
        enemy.right += enemy.speed;
    }
    fromRightSideEnemy(enemy) {
        enemy.speed *= -1;
        enemy.left += enemy.speed;
        enemy.right += enemy.speed;
    }
}
