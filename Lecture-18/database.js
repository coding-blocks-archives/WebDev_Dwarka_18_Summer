/**
 * Created by aayusharora on 7/22/18.
 */


const operation = require('./operation');


function connect() {

    operation.connection()
}

function insert(cb) {
   operation.insertMany(function(data) {
      cb(data);

   })

}

function find(cb) {
    operation.find(function(data) {
        cb(data);

    })

}

function update(cb) {
    operation.update(function(data) {
        cb(data);

    });

}


module.exports = {
    connect,insert, find, update
}