const express = require("express");
const router = express.Router();

const getArticles = require("./getarticles");
const postArticle = require("./postarticle");
const deleteArticle = require("./deletearticle");

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

// Get articles
router.get("/", getArticles);

// Post article
router.post("/", postArticle);

// Delete article
router.delete("/", deleteArticle);

module.exports = router;

/*db.createCollection("blog", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
*/
