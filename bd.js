require('dotenv').config();
const mysql = require('mysql2');
// configuracion de mi DB

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DB,
    port: process.env.DB_PORT
});


module.exports = db ;