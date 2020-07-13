var express = require('express');
var router = express.Router();

var db = require('../models/connection')

/* GET home page. */
router.get('/', function(req, res, next) {
  db.query('SELECT * from post;')
  .then(function (data) {
    res.json(data);
  })
  .catch(function (error) {
    console.log('ERROR:', error)
    res.json({ posts: "fail" })
  })
});

module.exports = router;
