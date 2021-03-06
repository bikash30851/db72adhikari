var Sweater = require("../models/Sweater");

// List of all Sweater
exports.Sweater_list = async function(req, res) {
  res.send("NOT IMPLEMENTED: Sweater list");
};
 
// // for a specific Sweater.
// exports.restaurant_detail = function (req, res) {
//   res.send("NOT IMPLEMENTED: Sweater detail: " + req.params.id);
// };

exports.Sweater_detail = async function (req, res) {
  console.log("detail" + req.params.id);
  try {
    result = await Sweater.findById(req.params.id);
    console.log(result);
    res.send(result);
  } catch (error) {
    res.status(500);
    res.send(`{"error": document for id ${req.params.id} not found`);
  }
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
exports.Sweater_delete = async function(req, res) {
  console.log("delete " + req.params.id)
  try {
  result = await Sweater.findByIdAndDelete( req.params.id)
  console.log("Removed " + result)
  res.send(result)
  } catch (err) {
  res.status(500)
  res.send(`{"error": Error deleting ${err}}`);
  }
  };
// Handle Sweater update form on PUT.
exports.Sweater_update_put = async function (req, res) {
  console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`);
  try {
    let toUpdate = await Sweater.findById(req.params.id);
    
    // Do updates of properties
    if (req.body.size)
      toUpdate.size = req.body.size;
    if (req.body.color) toUpdate.color = req.body.color;
    if (req.body.price) toUpdate.price = req.body.price;
    let result = await toUpdate.save();
    console.log("Sucess " + result);
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
  }
};

// List of all Sweater
exports.Sweater_list = async function (req, res) {
  try {
    theSweater = await Sweater.find();
    res.send(theSweater);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
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

// Handle a show one view with id specified by query
exports.Sweater_view_one_Page = async function(req, res) {
  console.log("single view for id " + req.query.id)
  try{
  result = await Sweater.findById( req.query.id)
  res.render('Sweaterdetail',
  { title: 'Sweater Detail', toShow: result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
  };

    // Handle building the view for creating a Sweater.
  // No body, no in path parameter, no query.
  // Does not need to be async
  exports.Sweater_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('Sweatercreate', { title: 'Sweater Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for updating a Sweater.
// query provides the id
exports.Sweater_update_Page = async function(req, res) {
  console.log("update view for item "+req.query.id)
  try{
  let result = await Sweater.findById(req.query.id)
  res.render('Sweaterupdate', { title: 'Sweater Update', toShow: result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
  };

    // Handle a delete one view with id from query
exports.Sweater_delete_Page = async function(req, res) {
  console.log("Delete view for id " + req.query.id)
  try{
  result = await Sweater.findById(req.query.id)
  res.render('Sweaterdelete', { title: 'Sweater Delete', toShow:
  result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
  };