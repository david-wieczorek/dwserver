const mongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    age: Number,
    datetime: {
      type: Date,
      default: Date.now
    },
    id: {
      type: String,
      getter: function(val) {
        return this._id.toString();
      },
      unique: true
    }
  },
  {
    id: false // disables the creation of the virtual "id" property
  }
);

const Article = mongoose.model("Article", articleSchema);

const postArticle = (req, res) => {
  const myquery = {
    name: req.body.name,
    age: req.body.age
  };
  Article.create(myquery)
    .then(function(data) {
      return res.json(data);
    })
    .catch(function(err) {
      return res.json(err);
    });
};

module.exports = postArticle;
