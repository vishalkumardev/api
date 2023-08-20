const express = require("express");
const router = express.Router();
const productSchema = require("./ProductSchema");

router.get("/specific", async (req, res) => {
  try {
    const products = await productSchema.find({}).select(req.query);
    res.status(200).send({ products: products });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
