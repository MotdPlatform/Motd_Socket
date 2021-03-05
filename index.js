var Server = require('socket.io');
var io = new Server(5326);
io.on('connection', function (socket) {
  socket.emit('msg', {
    hi: 'Hello,MOTD'
  });
  socket.on('msg', function (data) {
    console.log(data);
  });
});
