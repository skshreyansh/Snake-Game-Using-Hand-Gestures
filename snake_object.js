
class Snake{

	constructor(){
	this.len=1;
	this.body=[];
	this.body[0]=createVector(0,0);
	this.xdir=0;
	this.ydir=0;
	}
	update(){
		let head=this.body[this.body.length-1].copy();
		this.body.shift();
		head.x=(head.x+this.xdir +w)%w;
		head.y=(head.y+this.ydir+h)%h;
		this.body.push(head);
	}
	grow(){
		let head=this.body[this.body.length-1];
		this.body.push(head);
	}
	checkDie(w,h){
	 	let head=this.body[this.body.length-1].copy();
	 	for(let i=0;i<this.body.length-1;i++)
	 	{
	 		let part=this.body[i];
	 		if(head.x==part.x && head.y==part.y)
	 		{
	 			return true;
	 		}
	 	return false;
	 	}
	}
	eatfood(pos){
		let x=this.body[this.body.length-1].x;
		let y=this.body[this.body.length-1].y;
		if(x==pos.x && y==pos.y){
			this.grow();
			return true;
		}
		return false;
	}
	show(){
		for(let i=0;i<this.body.length;i++){
		fill(255,0,0); 
		rect(this.body[i].x,this.body[i].y,1,1);
		} 
	}
	setDir(x,y)
	{
		this.xdir=x;
		this.ydir=y;
	}

}
