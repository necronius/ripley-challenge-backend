const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    marca: { type: String, required: true },
    imagen: String,
    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    status: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", ProductSchema);
