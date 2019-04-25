const UserModel = require('./User.model');
const Callbacks = require('../_Helpers/Callbacks');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config.json');

const create = async (param) => {
  try {
    param.password = bcrypt.hashSync(param.password, 10);
    if (await UserModel.findOne({ email: param.email })) {
      throw 'Email: "' + param.email + '" já existe!';
    }
    await UserModel.create(param);
    return Callbacks.callbackHandler('success', 'Usuário criado com sucesso! :)')
  } catch (error) {
    return { type: 'error', message: error }
  }
}
const edit = async (param) => {
  try {
    const user = await UserModel.findById(param.id);

    if (!user) throw 'Usuário não encontrado';

    if (param.password) {
      param.password = bcrypt.hashSync(param.password, 10);
    }

    Object.assign(user, param);

    await user.save();
    return Callbacks.callbackHandler('success', 'Usuário editado com sucesso! :)')
  } catch (error) {
    return Callbacks.callbackHandler('error', error || 'Falha ao editar o usuário! :(')
  }
}
const login = async (param) => {
  try {
    const user = await UserModel.findOne({ email: param.email });
    if (user && bcrypt.compareSync(param.password, user.password)) {
      const { password, ...userWithoutHash } = user.toObject();
      const token = jwt.sign({ sub: user.id }, config.secret);
      return {
        ...userWithoutHash,
        token
      };
    } else {
      throw 'email ou senha inválidos! :('
    }
  } catch (error) {
    return Callbacks.callbackHandler('error', error)
  }
}
const getById = async (id) => {
  return await UserModel.findById(id).select('-password');
}
module.exports = {
  create,
  edit,
  login,
  getById
}