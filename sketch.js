 
let video;
let label='waiting...';

let classifier;

function preload(){
	classifier=ml5.imageClassifier('https://storage.googleapis.com/tm-model/wBH-DiMld/model.json');
}

let snake;
let rez=20,score=0;
let food;
let w;
let h;
function setup()
{
	createCanvas(640, 480);
  	video=createCapture(VIDEO);
  	video.hide();
  	flipvideo=ml5.flipImage(video);
 	classifyVideo();

	w=floor(width/rez);
	h=floor(height/rez);
	frameRate(10); 
	snake=new Snake();
	foodLocation();
}
function classifyVideo(){
  //	flipvideo=ml5.flipImage(video);
	classifier.classify(video,gotResults);
}
function gotResults(error,results){
	if(error){
		console.error(error);
		return;
	}
	label=results[0].label; 
	classifyVideo();
}

function foodLocation(){
	let x=floor(random(w));
	let y=floor(random(h));
	food =createVector(x,y);
}

function move(){
	if(label== 'left'){
		snake.setDir(-1,0);
	} 
	else if(label== 'right'){
		snake.setDir(1,0);
	}
	else if(label== 'up'){
		snake.setDir(0,-1);
	}
	else if(label== 'down'){
		snake.setDir(0,1);
	}
}

function draw(){
	
	background(220);  
	textSize(32);
	fill(255); 
	image(video,0,0);
	move();
	text('Score : '+score,150,50);
	text(label,10,50);
	scale(rez);
	if(snake.checkDie(w,h))
	{
		background(0);
		fill(255,0,0);
		noStroke();
		textSize(5);
		text('GAME OVER',1,5);

		noLoop();
	}
	if(snake.eatfood(food)){
		foodLocation();
		score+=10;
	}
	snake.update();
	snake.show(); 
	noStroke();
	fill(0,255,0);
	rect(food.x,food.y,1,1);
}
//  https://storage.googleapis.com/tm-model/D0EOpoU5M/model.json