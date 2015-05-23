

var express=require('express');


module.exports=function(){

  var app = express();
  require('express-ws')(app);

  app.use('/static', express.static(__dirname + '/public'));

  app.get('/', function (req, res) {
    res.send('Hello World!');
  });


  app.ws('/echo', function(ws, req) {
    ws.on('message', function(msg) {
      ws.send(""+123+msg);
    });
  });

  var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
  });





};

if(!module.parent){
  module.exports();
}