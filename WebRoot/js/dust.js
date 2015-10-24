var dustObj=function(){
	this.x=[];
	this.y=[];
	this.amp=[];
	this.No=[];
	this.alpha;
};
dustObj.prototype.num=50;
dustObj.prototype.init=function(){
	for (var i = 0; i <this.num; i++) {
		this.x[i]=Math.random()*canwidth;
		this.y[i]=Math.random()*canheight;
		this.amp[i]=Math.random()*15+30;
		this.No=Math.floor(Math.random()*7);//归一[0,7]
	}
	this.alpha=0;
};
dustObj.prototype.draw=function(){
	this.alpha+=deltaTime*0.0008;
	var l=Math.sin(this.alpha);
	for (var i = 0; i <this.num; i++) {
		var no=this.No;
		ctx1.drawImage(dustPic[no],this.x[i]+l*this.amp[i],this.y[i]);
	}
};