const Product = require('../models/product.model.js');

// Create and Save a new Note
exports.create = (req, res) => {

};

// Obtiene y retorna todos los productos.
exports.findAll = (req, res) => {
    Product.find()
    .then(notes => {
        res.send(notes);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Ha ocurrido un error al obtener los productos."
        });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {

};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {

};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {

};