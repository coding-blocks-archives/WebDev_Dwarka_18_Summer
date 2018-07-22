/**
 * Created by aayusharora on 7/22/18.
 */
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';

const dbName = 'shoppingCart';
let db;
let shopping;

function connection() {
    MongoClient.connect(url, function(err, client) {
        console.log("Connected successfully to server");
         db = client.db(dbName);
         shopping = db.collection('shopping');
    });

}

function insertMany(cb) {


   shopping.insertMany(
       [
           {a:1}, {b:2}, {c: {a: {b:3}}}, {c:6}
       ],

       function(err, result) {
           cb(result);
           console.log(result);

       }
   )

}

function find(cb) {
    shopping.find({}).toArray(function(err, result) {
        cb(result);

    })

}

function update(cb) {
   shopping.updateOne({a:1},
       {$set: {a:5} }, function(err, result) {

          cb(result)
       }
   )

}

module.exports = {
    connection,
    insertMany,
    find,
    update
}