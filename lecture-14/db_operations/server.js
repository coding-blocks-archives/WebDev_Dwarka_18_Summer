const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./database');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/credentials', function(req,res) {
    res.send(req.query);
});

app.post('/postCredentials', function(req,res){
    res.send(req.body);

});

app.get('/getCall', function(req,res) {
   res.send(req.query);

});

app.post('/add', function(req,res) {
    if(typeof (req.body.todo) != "string" ) {
        res.sendStatus(500);
    }

    db.insert(req.body.todo, function(err, data) {
        if(err) {
            throw err;
        }
        else {
            console.log(data);
            res.sendStatus(200);
        }

    });
});

app.post('/delete', function(req,res) {
    //todoList.splice(req.body.id, 1);
    res.sendStatus(200);
});

app.get('/display', function(req,res) {

    db.getData(function(data){
        console.log(data);
        res.send(data);
    });

});


app.listen(5000, function(){
  console.log("Server running on port 5000")
   db.connectDB();
});