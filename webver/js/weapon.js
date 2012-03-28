var weapons = [];

function Weapon(x, y, w, h){
	this.weapontype = CardboardWeapon;
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;

	this.f = function(){
		weaponMenu.draw();
	};
};

Weapon.prototype.draw = function() {
	context.fillStyle = 'rgb(255,105,180)';
	context.fillRect(this.x, this.y, this.width, this.height);
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