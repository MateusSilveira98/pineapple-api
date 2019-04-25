const UserModel = require('./User.model');

module.exports = {
    async create(user) {
        const result = await UserModel.create(user);
        return result.id ? 
            {user: result.name, messageClass: 'success', message: 'Usuário criado com sucesso! :)'}
            : {messageClass: 'danger', message: 'Falha ao cadastrar um usuário'}
    }
}