

var express=require('express');


var temp=require('./src/sync');

module.exports=function(){

  var app = express();
  var expressWs = require('express-ws')(app);

  app.use('/static', express.static(__dirname + '/public'));
  app.use('/adobe', express.static(__dirname + '/adobe'));

  app.get('/', function (req, res) {
    res.send('Hello World!');
  });




  temp.setClient(app,expressWs);





  setInterval(function () {
    temp.tellClient("hello hi");
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