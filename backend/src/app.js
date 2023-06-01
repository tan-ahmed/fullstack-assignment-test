const express = require("express");
const cors = require("cors");
const booksRouter = require("./books/routes");

const app = express();
app.use(cors());
app.use("/books", booksRouter);

module.exports = app;
