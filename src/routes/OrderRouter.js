const router = require("express").Router();
const Order = require("../controllers/OrderController");

router.get("/", Order.getAllOrder);
router.get("/:id", Order.getOrderbyId);
router.post("/", Order.createOrder);
router.patch("/:id", Order.editOrder);
router.delete("/:id", Order.deleteOrder);

module.exports = router;
