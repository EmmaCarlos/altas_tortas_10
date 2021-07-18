const express = require ('express');
const router = express.Router();
const usuario = require ('../controllers/usuario')

router.get("/login", user.login)
router.get("/register", user.register)
/* agregar rutas de post a cada uno*/

module.exports = router