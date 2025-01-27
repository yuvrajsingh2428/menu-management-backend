const mongoose = require("mongoose");

const SubCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  taxApplicable: { type: Boolean, default: undefined }, // inherits from category
  tax: { type: Number, default: undefined }, // inherits from category
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
});

module.exports = mongoose.model("SubCategory", SubCategorySchema);
