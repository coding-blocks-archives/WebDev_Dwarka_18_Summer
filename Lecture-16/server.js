/**
 * Created by aayusharora on 7/18/18.
 */
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const passport = require('passport');
const passportLocal = require('passport-local');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const db = require('./db.json');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({secret: 'I am not human'}));


app.use(passport.initialize());
app.use(passport.session());

app.use('/', express.static('public'));

app.post('/login', passport.authenticate('local',
    {
        successRedirect: '/success',
        failureRedirect: '/failure'
    }
    ));

passport.use(new passportLocal(function(username, password, done) {

    //logical part
    if(username !== db.username) {
        return done(null, false, {message: 'Username is incorrect'});
    }

    if(password !== db.password) {
        return done(null, false, {message: 'Password is incorrect'});
    }

    return done(null, db.id);

}));

passport.serializeUser(function(id, done) {
    return done(null, id);

});

passport.deserializeUser(function(id, done) {
    if(id === db.id) {
        return done(null, db.username)
    }

});

app.get('/success', function(req, res){
    res.send(req.user);
});

app.get('/failure', function(req,res){
     req.logout();
    res.redirect('/');
});

app.get('/data', function(req,res) {
    if(req.user) {
        res.send("You will get the Password 1234")
    }

    else {
        res.send('Wrong username/password');
    }

});

app.listen(5000, function() {
    console.log("App listening on Port 5000");

});