const express = require ('express');
const router = express.Router();
const main = require ('../controllers/login')

router.get("/", login.index)

module.exports = router