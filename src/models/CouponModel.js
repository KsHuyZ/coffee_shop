const mongoose = require("mongoose") ;
const CouponModel = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    date_from: {
      type: String,
      require: true,
    },
    date_to: {
      type: String,
      require: true,
    },
    code: {
      type: String,
      require: true,
    },
    title_coupon: {
      type: String,
      default: "",
    },
    number_decrement: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);
module.exports= mongoose.model("Coupon", CouponModel);
