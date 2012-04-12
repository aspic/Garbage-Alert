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

  	if(menuMode){
	  	var b = splashScreen.startbutton;
  		if((x>b.x) && (x<b.x+b.width) && (y>b.y) && (y<b.y+b.height)){
  			b.f();
  		}
  	}
    if(gameMode)
    {
      if(activeMenus.length>0){ // Meny er aktiv, finn ut om en trykker innenfor
        activeMenus.forEach(function(m){
          if((x>m.x) && (x<m.x+m.w) && (y>m.y) && (y<m.y+m.h)){ // Man har trykket innenfor, sjekk om en trykker på en knapp
            m.buttons.forEach(function(b){
              if((x>b.x) && (x<b.x+b.w) && (y>b.y) && (y<b.y+b.h)){
                b.f(); // knapp er truffet, kjør funksjon!
              }
            });
          }
          else{
            mapGrid[Math.floor(y/20)][Math.floor(x/20)].click();
          }
        });
      }
      else{
        mapGrid[Math.floor(y/20)][Math.floor(x/20)].click();
      }
    }
}