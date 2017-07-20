function setup() {
  createCanvas(1000, 1000);
  background( 0, 0, 0); 
}
function mouseDragged() {
    var r = random(50)
    var w = random(50)
    var x = random(500)
    var y = random(500)
    var z = random(500)
        
    fill(x, y, z) 

  ellipse(mouseX, mouseY, r, w);
  // prevent default
  return true;
}