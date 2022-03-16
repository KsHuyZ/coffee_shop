const mongoose = require("mongoose") ;
const StaticialModel = mongoose.Schema(
  {
    total_price: {
      type: Number,
      default: 0
    },
    total_number: {
      type: Number,
      default: 0
    },
    date: {
      type: String,
      require: true,
    },
    number_book: {
        type: Object,
        require: true
    }
  },
  { timestamps: true }
);
module.exports= mongoose.model("Staticial", StaticialModel);
