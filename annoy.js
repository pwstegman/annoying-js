document.oncontextmenu = function(e){
  alert("The context menu has been disabled!");
	return false;
}

document.onkeydown = function(e){
	if(e.which == 17){
		alert("Pressing the control key is disabled!");
		return false;
	}
	if(e.which == 18){
		alert("Pressing the alt key is disabled!");
		return false;
	}
	if(e.which == 9){
		alert("Pressing the tab key is disabled!");
		return false;
	}
}

window.onbeforeunload = function(e){
	return "You really should stay on this website!!!!111one!!1!!";
}

