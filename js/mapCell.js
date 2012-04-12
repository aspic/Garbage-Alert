function MapCell(xPos, yPos, w, h, t){
	this.width = w;
	this.height = h;
	this.x = xPos;
	this.y = yPos;
	if(t == "grass") {
		this.type = 1;
	} else if(t == "water") {
		this.type = 0;
	} else if(t == "wall") {
		this.type = 4;
	} else if(t=="weapon"){
		this.type = 3;
		var temp = new Weapon(this.x, this.y, this.width, this.height);
		this.tileType = temp;
		weapons.push(temp);

	} else if(t == "factory"){
		this.type = 2;
		this.tileType = new Factory(this.x, this.y, this.width, this.height); 
		factories.push(this.tileType);
	}
}

MapCell.prototype.click = function(){
	if(this.tileType.f != undefined){
		this.tileType.f();
	}
}

MapCell.prototype.draw = function() {
	if(this.type!=0){
		context.fillStyle = 'rgb(0,255,0)';
		context.fillRect(this.x, this.y, this.width, this.height);
	}

	switch(this.type){
	case(0):
		// WATER
		context.fillStyle = 'rgb(0,0,255)';
		context.fillRect(this.x, this.y, this.width, this.height);
		break;
	case(1):
		// var frame = spritesheetJSON.frames["tre.png"].frame;
		var frame = {x:0, y:0, w:40, h:40};
		// console.log(frame);
		context.drawImage(
			// spriteSheet,
			groundSpriteImage,
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
	case(2):
		this.tileType.draw();
		break;
	case(3):
		this.tileType.draw();
		break;
	case(4):
		context.fillStyle = 'rgb(0,0,0)';
		context.fillRect(this.x, this.y, this.width, this.height);
		break;
	}
};

