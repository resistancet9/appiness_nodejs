const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product = new Schema({
  name: { type: String },
  desc: { type: String },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }
});

const model = mongoose.model("product", Product);

module.exports = model;