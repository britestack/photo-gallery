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
// console.log("pg", pg);
var conString = "postgres://postgres:Plugblue14@ec2-54-183-96-172.us-west-1.compute.amazonaws.com:5432/homesoptimized";

var connection = new pg.Client(conString);
// console.log("connection", connection)

connection.connect()
  .then(() => console.log('Postgres CONNECTED'))
  .catch(() => console.log('Postgres NOT CONNECTED'));

module.exports = connection;
