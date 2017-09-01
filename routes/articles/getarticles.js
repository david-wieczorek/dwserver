const mongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    name: String,
    age: Number
  },
  {
    collection: "articles"
  }
);

const Articles = mongoose.model("Articles", articleSchema);

const getArticles = (req, res) => {
  Articles.find()
    .then(function(data) {
      return res.json(data);
    })
    .catch(function(err) {
      return res.json(err);
    });
};

module.exports = getArticles;
