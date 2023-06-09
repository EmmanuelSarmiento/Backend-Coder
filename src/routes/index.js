const productApi = require("../components/product");
const cartApi = require("../components/cart");

module.exports = (app) => {
  productApi(app);
  cartApi(app);
  app.get("/", (req, res) => res.send("Bienvenido"));
};
