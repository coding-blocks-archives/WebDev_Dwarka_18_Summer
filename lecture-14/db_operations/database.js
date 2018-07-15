/**
 * Created by aayusharora on 7/11/18.
 */
var mysql      = require('mysql');
var operations = require('./operations');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'arora',
    password : '1234',
    database : 'todoList'
});


function connectDB() {
   connection.connect();
}

function getData(mb) {
    operations.display(connection, function(data){
        mb(data);

    })
}

function insert(todo, cb) {
    operations.insert(connection, todo, function(err, data){
           cb(err,data);

    })

}

function deleteItem(id, cb) {
    operations.deleteItem(connection, id , function(err){
        cb(err);
    })

}

module.exports = {
    connectDB,
    getData,
    insert,
    deleteItem
};