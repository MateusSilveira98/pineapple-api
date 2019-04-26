const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: {type: String, default: 'https://res.cloudinary.com/mateus-costa/image/upload/v1556203484/wtt/sem-foto.jpg'},
    internRate: {type: Number, min: 1, max: 5, default: 1},
    deleted: {type: Boolean, default: false},
    status: {type: Boolean, default: true},
    createdAt: {
        type: Date,
        default: Date.now
    }
});
ProductSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Product', ProductSchema);