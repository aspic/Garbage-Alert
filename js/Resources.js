var resources = new Resources(0, 500-26, 500, 26);

function Resources(x,y,w,h){
	this.active = true;
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;

	this.resourceIcons = [
		new ResourceIcon('cardboard', this.x, this.y+5, 16, 16),
		new ResourceIcon('wood', this.x+50, this.y+5, 16, 16),
		new ResourceIcon('plastic', this.x+100, this.y+5, 16, 16),
		new ResourceIcon('iron', this.x+150, this.y+5, 16, 16),
		new ResourceIcon('steel', this.x+200, this.y+5, 16, 16),
		new ResourceIcon('titanium', this.x+250, this.y+5, 16, 16)
	];

	this.resourceIcons[0].isAvailable = true;
}

Resources.prototype.getResourceIcon = function(query) {
	switch(query){
		case 'cardboard':
			return this.resourceIcons[0];
		case 'wood':
			return this.resourceIcons[1];
		case 'plastic':
			return this.resourceIcons[2];
		case 'iron':
			return this.resourceIcons[3];
		case 'steel':
			return this.resourceIcons[4];
		case 'titanium':
			return this.resourceIcons[5];
	}
};

Resources.prototype.draw = function() {
	context.fillStyle = 'rgba(0, 0, 0, 0.7)';
	context.fillRect(
		this.x,
		this.y,
		this.w,
		this.h
	);

	this.resourceIcons.forEach(function(i){
		i.draw();
	});
};

function ResourceIcon(type, x, y, w, h){
	this.type = type;
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.isAvailable = false;

	switch(this.type){
		case 'cardboard':
			this.spritePosX = 0;
			break;
		case 'wood':
			this.spritePosX = 16;
			break;
		case 'plastic':
			this.spritePosX = 32;
			break;
		case 'iron':
			this.spritePosX = 48;
			break;
		case 'steel':
			this.spritePosX = 64;
			break;
		case 'titanium':
			this.spritePosX = 80;
			break;
	}
}

ResourceIcon.prototype.update = function() {
	switch(this.type){
		case 'cardboard':
			this.text = papp;
			break;
		case 'wood':
			this.text = tre;
			break;
		case 'plastic':
			this.text = plast;
			break;
		case 'iron':
			this.text = jern;
			break;
		case 'steel':
			this.text = stal;
			break;
		case 'titanium':
			this.text = titan;
			break;
	}
};

ResourceIcon.prototype.draw = function() {
	this.update();
	context.drawImage(
			resourceSpriteImage,
			this.spritePosX,
			0,
			16,
			16,
			this.x,
			this.y,
			this.w,
			this.h
		);

	if(!this.isAvailable){
		context.drawImage(
			deniedSpriteImage,
			0,
			0,
			16,
			16,
			this.x,
			this.y,
			this.w,
			this.h
		);
	}
	
	context.fillStyle    = '#fff';
	context.font         = '12px monospace';
	context.textBaseline = 'top';
	context.fillText(this.text, this.x+20, this.y);
};

