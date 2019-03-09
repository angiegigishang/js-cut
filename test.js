window.onload = function() {
	var rightDiv = document.getElementById("right");
	var mainDiv = document.getElementById("main");
	var ifkeyDown = false;

	rightDiv.onmousedown = function() {
		ifKeyDown = true;
	}

	rightDiv.onmouseup = function() {
		ifKeyDown = false;
	}

	window.onmousemove = function (e) {
		if(ifKeyDown) {
			var x = e.clientX;
			var addWidth  = "";
			var widthBefore = mainDiv.clientWidth -2; 
			addWidth = x - getPosition(mainDiv).left - widthBefore;
			mainDiv.style.width = addWidth + widthBefore + "px";
		}	
	}	
}


function getPosition (node) {
	var left = node.offsetLeft;
	var top = node.offsetTop;
	var parent = node.offsetParent;
	while(parent != null) {
		left += parent.offsetLeft;
		top += parent.offsetTop;
		parent = parent.offsetParent;
	}
	return {"left": left, "top": top};
}