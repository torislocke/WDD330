var canvas = document.getElementById('myCanvas');
//The object that’s returned by getContext is an instance of CanvasRenderingContext2D
var context = canvas.getContext('2d');

context.strokeStyle = 'red';
context.fillStyle = 'rgba(0, 0, 255, 0.5)';

context.fillRect(10, 10, 100, 100);
context.strokeRect(10, 10, 100, 100);


function drawPattern() {
	var canvas = document.getElementById('demo2');
	var context = canvas.getContext('2d');
	context.strokeStyle = 'red';

	var img = new Image();
    img.src = "../images/bg-bike.png";
    img.onload = function() {
    var pattern = context.createPattern(img, "repeat"); 
    context.fillStyle = pattern;                        
    context.fillRect(10, 10, 100, 100);                  
    context.strokeRect(10, 10, 100, 100);             
    };
}

function drawGradient() {
   	var canvas = document.getElementById('demo2');
	var context = canvas.getContext('2d');
    var gradient = context.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "blue"); 
    gradient.addColorStop(1, "white"); 
    context.fillStyle = gradient; 
    context.fillRect(10, 10, 100, 100); 
    context.strokeRect(10, 10, 100, 100); 
}

function drawCircle(canvas) {
	var context = canvas.getContext('2d');
	context.beginPath();
	context.arc(100, 100, 50, 0, Math.PI * 2, true);
	context.closePath();
	context.strokeStyle = 'red';
	context.fillStyle = 'blue';
	context.lineWidth = 3;
	context.fill();
	context.stroke();
}