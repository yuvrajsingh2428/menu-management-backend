const SubCategory = require("../models/subCategoryModel");
const Category = require("../models/categoryModel");
const constants = require("../config/constants");

// Create Subcategory
exports.createSubCategory = async (req, res) => {
  try {
    
    const { categoryId } = req.params;

    const { name, image, description, taxApplicable, tax} = req.body;
    const category = await Category.findById(categoryId);
    if (!category) return res.status(404).json({ message: constants.NOT_FOUND });

    const subCategory = new SubCategory({
      name,
      image,
      description,
      taxApplicable: taxApplicable ?? category.taxApplicable,
      tax: tax ?? category.tax,
      category: category._id,
    });
    await subCategory.save();
    res.status(201).json({ message: constants.SUCCESS, subCategory });
  } catch (err) {
    res.status(500).json({ message: constants.ERROR, error: err.message });
  }
};

// Get Subcategories for a Category
exports.getSubCategoriesByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const subCategories = await SubCategory.find({ category: categoryId });
    res.status(200).json(subCategories);
  } catch (err) {
    res.status(500).json({ message: constants.ERROR, error: err.message });
  }
};

// Update Subcategory
exports.updateSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image, description, taxApplicable, tax } = req.body;

    // Find the subcategory by ID and update it
    const subCategory = await SubCategory.findByIdAndUpdate(
      id,
      { name, image, description, taxApplicable, tax },
      { new: true } // Return the updated subcategory
    );

    if (!subCategory) {
      return res.status(404).json({ message: constants.NOT_FOUND });
    }

    res.status(200).json({ message: "Subcategory updated successfully", subCategory });
  } catch (err) {
    res.status(500).json({ message: constants.ERROR, error: err.message });
  }
};

// Delete Subcategory
exports.deleteSubCategory = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the subcategory by its ID
    const subCategory = await SubCategory.findByIdAndDelete(id);

    if (!subCategory) {
      return res.status(404).json({ message: constants.NOT_FOUND });
    }

    res.status(200).json({ message: "Subcategory deleted successfully", subCategory });
  } catch (err) {
    res.status(500).json({ message: constants.ERROR, error: err.message });
  }
};
