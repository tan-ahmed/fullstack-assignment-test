const express = require("express");
const { getAllBooks, getBook, getSearchBooks } = require("./controller");
const router = express.Router();

router.get("/suggestions", getAllBooks);
// get single book
router.get("/:id", getBook);
// search books endpoint, still figuring it out!
router.get("/search?title=:title", getSearchBooks);

module.exports = router;
