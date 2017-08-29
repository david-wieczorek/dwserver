var express = require("express");
var router = express.Router();
var config = require("../../config");
var mongoClient = require("mongodb").MongoClient;
var assert = require("assert");

// DB url
var urlDB = config.mongodb.url;

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

// Blog home page route
router.get("/", function(req, res) {
  mongoClient.connect(urlDB, function(err, db) {
    assert.equal(null, err);
    db
      .collection("blog")
      .find()
      .toArray(function(err, result) {
        assert.equal(null, err);
        res.json(result);
        db.close();
      });
  });
});

module.exports = router;
