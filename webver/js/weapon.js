var weapons = [];

function Weapon(x, y, w, h){
	this.weapontype = CardboardWeapon;
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;

	this.f = function(){

	};
};

Weapon.prototype.draw = function() {
	context.fillStyle = 'rgb(255,105,180)';
	context.fillRect(this.x, this.y, this.width, this.height);
};