const express = require("express");
const router = express.Router();
const productSchema = require("./ProductSchema");

router.get("/advance", async (req, res) => {
  const { title } = req.query;
  try {
    const product = await productSchema.find({
      title: { $regex: title, $options: "i" },
    });
    res.status(200).send({ products: product });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
