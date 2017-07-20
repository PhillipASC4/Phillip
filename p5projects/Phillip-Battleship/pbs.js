function setup() {
  createCanvas(windowWidth, windowHeight);
  background (25);
}
var x = 0
var x = 0 
function draw() {

    for(a = 0; a < 8; a++){
        for(i = 0; i < 8;i++){
            rect(x, y, 100, 100)
            x = 100 + x
            }
            y = 100 + y
            x = 0
        }
    }
}