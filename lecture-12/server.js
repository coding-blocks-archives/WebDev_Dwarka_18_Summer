const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var todoList = [];
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
    todoList.push(req.body.todo);
    res.send(req.body.todo);
});

app.post('/delete', function(req,res) {
    todoList.splice(req.body.id, 1);
    res.sendStatus(200);
});

app.get('/display', function(req,res) {
    res.send(todoList);
});


app.listen(5000, function(){
  console.log("Server running on port 5000")

});