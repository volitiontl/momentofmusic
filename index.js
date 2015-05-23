

var express=require('express');


var temp=require('./src/sync');

module.exports=function(){

  var app = express();
  var expressWs = require('express-ws')(app);

  app.use('/static', express.static(__dirname + '/public'));

  app.get('/', function (req, res) {
    res.send('Hello World!');

  });




  app.ws('/echo', function(ws, req) {
    ws.on('message', function(msg) {
      ws.send(""+temp.getstatus()+msg);
    });
    ws.on('close', function close() {
      console.log('disconnected');
    });

  });


  var aWss = expressWs.getWss('/echo');



  setInterval(function () {
    aWss.clients.forEach(function (client) {
      client.send('hello');
    });
  }, 500);

  var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
  });





};

if(!module.parent){
  module.exports();
}