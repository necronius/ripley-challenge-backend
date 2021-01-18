module.exports = (app) => {
    const products = require('../controllers/product.controller.js');

    // Crea un nuevo producto
    app.post('/products', products.create);

    // Obtiene todos los productos
    app.get('/products', products.findAll);

    // Obtiene un producto específico
    app.get('/products/:id', products.findOne);

    // Actualiza un producto
    app.put('/products/:id', products.update);

    // Elimina un producto
    app.delete('/products/:id', products.delete);
}