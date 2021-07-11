const express = require ('express');
const router = express.Router();
const main = require ('../controllers/main')

router.get("/", main.index)
router.get("/contacto", main.contact)

module.exports = router