const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.post("/", categoryController.createCategory);
router.get("/", categoryController.getCategories);
router.get("/:id", categoryController.getCategory);
router.put("/:id", categoryController.updateCategory);  // Add this line for PUT request
router.delete("/:id", categoryController.deleteCategory); // Add DELETE route

module.exports = router;
