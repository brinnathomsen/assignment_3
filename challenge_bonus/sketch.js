

function setup() {
	createCanvas(640, 480);
}

function draw() {



	colorMode(HSB, 100);


for(var g = 0; g < 10; g++){

	for(var i = 0; i < 10; i++){
		noStroke();
		var randomValue = random(10);
		var squareFill = random(100);
		fill(0, 0, randomValue * 10 - squareFill);
		rect(i * 64, g * 64, 64, 64);

}
}

colorMode(RGB, 255, 255, 255, 1);
if (576 < mouseX) {
	fill(250, 0, 0, .4);
	rect(576, 0, 64, 480);
} else if (512 < mouseX) {
	fill(250, 0, 0, .4);
	rect(512, 0, 64, 480);
} else if (448 < mouseX) {
		fill(250, 0, 0, .4);
	rect(448, 0, 64, 480);
} else if (384 < mouseX) {
		fill(250, 0, 0, .4);
	rect(384, 0, 64, 480);
} else if (320 < mouseX) {
		fill(250, 0, 0, .4);
	rect(320, 0, 64, 480);
} else if (256 < mouseX) {
		fill(250, 0, 0, .4);
	rect(256, 0, 64, 480);
} else if (192 < mouseX) {
		fill(250, 0, 0, .4);
	rect(192, 0, 64, 480);
} else if (128 < mouseX) {
		fill(250, 0, 0, .4);
	rect(128, 0, 64, 480);
} else if (64 < mouseX) {
		fill(250, 0, 0, .4);
	rect(64, 0, 64, 480);
} else if (0 < mouseX) {
		fill(250, 0, 0, .4);
	rect(0, 0, 64, 480);
}



if (320 < mouseY) {
	fill(250, 0, 0, .4);
	rect(0, 320, 640, 64);
} else if (256 < mouseY) {
	fill(250, 0, 0, .4);
	rect(0, 256, 640, 64);
} else if (192 < mouseY) {
	fill(250, 0, 0, .4);
	rect(0, 192, 640, 64);
} else if (128 < mouseY) {
	fill(250, 0, 0, .4);
	rect(0, 128, 640, 64);
} else if (64 < mouseY) {
	fill(250, 0, 0, .4);
	rect(0, 64, 640, 64);
}






}
