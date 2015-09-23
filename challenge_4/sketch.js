
// ball 1 variables
var ballX1 = 200;
var ballY1 = 100;
var ballSpeedX1 = 5;
var ballSpeedY1 = 5;

// ball 2 variables
var ballX2 = 125;
var ballY2 = 350;
var ballSpeedX2 = 5;
var ballSpeedY2 = 5;

function setup() {
	createCanvas(640, 360);
}

function draw() {


	// ball 1 change position
	ballX1 = ballX1 + ballSpeedX1;
	ballY1 = ballY1 + ballSpeedY1;

	// ball 2 change position
	ballX2 = ballX2 + ballSpeedX2;
	ballY2 = ballY2 + ballSpeedY2;



	// ball 1 : don't let the ball go to far

	// right
	if (ballX1 > width) {
		ballSpeedX1 = -ballSpeedX1;
	}

	// bottom
	if (ballY1 > height) {
		ballSpeedY1 = -ballSpeedY1;
	}

	// left
	if (ballX1 < 0) {
		ballSpeedX1 = -ballSpeedX1;
	}

	// top
	if (ballY1 < 0) {
		ballSpeedY1 = -ballSpeedY1;
	}

	// ball 2 : dont let the ball go too far

	// right
	if (ballX2 > width) {
		ballSpeedX2 = -ballSpeedX2;
	}

	// bottom
	if (ballY2 > height) {
		ballSpeedY2 = -ballSpeedY2;
	}

	// left
	if (ballX2 < 0) {
		ballSpeedX2 = -ballSpeedX2;
	}

	// top
	if (ballY2 < 0) {
		ballSpeedY2 = -ballSpeedY2;
	}


	//draw


	// ball 1
	background(0);
	ellipse(ballX1, ballY1, 50, 50);

	//ball 2

	ellipse(ballX2, ballY2, 50, 50);

}
