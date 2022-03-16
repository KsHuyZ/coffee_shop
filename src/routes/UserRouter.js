const router = require("express").Router();
const User = require("../controllers/UserController");

router.get("/", User.getAllUser);
router.get("/:id", User.getUserbyId);
router.post("/register", User.register);
router.post('/login',User.login)
router.patch("/:id", User.editUser);
router.delete("/:id", User.deleteUser);

module.exports = router;
