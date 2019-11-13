class PhysicalObject  {


	constructor(img, minX, minY, width, height) {
		this.img = img;
		this.left = minX;
		this.top = minY;
		this.right = minX + width;
		this.bottom = minY + height;
		//console.log(this.img.src + ": 1(" + this.minX + " | " + this.minY + ")" + " 2(" + this.minY + " | " + this.minY + ")" + " 3(" + this.minY + " | " + this.maxX + ")" + " 4(" + this.maxX + " | " + this.maxX + ")");

	}

	updateObject(shiftChange) {
		this.left -= shiftChange;
		this.right -= shiftChange;

	}
	/*main_character = {
		height: 0,
		width: 0,
		y_position: 0,
		x_position: 0,
		speed: 0,
		jumpingpower: 0,
		jumping: false
	}'*/



	testCollision(object) {
		let objectLeft = object.x_position +20 ;

		let objectTop  = object.y_position;
		let objectRight = object.x_position + object.width -20 ;
		let objectBottom = object.y_position + object.height;
		//Pruefung der Hoehe
		var tolerance = 3;
		if (this.top <= objectBottom && this.bottom >= objectTop) {

            if (this.left <= objectRight && this.left > objectLeft && this.top >= objectTop && this.bottom <= objectBottom) { //rechts
				console.log("this.right");
                this.fromRightSide(object);
            } else if (this.right >= objectLeft && this.right < objectRight && this.top >= objectTop && this.bottom <= objectBottom) { //links
				console.log("this.left");
				this.fromLeftSide(object);
			}
            if (this.left <= objectRight && this.right >= objectLeft && this.top - objectBottom < 0 && this.top - objectBottom > - 30) { //oben
				console.log("this.top")
				this.fromAbove(object);
			};

            //(this.top > objectTop && this.top < objectBottom) || (this.bottom < objectBottom && this.bottom > objectTop) || (this.bottom < objectBottom && this.top > objectTop))

		}

	}

	fromAbove(object) {
		object.jumpingpower = 0;
		object.jumping = false;
		object.add_jumpingpower = 0;
		object.y_position = this.top - 4 * blockSizeX - 1
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
