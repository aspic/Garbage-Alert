var splashScreen;
function splash() {

	this.startbutton = {
		active: true,
		buttontext: "Start",
		f: function(){
			// console.log("button clicked");
			startGame();
		},
		x: 200,
		y: 10,
		width: 100,
		height: 50
	};
};

function drawSplashScreen(){
	// var image = new Image();
	// image.src = "../img/splashscreen.png";
	// context.drawImage(
	// 	image,
	// 	0,
	// 	0,
	// 	512,
	// 	512,
	// 	0,
	// 	0,
	// 	512,
	// 	512
	// );


	// DRAWS BUTTON
	var b = splashScreen.startbutton;
	console.log(b.active);
	context.fillStyle = 'rgb(255,105,180)';
	context.fillRect(b.x,b.y,b.width,b.height);
}
