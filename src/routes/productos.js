const express = require ('express');
const router = express.Router();
const main = require ('../controllers/productos')

router.get("/", productos.index)
router.get("/detail", productos.show)

module.exports = router