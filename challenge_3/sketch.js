function setup() {
	// create a place to draw
	createCanvas(640, 360);
	noStroke();

}

function draw() {
	// clear the background

	var redBackground = color(150, 0, 0);
	var blueBackground = color(56, 56, 132);

	if (mouseIsPressed) {
	background(blueBackground);
	stroke(255, 255, 255);
	line(mouseX, 0, mouseX, 360);
	line(0, mouseY, 640, mouseY);

	fill(blueBackground);
	ellipse(mouseX, mouseY, 30, 30);


} else {

	background(redBackground);

	stroke(255, 255, 255);
	line(mouseX, 0, mouseX, 360);
	line(0, mouseY, 640, mouseY);

	fill(redBackground);
	ellipse(mouseX, mouseY, 30, 30);

}
}
