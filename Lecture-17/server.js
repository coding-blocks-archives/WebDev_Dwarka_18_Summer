/**
 * Created by aayusharora on 7/21/18.
 */

const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,"templating"));


app.get('/all', function(req,res) {
    res.render('index', {todo:{
        title: "My First Blog Post!",
        author: {
            id: 47,
            name: "Yehuda Katz",
            title: "author title"
        },
        body: "My first post. Wheeeee!"
    }
    });

});

app.listen(5000, function(){
  console.log("App running on port 5000");
});