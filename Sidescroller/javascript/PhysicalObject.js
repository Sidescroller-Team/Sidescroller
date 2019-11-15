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


	testCollision(object) {
		let objectLeft = object.x_position +20 ;
		let objectTop  = object.y_position;
		let objectRight = object.x_position + object.width -20 ;
		let objectBottom = object.y_position + object.height;

		if (this.right >= objectLeft && this.right < objectRight && this.top >= objectTop && this.bottom <= objectBottom) { //links
				//console.log("this.left");
			this.fromLeftSide(object);
			return;
			}
		if (this.left <= objectRight && this.right >= objectLeft && this.top - objectBottom < 4 && this.top - objectBottom > - 50) { //oben
			console.log("this.top")

			this.fromAbove(object);
			return;
		}
			else if (this.left <= objectRight && this.right >= objectLeft && this.bottom <= objectTop + object.jumpingpower + 5 && this.bottom - objectTop > - object.jumpingpower) {
				//console.log("this.bottom");
			this.fromBottom(object);
			return;
			}
            else if (this.left <= objectRight && this.left > objectLeft && this.top >= objectTop && this.bottom <= objectBottom) { //rechts
				//console.log("this.right");
			this.fromRightSide(object);
			return;
		}
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
		object.y_position = this.top - 4 * blockSizeX -1;
	
	}

	fromLeftSide(object) {
		object.speed = 0;
		object.x_position += 5;
	}
	fromRightSide(object) {
		object.speed = 0;
		object.x_position -= 5;
	}
}
