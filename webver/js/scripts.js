

var targetFps = 30;
var drawInterval;
var context;
var canvas;

var map;
var spriteSheetJSON;


function init(){
	
	console.log(spritesheetJSON.frames["jern.png"].frame.x);
	map = new Map(2);

	initCanvas();

	drawInterval = window.setInterval(function(){
		draw();
	}, 1000/targetFps);
}

function initCanvas(){
	canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
}

function draw(){
	map.draw();
}