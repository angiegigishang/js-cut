window.onload = function() {
	var upDiv = document.getElementById("up");
	var rightDiv = document.getElementById("right");
	var mainDiv = document.getElementById("main");
	var leftDiv = document.getElementById("left");
	var downDiv = document.getElementById("down");
	var ifKeyDown = false;
	var contact = "";

	rightDiv.onmousedown = function() {
		ifKeyDown = true;
		contact = "right";
	}

	upDiv.onmousedown = function() {
		ifKeyDown = true;
		contact = "up";
	}

	leftDiv.onmousedown = function() {
		ifKeyDown = true;
		contact = "left";
	}

	downDiv.onmousedown = function() {
		ifKeyDown = true;
		contact = "down";
	}

	window.onmouseup = function() {
		ifKeyDown = false;
	}

	window.onmousemove = function (e) {
		if(ifKeyDown == true) {
			if(contact == "right") {
				var x = e.clientX;
				var addWidth  = "";
				var widthBefore = mainDiv.clientWidth -2; 
				addWidth = x - getPosition(mainDiv).left - widthBefore;
				mainDiv.style.width = addWidth + widthBefore + "px";
			} else if (contact == "up") {
				var y = e.clientY;
				var mainY = getPosition(mainDiv).top;
				var addHeight = mainY - y;
				var heightBefore = mainDiv.offsetHeight - 2;
				mainDiv.style.height = heightBefore + addHeight + "px";
				mainDiv.style.top = mainDiv.offsetTop - addHeight + "px";
			} else if (contact == "left") {
				var x = e.clientX;
				var mainX = getPosition(mainDiv).left;
				var addWidth = mainX - x;
				var widthBefore = mainDiv.offsetWidth - 2;
				mainDiv.style.width = widthBefore + addWidth + "px";
				mainDiv.style.left = mainDiv.offsetLeft - addWidth + "px";
			} else if (contact == "down") {
				var y = e.clientY;
				var heightBefore = mainDiv.offsetHeight - 2;
				var mainY = getPosition(mainDiv).top;
				var addHeight = y - mainY - heightBefore;
				mainDiv.style.height = heightBefore + addHeight + "px";
			}		
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