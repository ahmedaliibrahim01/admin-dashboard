const mysql = require("mysql2");
const config = require("../config");
const connection = mysql.createConnection(config.db);
connection.connect((err) => {
  if (err) {
    console.log("Connection failed");
    return;
  }
  console.log("Connection successful");
});

module.exports = connection.promise();