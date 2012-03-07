

var targetFps = 30;
var drawInterval;
var context;
var canvas;

var map;
var spriteSheetJSON;
var spriteSheet;

function init(){
	
	console.log(spritesheetJSON.frames["tre.png"].frame);
	map = new Map(2);

	initCanvas();
	spriteSheet = new Image();
	spriteSheet.src = '../img/spritesheet.png';

	splashScreen = new splash();
	initMouseListener();
	drawSplashScreen();
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
	drawInterval = window.setInterval(function(){
		draw();
	}, 1000/targetFps);
}