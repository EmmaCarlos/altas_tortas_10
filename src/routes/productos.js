const express = require ('express');
const productos = require('../controllers/productos');
const router = express.Router();
const main = require ('../controllers/productos')

router.get("/list/:category?", productos.index)
router.get("/detail/:id", productos.show)
router.get("/detail/:id/:nombre?,",productos.show)

module.exports = router