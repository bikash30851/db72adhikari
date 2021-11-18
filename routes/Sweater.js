var express = require('express');
const Sweater_controlers = require("../controllers/Sweater");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Sweater', { title: 'Search Results Sweater' });
});

/* GET Sweater */
router.get("/", Sweater_controlers.Sweater_view_all_Page);

module.exports = router;
