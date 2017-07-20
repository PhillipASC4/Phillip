var sentence = "hello world";
var typed = ("")
function setup() { 
    createCanvas(450, 300);
    background(37, 37, 37);

    fill("white")
    textSize(16); 
    text("Please type this below:", 50, 50);
    text(senence, 50, 100);
}

function keyTyped() {
   console.log (typed)
   typed = typed + key;
   if (typed == sentence){alert = "You got it!!!"}
}