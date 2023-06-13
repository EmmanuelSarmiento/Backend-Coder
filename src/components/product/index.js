const express = require("express");
const productController = require("./productController/productController");

module.exports = (app) => {
  let router = express.Router();
  app.use("/api/product", router);
  app.get("/api/product/:id", productController.findById);
  app.post("/api/product/new", productController.create);
  router.get("/", productController.get);
  router.post("/", productController.create);
};
