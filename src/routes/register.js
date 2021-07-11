const express = require ('express');
const router = express.Router();
const main = require ('../controllers/register')

router.get("/", register.index)

module.exports = router