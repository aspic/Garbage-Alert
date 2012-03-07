var audioElement;

function splash() {
	audioElement = document.createElement('audio');
	audioElement.setAttribute('src', '../audio/introMusic.ogg');
	if(!soundMuted){
		audioElement.play();
	}
	
	gameMode = false;
	menuMode = true;

	this.startbutton = {
		active: true,
		buttontext: "Start",
		f: function(){
			// console.log("button clicked");
			startGame();
		},
		x: 200,
		y: 400,
		width: 100,
		height: 50
	};
};

function drawSplashScreen(){
	context.fillStyle = 'rgb(0,0,0)';
	context.fillRect(0,0,512,512);

	context.drawImage(
		splashScreenImage,
		0,
		0,
		892,
		589,
		0,
		0,
		512,
		512
	);

	// DRAWS BUTTON
	var b = splashScreen.startbutton;
	context.fillStyle = 'rgb(255,105,180)';
	context.fillRect(b.x,b.y,b.width,b.height);
}
