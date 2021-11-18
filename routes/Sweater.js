var express = require('express');
const Sweater_controlers = require("../controllers/Sweater");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Sweater', { title: 'Search Results Sweater' });
});

/* GET Sweater */
router.get("/", Sweater_controlers.Sweater_view_all_Page);

/* GET detail Sweater page */
router.get("/detail", Sweater_controlers.Sweater_view_one_Page);

/* GET create Sweater page */
//router.get("/create", Sweater_controlers.Sweater_create_Page);

/* GET update Sweater page */
//router.get("/update", Sweater_controlers.Sweater_update_Page);

/* GET delete Sweater page */
//router.get("/delete", Sweater_controlers.Sweater_delete_Page);

module.exports = router;
