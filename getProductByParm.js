const express = require("express");
const router = express.Router();
const productSchema = require("./ProductSchema");

router.get("/search", async (req, res) => {
  console.log(req.query);
  try {
    const product = await productSchema.find(req.query);
    res.status(200).send({ products: product });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
