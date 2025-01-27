const Category = require("../models/categoryModel");
const constants = require("../config/constants");

// Create Category
exports.createCategory = async (req, res) => {
  try {
    const { name, image, description, taxApplicable, tax, taxType } = req.body;
    const category = new Category({
      name,
      image,
      description,
      taxApplicable,
      tax,
      taxType,
    });
    await category.save();
    res.status(201).json({ message: constants.SUCCESS, category });
  } catch (err) {
    res.status(500).json({ message: constants.ERROR, error: err.message });
  }
};

// Get All Categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: constants.ERROR, error: err.message });
  }
};

// Get Category by ID or Name
exports.getCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id) || await Category.findOne({ name: id });
    if (!category) return res.status(404).json({ message: constants.NOT_FOUND });
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: constants.ERROR, error: err.message });
  }
};


//To update any category
exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, taxApplicable, tax, taxType } = req.body;

    // Find the category by ID and update it
    const category = await Category.findByIdAndUpdate(
      id,
      { name, description, taxApplicable, tax, taxType },
      { new: true } // Returns the updated category
    );

    if (!category) {
      return res.status(404).json({ message: constants.NOT_FOUND });
    }

    res.status(200).json({ message: constants.SUCCESS, category });
  } catch (err) {
    res.status(500).json({ message: constants.ERROR, error: err.message });
  }
};

//To delete any category 
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the category by its ID
    const category = await Category.findByIdAndDelete(id);

    if (!category) {
      return res.status(404).json({ message: constants.NOT_FOUND });
    }

    res.status(200).json({ message: "Category deleted successfully", category });
  } catch (err) {
    res.status(500).json({ message: constants.ERROR, error: err.message });
  }
};

