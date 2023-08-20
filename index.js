const express = require("express");
const app = express();
const port = 5000;

require("./conn");
app.use(express.json());

app.use(require("./getProductByParm"));
app.use(require("./product"));
app.use(require("./getProduct"));
app.use(require("./getproductbyId"));
app.use(require("./AdvanceSearch"));
app.use(require("./Sorting"));
app.use(require("./flitering"));
app.use(require("./specific"));
app.use(require("./CartRoute"));

app.get("/", (req, res) => {
  res.send("Server start");
});

app.listen(port, () => {
  console.log(`the server is listen on the port ${port}`);
});
