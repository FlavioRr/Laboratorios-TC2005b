const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'prueba num 1',
    user: 'root',
    database: 'tc2005b',
    password: ''
});

module.exports = pool.promise();