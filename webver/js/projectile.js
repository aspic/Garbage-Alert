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
	explosionInterval = setInterval(function(){
		drawExplosion();
	}, 2); 
}

function drawProjectiles(){
	projectiles.forEach(function(p){
		context.fillStyle = 'rgb(255,255,255)';
		context.fillRect(p.x, p.y, p.width, p.height);
	})
}