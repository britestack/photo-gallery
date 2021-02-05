// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Plugblue2',
//   database: 'Homes',
// });

// connection.connect();

// module.exports = connection;
var pg = require('pg');
console.log("pg", pg);
var conString = "postgres://douglasperez@localhost:5432/HomesOptimized";

var connection = new pg.Client(conString);
// console.log("connection", connection)

connection.connect()
  .then(() => console.log('Postgres CONNECTED'))
  .catch(() => console.log('Postgres NOT CONNECTED'));

module.exports = connection;
