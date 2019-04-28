const express = require('express');
const routes = express.Router();
const UserRoutes = require('./Users/User.route');
const ProductRoutes = require('./Products/Product.route');

routes.use(UserRoutes);
routes.use(ProductRoutes);
routes.get('/', (req, res) => {
    res.json('Pineapple API WORK! :)');
});
module.exports = routes;