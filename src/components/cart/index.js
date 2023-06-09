const { Router } = require("express");

module.exports = (app) => {
  let router = new Router();
  app.use("/api/cart", router);
  router.get("/", (req, res) => res.send("Todo bien desde cart get"));
  router.post("/", (req, res) => res.send("Todo bien desde cart post"));
};
