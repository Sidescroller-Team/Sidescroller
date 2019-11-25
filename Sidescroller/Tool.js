class Tool {
	constructor() {
		this.mouseX;
		this.mouseY;
		this.blocks = [];
		this.tool = 0;
		this.blocks.push(new PhysicalObject(sandBlock, 0, 0, blockSizeX, blockSizeY));
		this.blocks.push(new PhysicalObject(yellowBlock, 0, 0, blockSizeX, blockSizeY));
		this.blocks.push(new PhysicalObject(endSandBlock, 0, 0, blockSizeX, blockSizeY));
		this.blocks.push(new SpikesObject(spikes, 0, 0, blockSizeX, blockSizeY));
		this.blocks.push(new MilkBarrelObject(milch_fass_image, 0, 0, blockSizeX * 2, blockSizeY * 3, -5, true));
		this.blocks.push(new CrabObject(crab_image, 0, 0, blockSizeX * 3, blockSizeY * 2, -5));
		this.blocks.push(new GoalObject(goalImage, 0, 0, 2 * blockSizeX, -2 * blockSizeY));
		this.blocks.push(new Deleter(deletePicture, 0, 0, blockSizeX, blockSizeY));
	}

	updateTool() {
		this.blocks[this.tool].left = this.mouseX;
		this.blocks[this.tool].top = this.mouseY;
		this.blocks[this.tool].width = blockSizeX;
		this.blocks[this.tool].height = blockSizeY;
		this.blocks[this.tool].right = this.mouseX + this.blocks[this.tool].width;
		this.blocks[this.tool].bottom = this.mouseY + this.blocks[this.tool].height;
	}

	changeTool(evt) {
		if (evt.deltaY > 0) {
			this.tool++;
		} else {
			this.tool--;
			if (this.tool < 0) {
				this.tool = 7;	
			}
		}
		this.tool = this.tool % this.blocks.length;
	};
}