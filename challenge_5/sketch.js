



var ballX = 200;
var ballY = 100;
var ballSpeedX = 3;
var ballSpeedY = 3;

function setup() {
	createCanvas(640, 360);
}

function draw() {


if (ballX > mouseX) {
	ballX = ballX - ballSpeedX;
}

if (mouseX > ballX) {
	ballX = ballX + ballSpeedX;
}

if (ballY > mouseY) {
	ballY = ballY - ballSpeedY;
}


if (mouseY > ballY) {
	ballY = ballY + ballSpeedY;
}



	//////////////////////////////
	// draw



	background(0);
	ellipse(ballX, ballY, 50, 50);



}
