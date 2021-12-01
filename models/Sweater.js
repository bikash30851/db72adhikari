const mongoose = require("mongoose");
const { SchemaTypes } = require('mongoose');

const SweaterSchema = mongoose.Schema({
size: {type: String, enum: ['Small', 'Large','Medium','Extralarge', 'doublexl'], required: function() { return this.size;}},
color: String,
price: {type: Number, min:[5], max:[500] }})

module.exports = mongoose.model("Sweater", SweaterSchema);