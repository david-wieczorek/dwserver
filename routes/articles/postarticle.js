const mongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const config = require("./config");

// DB Config
const urlDB = config.mongodburl;
const collectionDB = config.collection;

const postArticle = (req, res) => {
  mongoClient.connect(urlDB, (err, db) => {
    assert.equal(null, err);
    const myquery = {
      name: req.body.name,
      age: req.body.age
    };
    res.send("Article Added");
    db.collection(collectionDB).insertOne(myquery, (err, res) => {
      assert.equal(null, err);
      db.close();
    });
  });
};

module.exports = postArticle;
