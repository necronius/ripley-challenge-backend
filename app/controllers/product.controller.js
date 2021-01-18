const Product = require("../models/product.model.js");

// Crear un producto
exports.create = (req, res) => {
  // Validación de request
  if (
    !req.body.id ||
    !req.body.marca ||
    !req.body.nombre ||
    !req.body.descripcion ||
    !req.body.precio
  ) {
    return res.status(400).send({
      message: "Datos del producto no pueden estar vacíos.",
    });
  }

  // Crear un producto
  const product = new Product({
    id: req.body.id,
    marca: req.body.marca,
    imagen: req.body.imagen,
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    precio: req.body.precio,
  });

  // Guardar producto en base de datos.
  product
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ha ocurrido un error al guardar el producto.",
      });
    });
};

// Obtiene y retorna todos los productos.
exports.findAll = (req, res) => {
  Product.find()
    .then((products) => {
      res.send(products);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Ha ocurrido un error al obtener los productos.",
      });
    });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
  // Validate Request
  // Validación de request
  if (
    !req.body.marca ||
    !req.body.nombre ||
    !req.body.descripcion ||
    !req.body.precio
  ) {
    return res.status(400).send({
      message: "Datos del producto no pueden estar vacíos.",
    });
  }

  // Actualiza un producto
  Product.findByIdAndUpdate(
    req.params.id,
    {
        marca: req.body.marca,
        imagen: req.body.imagen,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        status: req.body.status
    },
    { new: true }
  )
    .then((product) => {
      if (!product) {
        return res.status(404).send({
          message: "No se encontró producto con id " + req.params.id,
        });
      }
      res.send(product);
    })
    .catch((err) => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "No se encontró producto con id " + req.params.id,
        });
      }
      return res.status(500).send({
        message: "Error actualizando producto con id " + req.params.id,
      });
    });
};

// Elimina producto
exports.delete = (req, res) => {
    Product.findByIdAndRemove(req.params.id)
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "No se encontró producto con id " + req.params.id
            });
        }
        res.send({message: "Producto elimando correctamente!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "No se encontró producto con id  " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "No se pudo eliminar producto con id " + req.params.id
        });
    });
};
