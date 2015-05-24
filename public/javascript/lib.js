function initGameInput() {
  var m = {};
  var keystatus = {};
  var keylist = {
    "left": 37,
    "right": 39,
    "up": 38,
    "down": 40
  };

  m.onkeydown = function (event) {
    keystatus[event.keyCode] = true;
  };

  m.onkeyup = function (event) {
    keystatus[event.keyCode] = false;
  };

  m.isKeyDown = function (key) {
    var temp = keylist[key] || key;
    return keystatus[temp] || false;
  };
  document.onkeydown = m.onkeydown;
  document.onkeyup = m.onkeyup;
  return m;
}


function initGameOutput() {
  var cached = {};
  var cached2 = {};
  return function (state) {
    state.forEach(function (obj) {
      var temp = {};
      if (cached[obj.id]) {
        temp.obj = cached[obj.id].obj;
        temp.obj.x = obj.x;
        temp.obj.y = obj.y;
        cached2[obj.id] = temp;

      } else {
        temp.obj = new lib[obj.thetype];
        temp.obj.x = obj.x;
        temp.obj.y = obj.y;
        stage.addChild(temp.obj)
        cached2[obj.id] = temp;
      }
    });

    for (xxx in cached) {
      if (!(cached2[xxx])) {
        stage.removeChild(cached[xxx].obj)
      }
    }
    cached = cached2;
    cached2 = {};
  }
}


function initWs(){

  var wsUri = "ws://localhost:3000/echo";

  var websocket,init=false;
  var m={};
  m.init=function(url,onopen,onclose,onmessage,onerror) {
    websocket = new WebSocket(url);
    websocket.onopen = onopen;
    websocket.onclose = onclose;
    websocket.onmessage = onmessage;
    websocket.onerror = onerror;
    init=true;
  };

  m.send=function(message){
    if(init){
      websocket.send(message);
    }else{
      console.log("call init first");
    }

  };
  return ws;
}




function get(url){


}
