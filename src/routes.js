const express = require('express');
const routes = express.Router();
const UserRoute = require('./Users/User.route');

routes.use(UserRoute);

module.exports = routes;