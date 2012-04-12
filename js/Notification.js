
var debugNotify;

function addNotification(){
	 debugNotify = new Notification("Kanon klar");
}

function Notification(text){
	this.active = true;
	this.text = text;

	this.x = 300;
	this.y = 400;
	this.w = 200;
	this.h = 100;
	this.opacity = 0;

	notifications.push(this);

	window.setTimeout(function(){
		debugNotify.fadeIn();
	}, 0);
}

Notification.prototype.draw = function() {
	context.fillStyle = 'rgba(0, 0, 0, ' + this.opacity + ')';
	context.fillRect(this.x, this.y, this.w, this.h);

	context.fillStyle    = 'rgba(255, 255, 255, ' + this.opacity + ')';
	context.font         = '12px monospace';
	context.textBaseline = 'top';
	context.fillText  (this.text, this.x+5, this.y+5);
}

Notification.prototype.fadeIn = function() {
	var fadeInInterval = window.setInterval(function(){
		if(debugNotify.opacity<1){

			debugNotify.opacity += 0.01;
		}
		else{
			window.clearInterval(fadeInInterval);
		}
	}, 5, debugNotify);

	window.setTimeout(function(){
		debugNotify.fadeOut();
	}, 5000);
}

Notification.prototype.fadeOut = function() {
	var fadeOutInterval = window.setInterval(function(){
		if(debugNotify.opacity>0){

			debugNotify.opacity -= 0.01;
		}
		else{
			window.clearInterval(fadeOutInterval);
			debugNotify.active = false;
			notifications = notifications.filter(function(n){
		if(n.active){
			return n;
		}
	});
		}
	}, 5, debugNotify);
}

function drawNotifications(){
	notifications.forEach(function(n){
		n.draw();
	});
}