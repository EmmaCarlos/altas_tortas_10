const express = require ('express');
const productos = require('../controllers/productos');
const multer = require('multer');
const router = express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/img/uploads'));
    },
    filename: (req, file, cb) => {
        console.log(file);
        const newFilename = 'torta-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
});

const upload = multer({ storage });

router.get("/list/:category?", productos.index)
router.get("/detail/:id", productos.show)
router.get("/detail/:id/:nombre?,",productos.show)
router.get("/create", productos.create);



router.post('/',[ upload.single('imagen')], productos.store);

module.exports = router