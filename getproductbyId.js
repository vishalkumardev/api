const express = require("express");
const router = express.Router();
const productSchema = require("./ProductSchema");

router.get("/getproduct/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productSchema.findOne({ id: id });
    res.status(200).send({ products: product });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
