/**
 * Created by aayusharora on 7/15/18.
 */
const express = require('express');
const app = express();

const http = require('http');

const server = http.Server(app);

const socket = require('socket.io');

const io = socket(server);
const messages = [];
const users = []

app.use('/', express.static('public'));

io.on('connection', function(sk){
    // Listener for making Connection
    sk.emit('new', messages);
    sk.on('message', function(data) { // Listener 1
        messages.push(data);
        io.emit('send_all', data); // Emitter 2


    })

    sk.on('name', function(data){

        let connected = {
            name: data,
            id: sk.id
        };

        users.push(connected);

        io.emit('users', users);


    });

    sk.on('disconnect', function(){
        console.log(sk.id);

    })

});


server.listen(8080, function(){


    console.log("Server listening on 8080");


})