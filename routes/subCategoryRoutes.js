const express = require("express");
const router = express.Router();
const subCategoryController = require("../controllers/subCategoryController");

router.post("/:categoryId", subCategoryController.createSubCategory);
router.get("/:categoryId", subCategoryController.getSubCategoriesByCategory);
router.put("/:id", subCategoryController.updateSubCategory);  // Add PUT route
router.delete("/:id", subCategoryController.deleteSubCategory);  // Add DELETE route

module.exports = router;
