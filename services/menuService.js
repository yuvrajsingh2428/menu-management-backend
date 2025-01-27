const Category = require("../models/Category");
const SubCategory = require("../models/SubCategory");
const Item = require("../models/Item");

// Service to create a category
const createCategory = async (data) => {
  const category = new Category(data);
  return await category.save();
};

// Service to fetch all categories
const getAllCategories = async () => {
  return await Category.find();
};

// Service to create a sub-category
const createSubCategory = async (categoryId, data) => {
  const subCategory = new SubCategory({ ...data, category: categoryId });
  return await subCategory.save();
};

// Service to fetch items by sub-category
const getItemsBySubCategory = async (subCategoryId) => {
  return await Item.find({ subCategory: subCategoryId });
};

// Add other services as needed (edit, delete, search, etc.)
module.exports = {
  createCategory,
  getAllCategories,
  createSubCategory,
  getItemsBySubCategory,
};
