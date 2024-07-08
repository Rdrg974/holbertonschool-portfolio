const socketIo = require('socket.io');

let socketsConnected = new Set();

function onConnected(socket) {
    console.log(socket.id);
    socketsConnected.add(socket.id);

    socket.on('disconnect', () => {
        console.log('Socket disconnected', socket.id);
        socketsConnected.delete(socket.id);
    });

    socket.on('message', (data) => {
        console.log(data);
        socket.broadcast.emit('chat-message', data);
    });

    socket.on('feedback', (data) => {
        socket.broadcast.emit('feedback', data);
    });
}

module.exports = (io) => {
    io.on('connection', onConnected);
}
