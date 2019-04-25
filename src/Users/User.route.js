const express = require('express');
const routes = express.Router();

const UserController = require('./User.controller');

routes.post('/user/create', UserController.create);
routes.post('/user/login', UserController.login);
routes.put('/user/edit', UserController.edit);

module.exports = routes;