var cached = {};
var cached2 = {};

function output(state) {
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
