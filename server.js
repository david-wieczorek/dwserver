var express = require("express");
var app = express();
var helmet = require("helmet");
var cors = require("cors");
var blog = require("./routes/blog");
var config = require("./config");

app.use(helmet(), cors());

// Blog Route
app.use("/blog", blog);

app.listen(config.port, function() {
  console.log("Example app listening on port: " + config.port);
});

/*db.createCollection("blog", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
  var myobj = { name: "Davidou", age: 59 };
  db.collection("blog").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
  db.collection("blog").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
var myquery = { name: "David" };
  db.collection("blog").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });*/
