/**
 * Created by aayusharora on 7/7/18.
 */
const express = require('express');
const app = express();

app.use('/',express.static('public'));
app.get('/add', function(req, res){
    res.send(req.query.todo);

});

app.listen(5000, function(){
    console.log("Application running on port 5000");

})