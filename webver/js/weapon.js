var weapons = [];

var weaponPidCounter = 0;
function Weapon(x, y, w, h){
	this.weapontype = CardboardWeapon;
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;

	this.f = function(){
		weaponMenu.draw();
	};

	this.pid = weaponPidCounter;
	weaponPidCounter++;
};

Weapon.prototype.draw = function() {
	context.drawImage(
		buildingSpriteImage,
		40+(20*this.pid),
		0,
		20,
		20,
		this.x,
		this.y,
		this.width,
		this.height
	);
};


var weaponMenu = new WeaponMenu();

function WeaponMenu(){
	this.active = false;
	this.x = 250;
	this.y = 0;
	this.w = 50;
	this.h = 100;

	this.buttons = [];
}

WeaponMenu.prototype.draw = function() {
	context.fillStyle = 'rgba(0, 0, 0, 0.7)';
	context.fillRect(this.x, this.y, this.w, this.h);

	this.buttons.forEach(function(b){
		b.draw();
	});
};