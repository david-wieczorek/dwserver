var express = require('express');
var app = express();
var helmet = require('helmet');
var cors = require('cors');
var home = require('./routes/home');
var test = require('./routes/test');
var config = require('./config');

app.use(helmet(), cors());

app.get('/', home.homeTest);
app.get('/test', test.requestTest);

app.listen(config.port, function () {
  console.log('Example app listening on port: ' + config.port);
});
