// Check if a string is empty
const isEmpty = (value) => {
    return value === undefined || value === null || value.trim().length === 0;
  };
  
  // Validate category data
  const validateCategoryData = (data) => {
    const errors = [];
    if (isEmpty(data.name)) errors.push("Category name is required.");
    if (isEmpty(data.description)) errors.push("Description is required.");
    return errors;
  };
  
  // Validate sub-category data
  const validateSubCategoryData = (data) => {
    const errors = [];
    if (isEmpty(data.name)) errors.push("Sub-category name is required.");
    return errors;
  };
  
  // Validate item data
  const validateItemData = (data) => {
    const errors = [];
    if (isEmpty(data.name)) errors.push("Item name is required.");
    if (data.baseAmount === undefined || data.baseAmount <= 0)
      errors.push("Base amount must be a positive number.");
    if (data.discount < 0) errors.push("Discount cannot be negative.");
    return errors;
  };
  
  module.exports = {
    isEmpty,
    validateCategoryData,
    validateSubCategoryData,
    validateItemData,
  };
  