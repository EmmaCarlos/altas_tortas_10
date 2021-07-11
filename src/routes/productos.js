const express = require ('express');
const router = express.Router();
const main = require ('../controllers/productos')

router.get("/list/:category?", productos.index)
router.get("/detail/:id", productos.show)

module.exports = router