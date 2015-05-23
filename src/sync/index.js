var status = 0;


var m = {};


var client;

m.setClient = function (app, expressWs) {
  app.ws('/echo', function (ws, req) {
    ws.on('message', function (msg) {
      ws.send("" + status + msg);
    });
    ws.on('close', function close() {
      console.log('disconnected');
    });
  });

  client = expressWs.getWss('/echo');

};

m.tellClient = function (message) {
  if (client) {
    client.clients.forEach(function (client) {
      client.send(message);
    });
  } else {
    throw new Error("didn't set client")
  }
};





module.exports = m;