const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  taxApplicable: { type: Boolean, required: true },
  tax: { type: Number, required: true },
  baseAmount: { type: Number, required: true },
  discount: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  subCategory: { type: mongoose.Schema.Types.ObjectId, ref: "SubCategory" },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

module.exports = mongoose.model("Item", ItemSchema);
