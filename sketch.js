var bg, bg2, form, system, security, code;
var score = 0;

function preload() {
  bg = loadImage("https://raw.githubusercontent.com/paavani05/treasure-hunt/main/aladdin_cave.jpg");
  bg2 = loadImage("https://raw.githubusercontent.com/paavani05/treasure-hunt/main/treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System();
  security = new Security();
}

function draw() {
  background(bg);
  clues();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  security.display();

  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

  drawSprites()
}