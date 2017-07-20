function setup() {
    createCanvas(800, 500);
    background("gray");
   }
 var pkmText = "What will Charizard do?"
function draw() {
    fill("white");
    stroke("black");
    ellipse(190,380,480,80);

   var c = color("white");
    fill(c);
    stroke("black");
    strokeWeight(5);
    rect(150,250,50,130);
//Text box
   var c = color("white");
    fill(c);
    stroke("black");
    strokeWeight(5);
    rect(3,396,393,100);
//Text in text box
    
   var pokemon = ["Charmander"]
    stroke("black");
    strokeWeight(2);
    fill("black");
    textSize(30);
    text(pkmText,25, 450);

   fill("white");
    stroke("black");
    ellipse(600,200,370,80);

   var c = color("white");
    fill(c);
    stroke("black");
    strokeWeight(5);
    rect(560,80,50,130);

   var c = color("white");
    fill(c);
    stroke("black");
    strokeWeight(5);
    rect(403,396,393,100);
//user hp box
   var c = color("white");
    fill(c);
    stroke("black");
    strokeWeight(5);
    rect(425,320,350,70)
    text('Charizard: '+Charizard.hp, 450, 365);
//enemy hp box
   var c = color("white");
    fill(c);
    stroke("black");
    strokeWeight(5);
    rect(25,25,350,70);
    text("Blastoise: "+ Blastoise.hp, 50, 70)
//FIGHT
   stroke("black");
    noStroke();
    fill("black");
    textSize(30);
    text("FIGHT",450,435);

   stroke("black");
    noStroke();
    fill("black");
    textSize(30);
    text("POKeMON",450, 480);

   stroke("black");
    noStroke();
    fill("black");
    textSize(30);
    text("BAG",660, 435);

   stroke("black");
    noStroke();
    fill("black");
    textSize(30);
    text("RUN",660, 480);

    

}

function mousePressed() {
    console.log(mouseX, mouseY)
    if (mouseX >= 450 && mouseX <= 540 && mouseY >= 335 && mouseY<=435){
        Blastoise.hp = Blastoise.hp - Charizard.attack;  
        blastoiseAttack()}
}

function blastoiseAttack() {
    Charizard.hp = Charizard.hp - Blastoise.attack;
     pkmText = "Blastiose used Water Gun"
     //text("Blastiose used Water Gun",25, 450);
    }

function pokemon (attack, hp){
    this.attack = attack;
    this.hp = hp;
}

function keyPressed() {
    if(keyCode === ENTER ){pkmText = "What will Charizard do."}
}

var Charizard = new pokemon(10, 100)
var Blastoise = new pokemon(10, 100)