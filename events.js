var outputEvent = document.getElementById('output-target');
var gPig = document.getElementById('guinea-pig');
var timesFired = 0

var clickEventOne = function(e) {
	return outputEvent.innerHTML = "<div>" + "you clicked a section " + timesFired + " times!" +"</div>";
};

var mouseoverEvent = function (e) {
	return outputEvent.innerHTML = "<div>" + "you hovered over this area " + timesFired + " times!" +"</div>";
};

var mouseLeave = function(e) {
	return outputEvent.innerHTML = "<div>" + "You Left Me!" +"</div>";
};

var onKeyUp = function(e) {
	var userInput = document.getElementById('keypress-input').value;
   	outputEvent.innerHTML = userInput;
};

var colorClickEvent = function(e) {
   	return gPig.style.background = e;
};

var hulkClick = function(e) {
	return gPig.style.fontSize = "xx-large";
};

var borderClick = function(e) {
	return gPig.style.borderStyle = "solid";
};

var roundBorderClick = function(e) {
	return gPig.style.borderRadius = "20px";
};

document.getElementById('articleSection').addEventListener('click', clickEventOne);
document.getElementById('page-title').addEventListener('mouseover', mouseoverEvent);
document.getElementById('page-title').addEventListener('mouseleave', mouseLeave);
document.getElementById('keypress-input').addEventListener('onkeyup', onKeyUp);
document.getElementById('add-color').addEventListener('click', colorClickEvent);
document.getElementById('make-large').addEventListener('click', hulkClick);
document.getElementById('add-border').addEventListener('click', borderClick);
document.getElementById('add-rounding').addEventListener('click', roundBorderClick);