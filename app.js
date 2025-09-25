const path = require("path");

const express = require("express");

const bookRouter = require("./routes/routes");
const rootDir = require("./util/path");

const app = express();

app.set("view engine", "ejs");

// to serve static files
app.use(express.static(path.join(rootDir, "public")));

app.use(bookRouter.router);

app.listen(3000);
