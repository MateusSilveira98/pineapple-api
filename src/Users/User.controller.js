const UserService = require('./User.service');

const create = async (req, res) => {
  const user = await UserService.create(req.body);
  return res.json(user);
}
const edit = async (req, res) => {
  const user = await UserService.edit(req.body);
  return res.json(user);
}
const login = async (req, res) => {
  const user = await UserService.login(req.body);
  return res.json(user);
}
module.exports = {
  create,
  edit,
  login
};