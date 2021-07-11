const express = require ('express');
const router = express.Router();
const main = require ('../controllers/contacto')

router.get("/", contacto.index)

module.exports = router