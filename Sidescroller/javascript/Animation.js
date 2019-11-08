class Animation{
	
	Animation( img,  timing,  parts) {
		this.img = img;
		this.timing = timing;
		this.parts = parts;
	};

 draw() {
	 ctx.drawImage(img, Math.floor(frame % parts) * img.width / parts, 0, img.width / 7, img.height,
		 x * blockSizeX, y * blockSizeY, blockSizeX, blockSizeY);
}
}