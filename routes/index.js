const router = require('express').Router();
const home = require('./home');

router.get('/', (req, res) =>
  res.send('home')
);
