var factories = [];

var factoryPidCounter = 0;
function Factory(xPos, yPos, width, height){
	this.x = xPos;
	this.y = yPos;
	this.w = width;
	this.h = height;
	this.flair = [];
	this.pid = factoryPidCounter;
	factoryPidCounter++;
}

function UpgradeFactoryFlair(data){
	this.active = true;
	this.x = factories[0].x + 10;
	this.y = factories[0].y + 10;
	this.w = 10;
	this.h = 10;
	this.text = "+1";
	this.startY = this.y;
}

Factory.prototype.draw = function() {
	context.drawImage(
		buildingSpriteImage,
		20*this.pid,
		0,
		20,
		20,
		this.x,
		this.y,
		this.w,
		this.h
	);

	this.flair.forEach(function(f){
		f.draw();
	});
}

Factory.prototype.update = function() {
	this.flair = this.flair.filter(function(f){
		if(f.active){
			return f;
		}
	});
};

UpgradeFactoryFlair.prototype.draw = function(){
	console.log('drawing');
	context.fillStyle = 'rgb(255, 0, 0)';
	context.fillRect(this.x, this.y, this.w, this.h);

	context.fillStyle    = '#fff';
	context.font         = '8px monospace';
	context.textBaseline = 'top';
	context.fillText  (this.text, this.x+1, this.y+1);

	this.y -= 2;

	if(this.y<this.startY-20){
		this.active = false;
		factories[0].update();
	}
}