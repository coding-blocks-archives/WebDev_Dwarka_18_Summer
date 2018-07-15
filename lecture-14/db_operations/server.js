const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./database');
let index = 0;
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
            // Maintaining Index on Server
            index ++;
            res.send(index.toString());
        }

    });
});

app.post('/delete', function(req,res) {
    db.deleteItem(req.body.id, function(err){
         if(err) throw err;
         else res.sendStatus(200);

    });


});

app.get('/display', function(req,res) {

    db.getData(function(data){
        console.log(data);
        if(data.length) {
            index = data[data.length - 1].id;
            console.log(index);
            res.send(data);
        }
        else {

        }

    });

});


app.listen(5000, function(){
  console.log("Server running on port 5000")
   db.connectDB();

});