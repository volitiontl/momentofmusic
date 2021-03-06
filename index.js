

var express=require('express');


var temp=require('./src/sync');

module.exports=function(){

  var app = express();
  var expressWs = require('express-ws')(app);

  app.use('/static', express.static(__dirname + '/public'));
  app.use('/adobe', express.static(__dirname + '/adobe'));

  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html')
  });




  temp.setClient(app,expressWs);


  app.get('/tell',function(req,res){
    console.log("telling")
    temp.tellClient("hello hi");
    res.send("hi").status(200)
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