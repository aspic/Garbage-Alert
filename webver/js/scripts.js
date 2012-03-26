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

var menuMode = false;
var gameMode = false;

var soundMuted = false;

//TODO: Konvertere til spritesheet
var groundSpriteImage;

var projectiles = [];

var introMusic;

function init(){
	if (!localStorage.soundMuted){
    	localStorage.soundMuted = false;
    }
    else if(localStorage.soundMuted=='true'){
    	soundMuted = true;
    }
	
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

	initOld();
}

function initCanvas(){
	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
}

function draw(){
	context.clearRect(0,0,canvas.width, canvas.height);
	map.draw();
	drawProjectiles();
	drawMenus();
}

var activeMenus = [];
function drawMenus(){
	activeMenus.forEach(function(m){
		m.draw();
	});
}

function blank(){
	context.fillStyle = 'rgb(255,255,255)';
	context.fillRect(0,0,canvas.width, canvas.height);
}

function startGame(){
	// Disables menu mode, enables game mode
	audioElement.pause();

	menuMode = false;
	gameMode = true;

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
	projectiles.push(new Projectile((canvas.width/2)-2,50, 1));
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
		(canvas.width/2)-32,
		150,
		64,
		64
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

function toggleMute(){
	console.log(soundMuted);
	if(!soundMuted){
		audioElement.pause();
		soundMuted = true;
		localStorage.soundMuted = true;
	}
	else{
		audioElement.play();
		soundMuted = false;
		localStorage.soundMuted = false;
	}
	
}