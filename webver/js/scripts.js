

var targetFps = 30;
var drawInterval;
var context;
var canvas;

var map;
var spriteSheetJSON;
var spriteSheet;
var splashScreenImage;
var splashScreen;
var ssInterval;

var projectileInterval;
var explosionSpriteSheet;

//TODO: Konvertere til spritesheet
var groundSpriteImage;

var projectiles = [];

function init(){
	
	map = new Map(2);

	initCanvas();
	spriteSheet = new Image();
	spriteSheet.src = '../img/spritesheet.png';
	splashScreenImage = new Image();
	splashScreenImage.src = '../img/splashscreen.png';

	explosionSpriteSheet = new Image();
	explosionSpriteSheet.src = '../img/explosion.png';

	groundSpriteImage = new Image();
	groundSpriteImage.src = '../img/ground.png';

	splashScreen = new splash();
	initMouseListener();
	ssInterval = setInterval(function(){
		drawSplashScreen();
	}, targetFps/1000);
}

function initCanvas(){
	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
}

function draw(){
	blank();
	map.draw();
	drawProjectiles();
}

function blank(){
	context.fillStyle = 'rgb(255,255,255)';
	context.fillRect(0,0,canvas.width, canvas.height);
}

function startGame(){
	// Set canvas size to map size.
  	context.canvas.width  = jsonMap.width*cellSize;
  	context.canvas.height = jsonMap.height*cellSize;
	window.clearInterval(ssInterval);
	drawInterval = window.setInterval(function(){
		draw();
	}, 1000/targetFps);

	projectileInterval = setInterval(function(){
		updateProjectiles();
	}, 10);
	fireProjectile();
}

function fireProjectile(){
	projectiles.push(new Projectile(120,50, 1));
}

var exCounter = 0;
var iCounter = 0;
var jCounter = 0;
function drawExplosion(){
	context.drawImage(
		explosionSpriteSheet,
		64*iCounter,
		64*jCounter,
		64,
		64,
		80,
		110,
		88,
		118
	);
	exCounter++;
	iCounter++;
	if(iCounter==5){
		iCounter = 0;
		jCounter ++;
	}
	if(exCounter==26){
		window.clearInterval(explosionInterval);
		exCounter = 0;
		iCounter = 0;
		jCounter = 0;
	}
}

