const router = require("express").Router();
const BookController = require("../controllers/BookController");

router.get("/", BookController.getAllBook);
router.get("/:id", BookController.getBookbyId);
router.post("/", BookController.createBook);
router.patch("/:id", BookController.editBook);
router.delete("/:id", BookController.deleteBook);

module.exports = router;
