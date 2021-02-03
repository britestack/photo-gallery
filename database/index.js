const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Plugblue2',
  database: 'Homes',
});

connection.connect();

module.exports = connection;
