const express = require('express'),
  app = express(),
  router = express.Router(),
  helmet = require('helmet'),
  cors = require('cors'),
  urlencode = require('urlencode'),
  bodyParser = require('body-parser'),
  config = require('./config'),
  articles = require('./routes/articles'),
  mongoose = require('mongoose'),
  redis = require('redis'),
  redisClient = redis.createClient({ host: 'localhost', port: 6379 });

redisClient.on('ready', function() {
  console.log('Redis is ready');
});

redisClient.on('error', function() {
  console.log('Error in Redis');
});

//redisClient.set('language', 'nodejs');

redisClient.get('language', function(err, reply) {
  if (err) {
    console.log(err);
  } else {
    console.log(reply);
  }
});

app.use(helmet(), cors(), bodyParser.urlencoded({ extended: true }));

// Mongoose Promise
mongoose.Promise = global.Promise;
var mongooseConnection = mongoose.connect('mongodb://localhost/dwdb', {
  useMongoClient: true
});
mongooseConnection
  .then(function(db) {
    console.log('connected to ' + db.name + ' base');
  })
  .catch(function(err) {
    console.error('MongoDB connection error: ' + err);
  });

// Articles Route
app.use('/articles', articles);

app.listen(config.port, () => {
  console.log('Example app listening on port: ' + config.port);
});
