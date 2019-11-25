class Deleter extends PhysicalObject {

	constructor(img, minX, minY, width, height) {
		super(img, minX, minY, width, height);
	}


	searchAndDestroy() {
		
		for (let i = 0; i < physicalObjectArray.length; i++) {

			if (physicalObjectArray[i].left == this.left && physicalObjectArray[i].top == this.top) {
				physicalObjectArray.splice(i, 1);
			}
		}

		for (let i = 0; i < enemyObjectArray.length; i++) {
			if (enemyObjectArray[i].bottom == this.bottom && enemyObjectArray[i].left == this.left) {
				enemyObjectArray.splice(i, 1);
			}
		}
	}
}