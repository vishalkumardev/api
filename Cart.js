const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
  },
  Products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PRODUCTS",
    },
  ],
});

module.exports = new mongoose.model("CART", cartSchema);
