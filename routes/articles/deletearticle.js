const mongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const config = require("../../config");

// DB Config
const urlDB = config.mongodburl;
const collectionDB = config.collection;

const deleteArticle = (req, res) => {
  mongoClient.connect(urlDB, (err, db) => {
    assert.equal(null, err);
    const myquery = {
      name: req.body.name
    };
    res.send("Article Deleted");
    db.collection(collectionDB).deleteOne(myquery, (err, obj) => {
      assert.equal(null, err);
      db.close();
    });
  });
};

module.exports = deleteArticle;
