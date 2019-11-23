class Tool {
	constructor() {
		console.log("Create Tool")
		this.mouseX;
		this.mouseY;
		this.blocks = [];
		this.tool = 0;
		this.blocks.push(new PhysicalObject(sandBlock, 0, 0, blockSizeX, blockSizeY));
		this.blocks.push(new PhysicalObject(yellowBlock, 0, 0, blockSizeX, blockSizeY));
		this.blocks.push(new PhysicalObject(endSandBlock, 0, 0, blockSizeX, blockSizeY));
		this.blocks.push(new SpikesObject(spikes, 0, 0, blockSizeX, blockSizeY));
		//this.blocks.push(new MilkBarrelObject(milch_fass_image, 0, 0, 0, blockSizeX * 2, blockSizeY * 3, false));
		//this.blocks.push(new MilkBarrelObject(milch_fass_image, 0, 0, blockSizeX * 2, blockSizeY * 3, -5, false));
		this.blocks.push(new MilkBarrelObject(milch_fass_image, 0, 0, blockSizeX * 2, blockSizeY * 3, -5, true));
		this.blocks.push(new CrabObject(crab_image, 0, 0, blockSizeX * 3, blockSizeY * 2, -5));
		this.blocks.push(new GoalObject(goalImage, 0, 0, 2 * blockSizeX, -2 * blockSizeY));
	}



	changeTool(evt) {
		if (evt.deltaY > 0) {
			this.tool++;

		} else {
			this.tool--;
			console.log(this.tool);
			if (this.tool < 0) {
				this.tool = 9
				console.log(this.blocks.length, this.tool)
			}
		}
		this.tool = this.tool % this.blocks.length;
	};


	


/*	sandBlock.src = 'images/Bildelemente/Sand1.png';
	endSandBlock.src = 'images/Bildelemente/SandEndeLinks.png';
	yellowBlock.src = 'images/Bildelemente/SandMitte.png';
	grassBlock.src = 'images/block.png';
	spikes.src = 'images/spikes.png';
	background.src = 'images/hintergrund_Spiel_PNG.png';
	goalImage.src = 'images/Ziel.png';*/
}