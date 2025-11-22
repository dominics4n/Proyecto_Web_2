const mysql = require('mysql2');
// configuracion de mi DB
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'node_crud',
    port:'3306'
});


module.exports = db ;