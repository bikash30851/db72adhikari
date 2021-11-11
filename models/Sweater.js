const mongoose = require("mongoose");
const { SchemaTypes } = require('mongoose');

const SweaterSchema = mongoose.Schema({
size: String,
color: String,
price: Number
})

module.exports = mongoose.model("Sweater", SweaterSchema);