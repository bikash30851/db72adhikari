var Sweater = require("../models/Sweater");

// List of all Sweater
exports.Sweater_list = async function(req, res) {
   try {
       theSweater = await Sweater.find();
       res.send(theSweater);
    } 
   catch (err) {
      res.status(500);
      res.send(`{"error": ${err}}`);
  }
};

// for a specific Sweater.
exports.Sweater_detail = function (req, res) {
  res.send('NOT IMPLEMENTED: Sweater detail: ' + req.params.id);
};

// Handle Sweater create on POST.
exports.Sweater_create_post = async function (req, res) {
  console.log(req.body)
  let document = new Sweater();
  // We are looking for a body, since POST does not have query parameters.
  // Even though bodies can be in many different formats, we will be picky
  // and require that it be a json object
  // {"size":"lobelias, "color":"blue", "price":35}
  document.size = req.body.size;
  document.color = req.body.color;
  document.price = req.body.price;
  try {
    let result = await document.save();
    res.send(result);
  }
  catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// Handle Sweater delete form on DELETE.
exports.Sweater_delete = function (req, res) {
  res.send("NOT IMPLEMENTED: Sweater delete DELETE " + req.params.id);
};

// Handle Sweater update form on PUT.
exports.Sweater_update_put = function (req, res) {
  res.send("NOT IMPLEMENTED: Sweater update PUT" + req.params.id);
};

// VIEWS
// Handle all view
exports.Sweater_view_all_Page = async function (req, res) {
  try {
    theSweater = await Sweater.find();
    res.render("Sweater", { title: "Sweater Search Results", results: theSweater });
  } 
  catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};