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
		let objectMinX = object.x_position;
		let objectMinY = object.y_position;
		let objectMaxX = object.x_position + object.width;
		let objectMaxY = object.y_position + object.height;
		if (this.left <= objectMaxX //&&
			//this.right >= objectMinX &&
			//this.top >= objectMaxY && //
			//this.bottom <= objectMinY
		) {
			window.alert();
		}

	}

	fromAbove() {

	}

	fromSide() {

	}
}
