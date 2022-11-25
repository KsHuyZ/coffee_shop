const router = require("express").Router();
const userCtrl = require("../controllers/users.controller");
/* GET users listing. */
router.get("/", userCtrl.create);

module.exports = router;
