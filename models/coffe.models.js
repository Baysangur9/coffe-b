const mongoose = require("mongoose");

const coffeSchema = mongoose.Schema({
  name: String,
  price: Number,
  inStock: Boolean,
  conCaff: Boolean,
  volume: String,
  description: String,
});
const Coffe = mongoose.model("coffe", coffeSchema);

module.exports = Coffe;

