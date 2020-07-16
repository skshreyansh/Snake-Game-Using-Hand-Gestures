let snake;
let rez=20;
let food;
let w;
let h;
function setup()
{
	createCanvas(640, 480);
	w=floor(width/rez);
	h=floor(height/rez);
	frameRate(10); 
	snake=new Snake();
	foodLocation();
}


function keyPressed(){
	if (keyCode === LEFT_ARROW) {
    snake.setDir(-1,0);
  } else if (keyCode === RIGHT_ARROW) {
   snake.setDir(1,0);
  }
   else if (keyCode === UP_ARROW) {
    snake.setDir(0,-1);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0,1);
  }
}

function foodLocation(){
	let x=floor(random(w));
	let y=floor(random(h));
	food =createVector(x,y);
}
 

function draw(){
	
	background(0);   
	scale(rez);
	if(snake.checkDie(w,h))
	{
		background(0,0,255);

	fill(255,255,0);
	textSize(5);
	text('GAME OVER',1,4);
		noLoop();
	}
	if(snake.eatfood(food)){
		foodLocation();
	}
	snake.update();
	snake.show(); 
	noStroke();
	fill(0,255,0);
	rect(food.x,food.y,1,1);
}
/*
//  https://storage.googleapis.com/tm-model/D0EOpoU5M/model.json
//Another better one
//https://storage.googleapis.com/tm-model/wBH-DiMld/model.json
//Even better one
//https://storage.googleapis.com/tm-model/wBH-DiMld/model.json*/
