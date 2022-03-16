const mongoose = require("mongoose"),
  Schema = mongoose.Schema;
const OrderModel = mongoose.Schema(
  {
    id_user: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: "UserModel",
    },
    id_book: {
      type: String,
      require: true,
      ref: "Book",
    },
    id_coupon: {
      type: String,
      require: true,
      ref: "Coupon",
    },
    type_order: {
      type: String,
      require: true,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: "Waiting...",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Order", OrderModel);
