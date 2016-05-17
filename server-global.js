var app = require('express')()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

server.listen( 80 );

app.get('/', function (req, res) {
  res.sendfile(__dirname + 'simulaSensore.html');
});

io.set('log level', 1);


/*io.sockets.on('connection', function (socket) {
  socket.on('ferret', function (name, fn) {
    fn('woot');
  });*/