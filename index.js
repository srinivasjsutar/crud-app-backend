const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello from node js");
});

app.use("/api/products", productRoute);

// Mongodb server running
mongoose
  .connect("mongodb://localhost:27017/hellomaa")
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server running on port number 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });
