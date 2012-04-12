function FactoryUpgradeMenu(){
	this.active = false;

	this.x = 0;
	this.y = 0;
	this.w = 100;
	this.h = 500;
	this.f = function(){
		alert("test");
	}

	this.buttons = [
		new FactoryUpgradeMenuButton(), 
		new FactoryUpgradeMenuCloseButton(0, this.h-50, this.w, 50)
	];
}

FactoryUpgradeMenu.prototype.draw = function() {
	context.fillStyle = 'rgba(0, 0, 0, 0.7)';
	context.fillRect(this.x, this.y, this.w, this.h);

	this.buttons.forEach(function(b){
		b.draw();
	});
}

FactoryUpgradeMenu.prototype.toggleActive = function(){
	if(!this.active){
		this.active = true;
		activeMenus.push(this);
	}
	else{
		this.active = false;
		activeMenus = activeMenus.filter(function(m){
			if(m.active){
				return m;
			}
		});
	}
}

FactoryUpgradeMenu.prototype.getButtons = function(){
	return this.buttons;
}

function FactoryUpgradeMenuButton(){
	this.x = 10;
	this.y = 10;
	this.w = 25;
	this.h = 25;
	this.f = function(){
		factories[0].flair.push(new UpgradeFactoryFlair("upgrade"));
		upgradeEnvThroughput();
		factoryUpgradeMenu.toggleActive();
	}
}

FactoryUpgradeMenuButton.prototype.draw = function(){
	context.fillStyle = 'rgb(255, 0, 0)';
	context.fillRect(this.x, this.y, this.w, this.h);
}

function FactoryUpgradeMenuCloseButton(x,y,w,h){
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.text = "Lukk";
	this.f = function(){
		factoryUpgradeMenu.toggleActive();
	}
}

FactoryUpgradeMenuCloseButton.prototype.draw = function(){
	context.fillStyle = 'rgb(255, 0, 0)';
	context.fillRect(this.x, this.y, this.w, this.h);

	context.fillStyle    = '#00f';
	context.font         = '12px monospace';
	context.textBaseline = 'top';
	context.fillText  (this.text, this.x+5, this.y+5);
}