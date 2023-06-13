const productApi = require("../components/product");
const cartApi = require("../components/cart");

module.exports = (app) => {
  productApi(app);
  cartApi(app);
  let htmlBody = `<h1>Bienvenido</h1>`;
  app.get("/", (req, res) => res.send(htmlBody));
};
