const express = require("express");
const mysql = require("mysql2");
const { connection } = require("../database");
const url = "https://www.perlego.com/";

const getAllBooks = (req, res) => {
  try {
    connection.query(
      "SELECT * FROM assessment2",
      function (err, results, fields) {
        res.status(200).json({
          count: 10,
          books: results.map((book) => ({
            id: book.id,
            title: book.Title_DistinctivetitlebookCovertitle_TitleText,
            cover: `${url}${book.Location}${book.Cover_File}`,
            author: book.Contributor1_PersonName,
          })),
        });
      }
    );
  } catch (error) {
    res.status(404).json({
      message: "Books not found",
    });
  }
};

// get single book by id
const getBook = (req, res) => {
  try {
    const { id } = req.params;
    connection.query(
      "SELECT * FROM assessment2 WHERE id = ?",
      [id],
      function (err, results, fields) {
        const book = results[0];
        res.status(200).json({
          id: book.id,
          title: book.Title_DistinctivetitlebookCovertitle_TitleText,
          cover: `${url}${book.Location}${book.Cover_File}`,
          author: book.Contributor1_PersonName,
        });
      }
    );
  } catch (error) {
    res.status(404).json({
      message: "Book not found",
    });
  }
};

// THIS IS WORK IN PROGRESS!
const getSearchBooks = (req, res) => {
  try {
    const { id } = req.params;
    connection.query(
      "SELECT * FROM assessment2 WHERE Title_DistinctivetitlebookCovertitle_TitleText like ?",
      [id],
      function (err, results, fields) {
        const book = results[0];
        res.status(200).json({
          id: book.id,
          title: book.Title_DistinctivetitlebookCovertitle_TitleText,
          cover: `${url}${book.Location}${book.Cover_File}`,
          author: book.Contributor1_PersonName,
        });
      }
    );
  } catch (error) {
    res.status(404).json({
      message: "Book not found",
    });
  }
};

module.exports = {
  getAllBooks,
  getBook,
  getSearchBooks,
};
