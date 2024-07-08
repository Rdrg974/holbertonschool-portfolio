const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const routes = require('./routes');
const socketHandler = require('./routes/socket');
const app = express();
const PORT = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

const server = http.createServer(app);

const io = require('socket.io')(server);
socketHandler(io);

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
