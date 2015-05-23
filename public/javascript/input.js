(function(){
  var m={};
  var keystatus={};
  var keylist={
    "left":37,
    "right":39,
    "up":38,
    "down":40
  };

  m.onkeydown=function(event){
    keystatus[event.keyCode]=true;
  };

  m.onkeyup=function(event){
    keystatus[event.keyCode]=false;
  };

  m.isKeyDown=function(key){
    var temp=keylist[key]||key;
    return keystatus[temp]||false;
  };

  document.onkeydown= m.onkeydown;
  document.onkeyup= m.onkeyup;

  window.gameinput=m;
})();
