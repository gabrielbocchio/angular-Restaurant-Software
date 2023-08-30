/* password: McBXtNvm3NDlfNbW */
/* product: bocchiogabriel  */
/* link: mongodb+srv://bocchiogabriel:McBXtNvm3NDlfNbW@cluster0.khldil6.mongodb.net/?retryWrites=true&w=majority */

//importaciones
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/productModel");

//para usar el insomnia que le cargo la data en json
app.use(express.json());
//para usar el insomnia que le cargo la data en form
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.send("holeeeeeee");
});

app.post("/product", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404);
    }
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404);
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);
  }
});

mongoose
  .connect(
    "mongodb+srv://bocchiogabriel:McBXtNvm3NDlfNbW@cluster0.khldil6.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(3000, (req, res) => {
      console.log("server runing");
    });

    console.log("conected to mongodb");
  })
  .catch((er) => {
    console.log(er);
  });
