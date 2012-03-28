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
	drawExplosions();
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