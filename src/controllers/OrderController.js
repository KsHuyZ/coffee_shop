const Order = require("../models/OrderModel");
const OrderController = {
  getAllOrder: async (req, res, next) => {
    try {
      const order = await Order.find()
        .populate("id_user")
        .populate("id_book")
        .populate("id_coupon");
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({
        error: error.message,
      });
    }
  },

  getOrderbyId: async (req, res, next) => {
    const order = await Order.findById(req.params.id);
    return res.status(200).json(user);
  },

  createOrder: async (req, res, next) => {
    const { id_user, id_book, type_order, quantity, status } = req.body;
    if (!id_user || !id_book || !type_order || !quantity) {
      return res.status(500).json({
        success: false,
        message: "Please enter all fill",
      });
    } else {
      const order = new Order({
        id_user,
        id_book,
        type_order,
        quantity,
        status,
      });
      order.save();
      return res.status(200).json({ success: true, message: "Create success" });
    }
  },

  editOrder: async (req, res, next) => {
    const { id_user, id_book, type_order, quantity, status } = req.body;
    try {
      const order = await Order.findOneAndUpdate(
        {
          _id: req.params.id,
        },
        {
          id_user,
          id_book,
          type_order,
          quantity,
          status,
        },
        {
          new: true,
        }
      );
      return res
        .status(200)
        .json({ success: true, message: "Update Success!!!?" });
    } catch (error) {
      res.status(500).json(error.message);
    }
  },

  deleteOrder: async (req, res, next) => {
    const id = req.params.id;
    try {
      const order = await Order.findByIdAndDelete(id);
      res.status(200).json({ success: true, message: "Delete success" });
    } catch (error) {
      res.status(500).json(error.message);
    }
  },
};

module.exports = OrderController;
