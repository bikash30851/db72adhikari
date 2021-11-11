
var express = require("express");
var router = express.Router();

// Require controller modules.
var api_controller = require("../controllers/api");
var Sweater_controller = require("../controllers/Sweater");

/// API ROUTE ///

// GET resources base.
router.get("/", api_controller.api);

/// Sweater ROUTES ///

// POST request for creating a Sweater.
router.post("/Sweater", Sweater_controller.Sweater_create_post);

// DELETE request to delete Sweater.
router.delete("/Sweater/:id",Sweater_controller.Sweater_delete);

// PUT request to update Sweater.
router.put("/Sweater/:id", Sweater_controller.Sweater_update_put);

// GET request for one Sweater.
router.get("/Sweater/:id", Sweater_controller.Sweater_detail);

// GET request for list of all Sweater items.
router.get("/Sweater", Sweater_controller.Sweater_view_all_Page);

module.exports = router;