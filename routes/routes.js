const express = require("express");

const booksController = require("../controller/books");

const router = express.Router();

// Page route
router.get("/", booksController.getHome);

router.get("/api/quotes", booksController.getQuoteApi);

exports.router = router;
