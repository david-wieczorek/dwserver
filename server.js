const express = require("express"),
  app = express(),
  router = express.Router(),
  helmet = require("helmet"),
  cors = require("cors"),
  urlencode = require("urlencode"),
  bodyParser = require("body-parser"),
  config = require("./config"),
  articles = require("./routes/articles"),
  mongoose = require("mongoose");

app.use(helmet(), cors(), bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
var mongooseConnection = mongoose.connect("mongodb://localhost/dwdb", {
  useMongoClient: true
});
mongooseConnection
  .then(function(db) {
    console.log("connected to " + db.name + " base");
  })
  .catch(function(err) {
    console.error("MongoDB connection error: " + err);
  });

// Articles Route
app.use("/articles", articles);

app.listen(config.port, () => {
  console.log("Example app listening on port: " + config.port);
});
