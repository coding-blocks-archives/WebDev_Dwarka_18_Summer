/**
 * Created by aayusharora on 7/15/18.
 */
const express = require('express');
const app = express();

const http = require('http');

const server = http.Server(app);

const socket = require('socket.io');

const io = socket(server);

app.use('/', express.static('public'));

io.on('connection', function(sk){ // Listener for making Connection
    sk.on('message', function(data) { // Listener 1

        sk.broadcast.emit('send_all', data); // Emitter 2


    })

});

server.listen(8080, function(){


    console.log("Server listening on 8080");


})