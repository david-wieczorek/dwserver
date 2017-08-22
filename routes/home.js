const axios = require('axios');

exports.homeTest = function(req, res) {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts`)
    .then(function(response) {
      res.json(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
};
