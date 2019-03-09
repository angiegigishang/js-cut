
window.onload = function() {
	document.onselectstart = new Function('event.returnValue = false;');
	var upDiv = document.getElementById("up");
	var rightDiv = document.getElementById("right");
	var mainDiv = document.getElementById("main");
	var leftDiv = document.getElementById("left");
	var downDiv = document.getElementById("down");
	var leftup = document.getElementById("left-up");
	var rightup = document.getElementById("right-up");
	var leftdown = document.getElementById("left-down");
	var rightdown = document.getElementById("right-down");
	var ifKeyDown = false;
	var contact = "";

	rightDiv.onmousedown = function(e) {
		e.stopProgation();  //阻止事件冒泡
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

	leftup.onmousedown = function() {
		ifKeyDown = true;
		contact = "left-up"
	}

	rightup.onmousedown = function() {
		ifKeyDown = true;
		contact = "right-up"
	}

	leftdown.onmousedown = function() {
		ifKeyDown = true;
		contact = "left-down";
	}

	rightdown.onmousedown = function() {
		ifKeyDown = true;
		contact = "right-down";
	}

	window.onmouseup = function() {
		ifKeyDown = false;
	}

	window.onmousemove = function (e) {
		if(ifKeyDown == true) {
			switch(contact) {
				case "right": rightMove(e); break;
				case "up": upMove(e); break;
				case "left": leftMove(e); break;
				case "down": downMove(e); break;
				case "left-up": upMove(e); leftMove(e); break;
				case "right-up": rightMove(e); upMove(e); break; 
				case "left-down": leftMove(e); downMove(e); break;
				case "right-down": rightMove(e); downMove(e); break;
			}
		}	
		setChoice();
		setPreview();
	}

	function rightMove (e) {
	    var x = e.clientX;
		var addWidth  = "";
		var widthBefore = mainDiv.clientWidth -2; 
		addWidth = x - getPosition(mainDiv).left - widthBefore;
		mainDiv.style.width = addWidth + widthBefore + "px";
	}

	function upMove (e) {
		var y = e.clientY;
		var mainY = getPosition(mainDiv).top;
		var addHeight = mainY - y;
		var heightBefore = mainDiv.offsetHeight - 2;
		mainDiv.style.height = heightBefore + addHeight + "px";
		mainDiv.style.top = mainDiv.offsetTop - addHeight + "px";
	}

	function leftMove (e) {
		var x = e.clientX;
		var mainX = getPosition(mainDiv).left;
		var addWidth = mainX - x;
		var widthBefore = mainDiv.offsetWidth - 2;
		mainDiv.style.width = widthBefore + addWidth + "px";
		mainDiv.style.left = mainDiv.offsetLeft - addWidth + "px";
	}

	function downMove (e) {
		var y = e.clientY;
		var heightBefore = mainDiv.offsetHeight - 2;
		var mainY = getPosition(mainDiv).top;
		var addHeight = y - mainY - heightBefore;
		mainDiv.style.height = heightBefore + addHeight + "px";
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

	function setChoice() {
		var top = mainDiv.offsetTop;
		var right = mainDiv.offsetLeft + mainDiv.offsetWidth;
		var bottom = mainDiv.offsetTop + mainDiv.offsetHeight;
		var left = mainDiv.offsetLeft;
		var img2 = document.getElementById("img2");
		img2.style.clip = "rect("+top+"px, "+right+"px, "+bottom+"px, "+left+"px)"
	}

	function setPreview() {
		var top = mainDiv.offsetTop;
		var right = mainDiv.offsetLeft + mainDiv.offsetWidth;
		var bottom = mainDiv.offsetTop + mainDiv.offsetHeight;
		var left = mainDiv.offsetLeft;
		var img3 = document.getElementById("img3");
		img3.style.top = -top + "px";
		img3.style.left = -left + "px";
		img3.style.clip = "rect("+top+"px, "+right+"px, "+bottom+"px, "+left+"px)"
	}
}




