const UserService = require('./User.service');

module.exports = {
    async create(req, res) {
        const user = await UserService.create(req.body);
        return res.json(user);
    },
    async getAll(req, res) {
        const user = await User.find();
        return res.json(user);
    },
};