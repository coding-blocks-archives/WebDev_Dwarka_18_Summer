/**
 * Created by aayusharora on 7/15/18.
 */
$(document).ready(function(){
    let btn = $('#btn');
    let inp = $('#inp');
    let result = $('#result');
    let chatters = $('#chatters');

    var socket = io(); // Emitter For making Connection
    var name = prompt("What is your name ?");
    socket.emit("name", name);

    btn.click(function(){
        let value = inp.val();
        socket.emit('message', value); // Emitter 1
    });

    socket.on('send_all', function(data) { // Listener 2
        result.append(`<li>${data}</li>`)

    })

    socket.on('new', function(data) {

        display(data);


    })

    socket.on('users', function(data) {
        console.log(data);
        chatters.text('');
        data.forEach((i)=> {
            chatters.append(`<li>${i.name}</li>`)

        })

    });

    function display(data) {
        data.forEach((i)=> {
            result.append(`<li>${i}</li>`)

        });

    }

});
