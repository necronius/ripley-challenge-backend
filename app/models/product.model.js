const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    id: Number,
    marca: String, 
    imagen: String,
    nombre: String,
    descripcion: String,
    precio: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);
