const path = require("path");

// This will return the directory of the main entry point
module.exports = path.dirname(require.main.filename);
