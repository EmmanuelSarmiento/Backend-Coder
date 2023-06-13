const { Router } = require("express");
const productController = require("./productController/productController");

module.exports = (app) => {
  let router = new Router();
  app.use("/api/product", router);
  app.get("/api/product/:id", productController.findById);
  router.get("/", productController.get);
  router.post("/", productController.create);
};
