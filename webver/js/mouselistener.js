function initMouseListener()
{
	canvas.addEventListener('mouseup', registerInput, false);
	// canvas.addEventListener('mousemove', rawr, false);
}

function registerInput(ev)
{
	var x, y;
   	if (ev.offsetX || ev.offsetX == 0)
   	{
    	x = ev.offsetX;
     	y = ev.offsetY;
  	}

  	if(menuMode){
	  	var b = splashScreen.startbutton;
  		if((x>b.x) && (x<b.x+b.width) && (y>b.y) && (y<b.y+b.height)){
  			b.f();
  		}
  	}
}

function rawr(ev)
{
	// console.log("dummy");
	var x, y;
   	if (ev.offsetX || ev.offsetX == 0)
   	{
    	x = ev.offsetX;
     	y = ev.offsetY;
  	}

	if(gameMode){
  		mapGrid[Math.floor(y/20)][Math.floor(x/20)].highlighted = true;
  	}
}