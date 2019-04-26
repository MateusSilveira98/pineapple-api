const ProductService = require('./Product.service');
const create = async (req, res) => {
  const product = await ProductService.create(req.body);
  return res.json(product);
}
const edit = async (req, res) => {
  const product = await ProductService.edit(req.body);
  return res.json(product);
}
const getById = async (req, res) => {
  const product = await ProductService.getById(req.param.id);
  return res.json(product);
}
const getAll = async (req, res) => {
  const products = await ProductService.getAll();
  return res.json(products);
}
module.exports = {
  create,
  edit,
  getById,  
  getAll
};