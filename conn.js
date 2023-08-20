const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://vishal7859:Vishal4691@cluster0.cnpdj.mongodb.net/E-Commerce?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });
