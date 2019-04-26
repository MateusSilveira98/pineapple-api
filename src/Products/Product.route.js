const express = require('express');
const routes = express.Router();

const ProductController = require('./Product.controller');

routes.post('/product/create', ProductController.create);
routes.put('/product/edit', ProductController.edit);
routes.get('/product/:id', ProductController.getById);
routes.get('/products', ProductController.getAll);

module.exports = routes;