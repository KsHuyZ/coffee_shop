const router = require("express").Router();
const CategoryController = require("../controllers/CategoryController");

router.get("/", CategoryController.getAllCategory);
router.get("/:id", CategoryController.getCategorybyId);
router.post("/", CategoryController.createCategory);
router.patch("/:id", CategoryController.editCategory);
router.delete("/:id", CategoryController.deleteCategory);

module.exports = router;
