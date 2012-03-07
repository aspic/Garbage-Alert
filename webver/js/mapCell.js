function MapCell(xPos, yPos, w, h, t){
	this.width = w;
	this.height = h;
	this.type = t;
	this.x = xPos;
	this.y = yPos;
}

MapCell.prototype.draw = function() {
	switch(this.type){
	case(0):
		// WATER
		context.fillStyle = 'rgb(0,0,255)';
		context.fillRect(this.x, this.y, this.width, this.height);
		break;
	case(1):
		// GRASS
		context.fillStyle = 'rgb(0,255,0)';
		context.fillRect(this.x, this.y, this.width, this.height);

		var frame = spritesheetJSON.frames["tre.png"].frame;
		// console.log(frame);
		context.drawImage(
			spriteSheet,
			frame.x,
			frame.y,
			frame.w,
			frame.h,
			this.x,
			this.y,
			this.width,
			this.height
		);

		break;
	}
};