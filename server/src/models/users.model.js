const mongoose = require("mongoose");
const userModel = mongoose.Schema(
  {
    first_name: {
      type: String,
      require: [true, "Please enter name"],
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("user", userModel);
