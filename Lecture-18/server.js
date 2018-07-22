/**
 * Created by aayusharora on 7/22/18.
 */
const express = require('express');
const app = express();
const database = require('./database');

app.get('/add', function(req,res) {
    database.insert(function(data) {
        res.send(data);

    });


});

app.get('/update', function(req,res) {
    database.update(function(data) {
        res.send(data);

    })

});

app.get('/display', function(req,res) {
    database.find(function(data) {
        res.send(data);

    })

});

app.listen(5000, function(){
    console.log("Server listening on port 5000");
    database.connect();
});
