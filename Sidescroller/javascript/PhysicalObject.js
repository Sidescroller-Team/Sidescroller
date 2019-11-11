class PhysicalObject extends Image{


	constructor(img, minX, minY, width, height) {
		super();
		this.img = img;
		this.left = minX;
		this.top = minY;
		this.right = minX + width;
		this.bottom = minY + height;
		//console.log(this.img.src + ": 1(" + this.minX + " | " + this.minY + ")" + " 2(" + this.minY + " | " + this.minY + ")" + " 3(" + this.minY + " | " + this.maxX + ")" + " 4(" + this.maxX + " | " + this.maxX + ")");

	} 

	updateObject(shiftChange) {
		this.minX -= shiftChange;
		this.maxX -= shiftChange;

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
		var objectMinX = object.x_position;
		var objectMinY = object.y_position;
		var objectMaxX = object.x_position + object.width;
		var objectMaxY = object.y_position + object.height;
		if (this.minX <= objectMaxX &&
			this.maxX >= objectMinX ||
			this.minY >= objectMaxY && //
			this.maxY <= objectMinY
			) {
			window.alert();
		}
	
	}

	fromAbove() {

	}

	fromSide() {

	}

	bottomUp
	

	

}