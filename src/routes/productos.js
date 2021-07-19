const express = require ('express');
const productos = require('../controllers/productos');
const router = express.Router();

router.get("/crear", productos.create);
router.get("/:category?", productos.index)
router.get("/detalle/:id", productos.show)
router.get("/editar/:id", productos.edit);





module.exports = router