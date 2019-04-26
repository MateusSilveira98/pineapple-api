const ProductModel = require('./Product.model');
const Callbacks = require('../_Helpers/Callbacks');

const create = async (param) => {
  try {
    const product = await ProductModel.findOne({ name: param.name });
    if (product) {
      if (product.deleted) {
        Object.assign(product, param);
        product.deleted = false;
        return await edit(product);
      } else throw 'este produto já existe! :('
    }
    await ProductModel.create(param);
    return Callbacks.callbackHandler('success', 'produto criado com sucesso! :)')
  } catch (error) {
    return Callbacks.callbackHandler('error', error || 'falha ao cadastrar o produto! :(')
  }
}
const edit = async (param) => {
  try {
    const product = param._id ? param : await ProductModel.findById(param.id);

    if (!product) throw 'produto não encontrado! :(';
    if (product.deleted) throw 'este produto foi excluído! :(';

    Object.assign(product, param);

    await product.save();
    const text = param.deleted ? 'exluído' : (param._id ? 'criado' : 'editado');
    return Callbacks.callbackHandler('success', `produto ${text} com sucesso! :)`)
  } catch (error) {
    return Callbacks.callbackHandler('error', error || 'falha ao editar o produto! :(')
  }
}
const getById = async (id) => {
  try {
    const product = await ProductModel.findOne({id, deleted: false});
    if (product.deleted) throw 'este produto foi excluído! :(';
    return product
  } catch(error) {
    return Callbacks.callbackHandler('error', error || 'falha ao buscar o produto! :(')
  }
}
const getAll = async () => {
  try {
    return await ProductModel.find({deleted: false}).sort('name');
  } catch(error) {
    return Callbacks.callbackHandler('error', error || 'falha ao buscar os produtos! :(')
  }
}
module.exports = {
  create,
  edit,
  getById,
  getAll
}