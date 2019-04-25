const express = require('express');
const routes = express.Router();

const UserController = require('./User.controller');

routes.post('/user', UserController.create);
routes.get('/users', UserController.getAll);

module.exports = routes;