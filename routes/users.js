var express = require('express');
var router = express.Router();

var db = require('../models/connection')

/* GET home page. */
router.get('/', function(req, res, next) {
  db.query('SELECT * from post;')
  .then(function (data) {
    console.log('DATA:', data[0].author)
    res.json({ author: data[0].author });
  })
  .catch(function (error) {
    console.log('ERROR:', error)
  })
});

module.exports = router;
