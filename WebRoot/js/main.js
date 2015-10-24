var can1;
var can2;
var lastTime;
var deltaTime;	
var ctx1;
var ctx2;
var canwidth;
var canheight;
var ane;
var fruit;
var mom;
var baby;
var babyBody=[];
var momBodyOra=[];
var momBodyBlue=[];
var babyTail=[];
var bigTail=[];
var babyEye=[];
var bigEye=[];
var mx;
var my;
var wave;
var date;
var halo;
var bgPic=new Image();
window.onload=game;	
var dust;
var dustPic=[];
function game() {
	init();
	lastTime=Date.now();
	deltaTime=0;
	gameloop();
}
function init() {
	//获得canvas context
	can1=document.getElementById("canvas1");
	ctx1=can1.getContext("2d");
	can2=document.getElementById("canvas2");
	ctx2=can2.getContext("2d");
	can1.addEventListener("mousemove", onMouseMove, false);
	bgPic.src="../img/background.jpg";
	canwidth=can1.width;
	canheight=can1.height;
	ane=new aneObj();
	ane.init();
	fruit=new fruitObj();
	fruit.init();
	mom=new momObj();
	mom.init();
	baby=new babyObj();
	baby.init();
	mx=canwidth*0.5;
	my=canheight*0.5;
	for (var i = 0; i < 8; i++) {
		//babyTail[i]=new Image();
		bigTail[i]=new Image();
		babyTail[i]=new Image();
		//babyTail[i].src="../img/babyTail"+i+".png";
		bigTail[i].src="../img/bigTail"+i+".png";
		babyTail[i].src="../img/babyTail"+i+".png";
	}
	for (var i = 0; i < 2; i++) {
		bigEye[i]=new Image();
		babyEye[i]=new Image();
		bigEye[i].src="../img/bigEye"+i+".png";
		babyEye[i].src="../img/babyEye"+i+".png";
	}
	for (var i = 0; i < 20; i++) {
		babyBody[i]=new Image();
		babyBody[i].src="../img/babyFade"+i+".png";
	}
	for (var i = 0; i < 8; i++) {
		momBodyOra[i]=new Image();
		momBodyOra[i].src="../img/bigSwim"+i+".png";
		momBodyBlue[i]=new Image();
		momBodyBlue[i].src="../img/bigSwimBlue"+i+".png";
	}
	for (var i = 0; i < 7; i++) {
		dustPic[i]=new Image();
		dustPic[i].src="../img/dust"+i+".png";
	}
	date=new dateObject();
	wave=new waveObject();
	halo=new haloObj();
	dust=new dustObj();
	dust.init();
	wave.init();
	halo.init();
} 
function gameloop() {
	window.requestAnimFrame(gameloop);
	var now=Date.now();
	deltaTime=now-lastTime;
	lastTime=now;
	drawBackground();	
	ane.draw();
	fruitMonitor();
	fruit.draw();
	ctx1.clearRect(0,0,canwidth,canheight);
	mom.draw();
	baby.draw();
	date.draw();
	wave.draw();
	halo.draw();
	dust.draw();
	momFruitsCollision();
	momBabyCollision();
}
function onMouseMove(e) {
	if(!date.gameOver){
		if(e.offSetX||e.layerX){
			mx=e.offSetX==undefined?e.layerX:e.offSetX;
			my=e.offSetY==undefined?e.layerY:e.offSetY;
		}
	}
}