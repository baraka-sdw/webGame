var momObj=function(){
	this.x;	
	this.y;
	this.angle;
	this.bigTailTimer=0;
	this.bigTailCount=0;
	this.bigEyeCount=0;
	this.bigEyeTimer=0;
	this.bigEyeInterval=1200;
	this.momBodyCount=0; 
};
momObj.prototype.init=function(){
	this.x=canwidth*0.5;
	this.y=canheight*0.5;
	this.angle=0;
};
momObj.prototype.draw=function(){;
	//Lerp x,y
	//Math.atan2(y,x)
	var deltaY=my-this.y;
	var deltaX=mx-this.x;
	var beta=Math.atan2(deltaY, deltaX);
	
	//lerp angle
	this.angle=lerpAngle(beta,this.angle, 0.9);//-pi,pi
	this.x=lerpDistance(mx, this.x, 0.98);
	this.y=lerpDistance(my, this.y, 0.98);
	//babytail count
	this.bigTailTimer+=deltaTime;
//	document.getElementById("test").innerHTML=deltaTime;
	if(this.bigTailTimer>50){
		this.bigTailCount=(this.bigTailCount+1)%8;
		this.bigTailTimer%=50;
	}
	this.bigEyeTimer+=deltaTime;
	if(this.bigEyeTimer>this.bigEyeInterval){
		this.bigEyeCount=(this.bigEyeCount+1)%2;
		this.bigEyeTimer%=this.bigEyeInterval;
	}
	ctx1.save();
	ctx1.translate(this.x,this.y);
	ctx1.rotate(this.angle+Math.PI);
	var bigEyeCount=this.bigEyeCount;
	ctx1.drawImage(bigEye[bigEyeCount],-bigEye[bigEyeCount].width*0.5,-bigEye[bigEyeCount].height*0.5);
	if(date.double==1){
		ctx1.drawImage(momBodyOra[this.momBodyCount],-momBodyOra[this.momBodyCount].width*0.5,-momBodyOra[this.momBodyCount].height*0.5); 
	}else{
		ctx1.drawImage(momBodyBlue[this.momBodyCount],-momBodyBlue[this.momBodyCount].width*0.5,-momBodyBlue[this.momBodyCount].height*0.5);
	}
	ctx1.drawImage(bigTail[this.bigTailCount],-bigTail[this.bigTailCount].width*0.5+30,-bigTail[this.bigTailCount].height*0.5);
	ctx1.restore();
};