const express = require("express");
const router = express.Router();
const productSchema = require("./ProductSchema");

router.post("/product", async (req, res) => {
  const { id, title, price, description, category, image, rating } = req.body;
  try {
    const Product = new productSchema({
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
    });
    const ProductSave = await Product.save();

    if (ProductSave) {
      res.status(200).send({ message: "Product Added" });
    } else {
      res.status(400).send({ message: "Something went wrong" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
