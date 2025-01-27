const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

//
router.get("/search", itemController.searchItemByName);
router.get("/:categoryId?", itemController.getItems);

router.post("/", itemController.createItem);    
router.put("/:id", itemController.updateItem);  
router.delete("/:id", itemController.deleteItem); 

module.exports = router;
