const express = require("express");

const booksController = require("../controller/books");

const router = express.Router();

// Page route
router.get("/", booksController.getHome);

exports.router = router;
