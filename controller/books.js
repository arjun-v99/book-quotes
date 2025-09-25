const axios = require("axios");

exports.getHome = (req, res, next) => {
  res.render("index", {
    pageTitle: "Home",
    path: "/",
  });
};

exports.getQuoteApi = (req, res, next) => {
  axios
    .get("https://recite.onrender.com/api/v1/random")
    .then((result) => {
      const quoteData = result.data;

      res.json(quoteData);
    })
    .catch((err) => {
      console.log(err);
      res.render("error", {
        pageTitle: "Error !",
        path: "/",
        errorCode: 500,
        errorMessage: "Something went wrong",
      });
    });
};
