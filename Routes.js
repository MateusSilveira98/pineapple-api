const express = require('express');
const routes = express.Router();
const UserRoutes = require('./src/Users/User.route');
const ProductRoutes = require('./src/Products/Product.route');

routes.use(UserRoutes);
routes.use(ProductRoutes);

module.exports = routes;