var weapons = [];

var weaponPidCounter = 0;
function Weapon(x, y, w, h){
	this.weapontype = CardboardWeapon;
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
	this.weaponMenu = new WeaponMenu();

	this.f = function(){
		this.weaponMenu.toggleActive();
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

function WeaponMenu(){
	this.active = false;
	this.x = 250;
	this.y = 0;
	this.w = 50;
	this.h = 100;

	this.buttons = [
		new WeaponMenuButton(250,0,50,50,"T",function(){
			alert("test");
		})
	];
}

WeaponMenu.prototype.draw = function() {
	context.fillStyle = 'rgba(0, 0, 0, 0.7)';
	context.fillRect(this.x, this.y, this.w, this.h);

	this.buttons.forEach(function(b){
		b.draw();
	});
};

WeaponMenu.prototype.toggleActive = function() {
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
};

function WeaponMenuButton(x,y,w,h,text,f){
	this.active = true;
	this.text = text;
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.f = f;
}

WeaponMenuButton.prototype.draw = function() {
	context.fillStyle = 'rgb(255, 0, 0)';
	context.fillRect(this.x, this.y, this.w, this.h);

	context.fillStyle    = '#00f';
	context.font         = '12px monospace';
	context.textBaseline = 'top';
	context.fillText  (this.text, this.x+5, this.y+5);
};