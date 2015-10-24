//f判断大鱼与果实的距离
function momFruitsCollision(){
	if(!date.gameOver){
		for(var i=0;i<fruit.num;i++){
			if(fruit.alive[i]){
				//calculate length
				 	var l=calLength2(fruit.x[i],fruit.y[i], mom.x, mom.y);
				 	if(l<900){
				 		//fruit eat
				 		fruit.dead(i);
				 		date.fruitNum++;
				 		mom.momBodyCount++;
				 		if(mom.momBodyCount>7){
				 			mom.momBodyCount=7;
				 		}
				 		if(fruit.fruitType[i]=="blue"){//blue
	                        date.double=2;			 			
				 		}
				 		wave.born(fruit.x[i],fruit.y[i]);
				 	}
			}
		}
	}
}
//mom and baby collision
function momBabyCollision() {
	  if(date.fruitNum>0&&!date.gameOver){
			var l=calLength2(mom.x, mom.y,baby.x, baby.y);
			if(l<900){
				baby.babyBodyCount=0;
				mom.momBodyCount=0;
				//update score
				date.addScore();
				halo.born(baby.x,baby.y);
			}
	     }
	};