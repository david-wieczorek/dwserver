const mongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const config = require("./config");

// DB Config
const urlDB = config.mongodburl;
const collectionDB = config.collection;

const getArticles = (req, res) => {
  mongoClient.connect(urlDB, (err, db) => {
    assert.equal(null, err);
    db
      .collection(collectionDB)
      .find()
      .toArray((err, result) => {
        assert.equal(null, err);
        res.json(result);
        db.close();
      });
  });
};

module.exports = getArticles;
