var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Sweater', { title: 'Search Results Sweater' });
});

module.exports = router;