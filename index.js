const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Chat message
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });
        // User connection notification
        console.log('a user connected');
        socket.on('disconnect', () => {
        console.log('user disconnected');
        });
  });

http.listen(3000, () => {
  console.log('listening on *:3000');
});