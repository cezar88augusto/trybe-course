const mysql = require('mysql2/promise');

// createPool: criar um conexão e mantê-la ativa.
const connection = mysql.createPool({
    user: 'root',
    password: '1234',
    host: 'localhost',
    database: 'model_example'
});

module.exports = connection;