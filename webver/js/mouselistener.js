function initMouseListener()
{
	canvas.addEventListener('mouseup', registerInput, false);
}

function registerInput(ev)
{
	var x, y;
   	if (ev.offsetX || ev.offsetX == 0)
   	{
    	x = ev.offsetX;
     	y = ev.offsetY;
  	}
  	var b = splashScreen.startbutton;
  	if((x>b.x) && (x<b.x+b.width) && (y>b.y) && (y<b.y+b.height)){
  		b.f();
  	}
}