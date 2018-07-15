/**
 * Created by aayusharora on 7/14/18.
 */


function display(connection, cb) {
    connection.query('SELECT * FROM TASK', function (error, results, fields) {
        if (error) throw error;
        cb(results);
    });

}

function insert(connection, todo, cb) {
    connection.query(`Insert into task (name, done) Values ('${todo}','1')`, function (error, results) {
        cb(error, results);
    });

}

function deleteItem(connection, id, cb) {
    connection.query(`DELETE FROM Task WHERE ID = ${id}`, function (error, results) {
        cb(error, results);
    });

}
module.exports = {
    display,
    insert,
    deleteItem
}