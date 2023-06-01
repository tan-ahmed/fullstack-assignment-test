const express = require("express");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "database",
  user: "perlego",
  password: "perlego",
  database: "perlego",
});

module.exports = {
  connection,
};
