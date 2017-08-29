var express = require("express");
var app = express();
var helmet = require("helmet");
var cors = require("cors");
var home = require("./routes/home");
var test = require("./routes/test");
var config = require("./config");
var mongoClient = require("mongodb").MongoClient;

app.use(helmet(), cors());

// Paramètres de connexion
var urlDB = config.mongodb.url;

// Connexion au serveur avec la méthode connect
mongoClient.connect(urlDB, function(err, db) {
  if (err) return console.error("Connection failed", err);
  console.log("Connection successful on ", urlDB);

  // Fermeture de la connexion
  db.close();
});

app.get("/", home.homeTest);
app.get("/test", test.requestTest);

app.listen(config.port, function() {
  console.log("Example app listening on port: " + config.port);
});
