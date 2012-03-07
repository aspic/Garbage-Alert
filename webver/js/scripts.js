

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

//TODO: Konvertere til spritesheet
var groundSpriteImage;

function init(){
	
	console.log(spritesheetJSON.frames["tre.png"].frame);
	map = new Map(2);

	initCanvas();
	spriteSheet = new Image();
	spriteSheet.src = '../img/spritesheet.png';
	splashScreenImage = new Image();
	splashScreenImage.src = '../img/splashscreen.png';

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
}

function blank(){
	context.fillStyle = 'rgb(255,255,255)';
	context.fillRect(0,0,canvas.width, canvas.height);
}

function startGame(){
	window.clearInterval(ssInterval);
	drawInterval = window.setInterval(function(){
		draw();
	}, 1000/targetFps);
}