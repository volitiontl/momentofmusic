(function(){

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

  window.ws=m;
})();














