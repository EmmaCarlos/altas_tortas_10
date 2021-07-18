const express = require ('express');
const router = express.Router();
const usuario = require ('../controllers/usuario')

router.get("/login", usuario.login)
router.get("/register", usuario.register)


module.exports = router