export default (app) => {
    const products = require('../controllers/product.controller.js');

    // Crea un nuevo producto
    app.post('/products', products.create);

    // Obtiene todos los productos
    app.get('/products', products.findAll);

    // Obtiene un producto específico
    app.get('/products/:productId', products.findOne);

    // Actualiza un producto
    app.put('/products/:productId', products.update);

    // Elimina un producto
    app.delete('/products/:productId', products.delete);
}