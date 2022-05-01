var mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "180300",
  database: "vnvc",
});
connection.connect((err) => {
  if (err) throw err;
  console.log("Mysql_Connected!");
});
module.exports = connection;
