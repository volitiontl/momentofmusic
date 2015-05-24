

state={};
state.player={};
state.player.x=100;
state.player.y=100;
state.score=0;



var speed=0;
var factor=10;
function logic(state,event){
  if(event=="up"){
    speed-=factor;
  }else if(event=="down"){
    speed+=factor;
  }
  else{
    //if(speed>0){
    //  speed-=1;
    //}else if(speed<0){

    speed+=1;
    if(speed>10){
      speed=10;
    }
    if(speed<10){
      speed=-10;
    }
    //}
  }

  state.player.y+=speed;

  if(state.player.y>150){
    state.player.y=150;
  }
  if(state.player.y<0){
    state.player.y=0;
  }

  state.score+=1;
}



