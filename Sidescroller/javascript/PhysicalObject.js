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
		let objectLeft = object.x_position +50 ;

		let objectTop  = object.y_position + 50;
		let objectRight = object.x_position + object.width -50 ;
		let objectBottom = object.y_position + object.height -1 ;
		//Pruefung der Hoehe
		var tolerance = 3;
		if (this.top <= objectBottom && this.bottom >= objectTop) {

			//beruehrung von rechts
			if (this.right >= objectLeft - tolerance && this.right <= objectLeft + tolerance && this.top > objectBottom) {
				console.log("this.right");
				this.fromRightSide(object);
			}
			//beruehrung von links
			if (this.left <= objectRight + tolerance && this.left >= objectRight - tolerance && this.top > objectBottom) {
				console.log("this.left");
				this.fromLeftSide(object);
			}
			//drauf
			if (this.left <= objectRight +3 && this.right >= objectLeft  -3 && this.top <= objectBottom) {
				console.log("this.top")
				this.fromAbove(object);
			};



		}

	}

	fromAbove(object) {
		object.jumpingpower = 0;
		object.jumping = false;
		object.add_jumpingpower = 0;
		object.y_position = this.top -4 * blockSizeX
	}

	fromLeftSide(object) {
		object.speed = 0;
		object.x_position -= 5;
		object.y_position = object.y_position;
	}
	fromRightSide(object) {
		object.speed = 0;
		object.x_position += 5;
		object.y_position = object.y_position;
	}
}
