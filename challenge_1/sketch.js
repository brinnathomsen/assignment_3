function setup() {
	// create a place to draw
	createCanvas(640, 480);
	noStroke();
	noLoop();
}

function draw() {
	// clear the background
	colorMode(HSB, 100)
	background(0, 0, 19);

	// draw the boxes
	for(var i = 0; i < 10; i++){
		stroke(200, 10, 83);
		fill(330, 100, i * 10);
		rect(i * 60 + 25, 220, 50, 50);
	}

}
