/**
 * Created by aayusharora on 7/15/18.
 */
$(document).ready(function(){
    let btn = $('#btn');
    let inp = $('#inp');
    let result = $('#result');

    var socket = io(); // Emitter For making Connection

    btn.click(function(){
        let value = inp.val();
        socket.emit('message', value); // Emitter 1
    });

    socket.on('send_all', function(data) { // Listener 2
        result.append(`<li>${data}</li>`)

    })
});
