var dateObject=function(){
	this.fruitNum=0;
	this.double=1;
	this.score=0;
	this.gameOver=false;
	this.alpha=0;
};
//不需要
//dateObject.prototype.reset=function(){
//	 this.fruitNum=0;
//	 this.double=1;
//};
dateObject.prototype.draw=function(){
	var w=can1.width;
	var h=can1.height;
	ctx1.shadowBlur=20;
	ctx1.shadowColor="white";
	ctx1.textAlign = 'center';
	ctx1.fillStyle="white";
	ctx1.font="30px Verdana";
	ctx1.fillText("Score   "+this.score,w*0.5,h-20);
	if(this.gameOver){
		this.alpha+=deltaTime*0.0005;
		ctx1.font="40px Verdana";
		if(this.alpha>1) this.alpha=1;
		ctx1.fillStyle="rgba(255,0,0,"+this.alpha+")";
		ctx1.fillText("GAMEOVER",w*0.5,h*0.5);
	}
//	document.getElementById("test").innerHTML=this.fruitNum+"  "+this.double+"  "+w+"  "+h;
};
dateObject.prototype.addScore=function(){
	this.score+=this.fruitNum*100*this.double;
	this.fruitNum=0;
	this.double=1;
};