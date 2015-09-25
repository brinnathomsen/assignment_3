function setup() {
	// create a place to draw
	createCanvas(640, 460);
	noStroke();
	noLoop();
}

function draw() {
	// clear the background
	background(130, 130, 170);


	// draw the circles

for(var i = 0; i < 20; i++){

	stroke(255, 255, 255);
	noFill();
	ellipse(320, 220, i * 40 + 10, i * 40 + 10);

	stroke (0, 0, 0);
	noFill();
	ellipse (320, 220, i * 40 + 25, i * 40 + 25);
}
}
