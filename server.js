const express = require("express"),
  app = express(),
  router = express.Router(),
  helmet = require("helmet"),
  cors = require("cors"),
  urlencode = require("urlencode"),
  bodyParser = require("body-parser"),
  config = require("./config"),
  articles = require("./routes/articles");

app.use(helmet(), cors(), bodyParser.urlencoded({ extended: true }));

// Articles Route
app.use("/articles", articles);

app.listen(config.port, () => {
  console.log("Example app listening on port: " + config.port);
});
