const express = require('express');
const app = express();
const bodyParser = require('body-parser');

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


app.listen(5000, function(){
  console.log("Server running on port 5000")

});