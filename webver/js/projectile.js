function Projectile(startX, startY, dmg){
	console.log("creating Projectile");
	this.active = true;
	this.x = startX;
	this.y = startY;
	this.width = 4;
	this.height = 4;
	this.damage = dmg;
	this.vecX = 0;
	this.vecY = 5;
}

function updateProjectiles(){
	projectiles.forEach(function(p){
		p.x += 0;
		p.y += 1;

		//TODO: bedre
		if(p.y>180){
			destroyProjectile(p);
		}
	});
	projectiles = projectiles.filter(function(p){
		if(p.active){
			return p;
		}
	});
}

var explosionInterval;
function destroyProjectile(p){
	p.active = false;
	explosions.push(new Explosion(p.x, p.y));
}

var explosions = [];
function Explosion(x, y){
	this.isActive = true;
	this.x = x-32;
	this.y = y-10;
	this.exCounter = 0;
	this.iCounter = 0;
	this.jCounter = 0;
}

Explosion.prototype.draw = function() {
	context.drawImage(
		explosionSpriteSheet,
		64*this.iCounter,
		64*this.jCounter,
		64,
		64,
		this.x,
		this.y,
		64,
		64
	);
	this.exCounter++;
	this.iCounter++;
	if(this.iCounter==5){
		this.iCounter = 0;
		this.jCounter ++;
	}
	if(this.exCounter==26){
		this.isActive = false;
		explosions = explosions.filter(function(e){
			if(e.isActive){
				return e;
			}
		});
	}
};

function fireProjectile(weapon){
	projectiles.push(new Projectile(weapon.x+(weapon.width/2), weapon.y +(weapon.width/2) ));
}


function drawProjectiles(){
	projectiles.forEach(function(p){
		context.fillStyle = 'rgb(255,255,255)';
		context.fillRect(p.x, p.y, p.width, p.height);
	})
}



function drawExplosions(){
	explosions.forEach(function(ex){
		ex.draw();
	});
}
