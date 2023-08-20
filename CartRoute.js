const Cart = require("./Cart");
const express = require("express");
const router = express.Router();

router.post("/addCart", async (req, res) => {
  try {
    const cart = await Cart.updateOne(
      {
        uid: req.body.uid,
      },
      {
        $push: {
          Products: req.body.id,
        },
      },
      { upsert: true, new: true }
    );

    return res.status(200).send({ message: cart });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
});

router.post("/getCart", async (req, res) => {
  try {
    const cart = await Cart.find({ uid: req.body.uid }).populate("Products");
    return res.status(200).send({ message: cart });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
});

module.exports = router;
