const Item = require("../models/itemModel");
const SubCategory = require("../models/subCategoryModel");
const Category = require("../models/categoryModel");
const constants = require("../config/constants");

// Create Item
exports.createItem = async (req, res) => {
  try {
    const { name, image, description, taxApplicable, tax, baseAmount, discount, subCategoryId, categoryId } = req.body;
    const subCategory = subCategoryId ? await SubCategory.findById(subCategoryId) : null;
    const category = await Category.findById(categoryId);
    if (!category) return res.status(404).json({ message: constants.NOT_FOUND });

    const totalAmount = baseAmount - discount;

    const item = new Item({
      name,
      image,
      description,
      taxApplicable,
      tax,
      baseAmount,
      discount,
      totalAmount,
      subCategory: subCategory ? subCategory._id : null,
      category: category._id,
    });
    await item.save();
    res.status(201).json({ message: constants.SUCCESS, item });
  } catch (err) {
    res.status(500).json({ message: constants.ERROR, error: err.message });
  }
};

// Get Items by Category or Subcategory
exports.getItems = async (req, res) => {
  try {
    const { categoryId, subCategoryId } = req.params;
    let items = [];
    if (subCategoryId) {
      items = await Item.find({ subCategory: subCategoryId });
    } else if (categoryId) {
      items = await Item.find({ category: categoryId });
    } else {
      items = await Item.find();
    }
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: constants.ERROR, error: err.message });
  }
};

// Search Item by Name
exports.searchItemByName = async (req, res) => {
  try {
    const { name } = req.query;
    const items = await Item.find({ name: { $regex: name, $options: "i" } });
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: constants.ERROR, error: err.message });
  }
};


exports.updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image, description, taxApplicable, tax, baseAmount, discount, subCategoryId, categoryId } = req.body;

    // Log request parameters for debugging
    console.log({ id, body: req.body });

    // Validate category and subcategory
    let subCategory = null;
    if (subCategoryId) {
      subCategory = await SubCategory.findById(subCategoryId);
      if (!subCategory) {
        return res.status(404).json({ message: "Sub-category not found" });
      }
    }

    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const totalAmount = baseAmount ? baseAmount - discount : undefined;

    // Update item
    const item = await Item.findByIdAndUpdate(
      id,
      {
        name,
        image,
        description,
        taxApplicable,
        tax,
        baseAmount,
        discount,
        totalAmount,
        subCategory: subCategory ? subCategory._id : null,
        category: category._id,
      },
      { new: true } // Return the updated item
    );

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({ message: "Item updated successfully", item });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "An error occurred", error: err.message });
  }
};


// Delete Item
exports.deleteItem = async (req, res) => {
  try {
    const { id } = req.params;

    // Find and delete the item by its ID
    const item = await Item.findByIdAndDelete(id);

    if (!item) {
      return res.status(404).json({ message: constants.NOT_FOUND });
    }

    res.status(200).json({ message: "Item deleted successfully", item });
  } catch (err) {
    res.status(500).json({ message: constants.ERROR, error: err.message });
  }
};
